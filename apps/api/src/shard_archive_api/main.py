from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from shard_archive_api.routes.health import router as health_router

app = FastAPI(title="Shard Archive API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_methods=["GET"],
    allow_headers=["*"],
)

app.include_router(health_router)

