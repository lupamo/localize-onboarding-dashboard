import httpx
import asyncio
from typing import List, Dict, Any

HEADERS = { "User-agent": "LocalizeOnboardingDashboard/1.0 (https://github.com/lupamo/localize-onboarding-dashboard; Lupamo_Arnold)" }

async def fetch_translation_gaps(lang: str, limit: int = 15) -> List[Dict]:
	url = f"https://api.wikimedia.org/service/lw/recommendation/api/v1/translation"
	params = {"source": "en", "target": lang, "count": limit}
	try:
		async with httpx.AsyncClient(timeout=10) as client:
			res = await client.get(url, params=params, headers=HEADERS)
			res.raise_for_status()
			data = res.json()
			items = data.get("recommendations", [])
			return [
				{
					"type": "translation",
					"title": item["title"],
					"url": f"https://en.wikipedia.org/wiki/{item['title'].replace(' ', '_')}",
					"language": lang,
					"description": f"Missing in {lang} Wikipedia — translate from English",
				}
				for item in items[:limit]
				if item.get("title")
			]
	except Exception as e:
		print(f"Translation fetch failed for {lang}: {e}")
		return []
	
async def fetch_category(
	lang: str,
	category: str,
	task_type: str,
	description: str,
	limit: int = 15,
) -> List[Dict]:
	url = f"https://{lang}.wikipedia.org/w/api.php"
	params = {
		"action": "query",
		"list": "categorymembers",
		"cmtitle": f"Category:{category}",
		"cmlimit": limit,
		"cmsort": "timestamp",
		"cmdir": "descending",
		"cmnamespace": 0,
		"format": "json",
		"origin": "*",
	}

	try:
		async with httpx.AsyncClient(timeout=15) as client:
			res = await client.get(url, params=params, headers=HEADERS)
			res.raise_for_status()
			data = res.json()
			members = data.get("query", {}).get("categorymembers", [])
			return [{
				"type": task_type,
				"title": m["title"],
				"url": f"https://{lang}.wikipedia.org/wiki/{m['title'].replace(' ', '_')}",
				"language": lang,
				"description": description,
			} for m in members if m.get("title")]
	except Exception as e:
		print(f"[{task_type}] failed for lang={lang} category={category}: {e}")
		return []


async def fetch_all_tasks(lang: str, stub_category: str, citation_category: str) -> List[Dict]:
	translations, stubs, citations = await asyncio.gather(
		fetch_translation_gaps(lang, limit=8),
		fetch_category(lang, stub_category, "stub", "Short article needing expansion", limit=8),
		fetch_category(lang, citation_category, "citation", "Article needs references or citations", limit=8),
	)
	print(f"[fetch_all_tasks] lang={lang} → translations={len(translations)} stubs={len(stubs)} citations={len(citations)}")

	#InterLeave: translation, tasks first, then stubs
	combined = []
	for i in range(max(len(translations), len(stubs), len(citations))):
		if i < len(translations): combined.append(translations[i])
		if i < len(stubs): combined.append(stubs[i])
		if i < len(citations): combined.append(citations[i])
	return combined[:24]

