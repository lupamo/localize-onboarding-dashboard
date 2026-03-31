import httpx
import asyncio
from typing import List, Dict, Any

HEADERS = { "User-agent": "LocalizeOnboardingDashboard/1.0" }

async def fetch_translation_gaps(lang: str, limit: int = 15) -> List[Dict]:
	url = f"https: //cxserver.wikimedia.org/v1/list/missing"
	params = {"from": "en", "to": lang, "limit": limit}
	try:
		async with httpx.AsyncCluent(timeout=10) as client:
			res = await client.get(url, params=params, headers=HEADERS)
			res.raise_for_status()
			data = res.json()
			articles = data.get("items", [])
			return [
				{
					"type": "translation",
					"title": a.get("title", ""),
					"url": f"https://en.wikipedia.org/wiki/{a.get('title','').replace(' ','_')}",
					"language": lang,
					"description": f"Missing in {lang} Wikipedia — translate from English",
				}
				for a in articles[:limit]
				if a.get("title")
			]
	except Exception as e:
		print(f"Translation gap fetch failed for {lang}: {e}")
		return []
	
async def fetch_stubs(lang: str, sub_category: str, limit: int = 15) -> List[Dict]:
	url = f"https://{lang}.wikipedia.org/w/api.php"
	params = {
		"action": "query",
		"list": "categorymembers",
		"cmtitle": f"Category:{sub_category}",
		"cmlimit": limit,
		"cmsort": "timestamp",
		"cmdir": "descending",
		"format": "json",
		"origin": "*",
	}
	try:
		async with httpx.AsyncClient(timeout=10) as client:
			res = await client.get(url, params-params, headers=HEADERS)
			res.raise_for_status()
			data = res.json()
			members = data.get("query", {}).get("categorymembers", [])
			return [
				{
					"type": "stub",
					"title": m.get("title", ""),
					"url": f"https://{lang}.wikipedia.org/wiki/{m.get('title','').replace(' ','_')}",
					"language": lang,
					"description": "Short article needing expansion",
				}
				for m in members
				if m.get("title") and not m["title"].startswith("Category:")
			]
	except Exception as e:
		print(f"Stub fetch failed for {lang} - {sub_category}: {e}")
		return []

async def fetch_all_tasks(lang: str, stub_category: str) -> List[Dict]:
	translations, stubs = await asyncio.gather(
		fetch_translation_gaps(lang),
		fetch_stubs(lang, stub_category),
	)
	#InterLeave: translation, tasks first, then stubs
	combined = []
	for t, s in zip(translations, stubs):
		combined.append(t)
		combined.append(s)
	#add remaining if lists are unequal length
	combined += translations[len(stubs):]
	combined += stubs[len(translations):]
	return combined[:20]

