import time
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from wiki import fetch_all_tasks

app = FastAPI()

app.add_middleware(
	CORSMiddleware,
	allow_origins=["http://localhost:3000"],
	allow_methods=["GET"],
	allow_headers=["*"],
)

#in memory cache
cache: dict = {}
CACHE_TTL = 3600

@app.get("/tasks")
async def get_tasks(lang: str, stub_category: str, citation_category: str):
	if not lang or not stub_category or not citation_category:
		raise HTTPException(status_code=400, detail="lang, stub_category, and citation_category required")
	
	cache_key = f"{lang}:{stub_category}:{citation_category}"
	now = time.time()

	if cache_key in cache:
		age = now - cache[cache_key]["fetched_at"]
		if age < CACHE_TTL:
			print(f"Cache hit: {cache_key} ({int(age)}s old)")
			return cache[cache_key]["data"]
		
	print(f"Cache miss: {cache_key} - fetching from wikimedia")
	tasks = await fetch_all_tasks(lang, stub_category, citation_category)
	cache[cache_key] = {"data": tasks, "fetched_at": now}
	return tasks

@app.get("/health")
def health():
	return {"status": "ok", "cached_keys": list(cache.keys())}
