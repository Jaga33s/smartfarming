from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes import auth, farmer, health, public
from app.core.config import settings
from app.db.base import Base
from app.db.session import engine
from app.models import user  # noqa: F401 — ensures model is registered before create_all

app = FastAPI(
    title=settings.PROJECT_NAME,
    description="Backend for Smart Farming Assistant — AI Voice & Crop Intelligence Platform",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router)
app.include_router(auth.router)
app.include_router(public.router)
app.include_router(farmer.router)


@app.on_event("startup")
def on_startup():
    # MVP: create tables directly. Swap for Alembic migrations before
    # production launch so schema changes are versioned.
    Base.metadata.create_all(bind=engine)


@app.get("/")
def root():
    return {"message": "Smart Farming Assistant API is running", "docs": "/docs"}
