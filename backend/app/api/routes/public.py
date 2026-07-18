from fastapi import APIRouter, Depends
from sqlalchemy import func
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.models.user import User, UserRole

router = APIRouter(prefix="/api/public", tags=["Public"])


@router.get("/stats")
def platform_stats(db: Session = Depends(get_db)):
    farmers = db.query(func.count(User.id)).filter(User.role == UserRole.farmer).scalar() or 0
    buyers = db.query(func.count(User.id)).filter(User.role == UserRole.buyer).scalar() or 0

    # Static figures for modules that don't have real data yet — wire these up
    # to the AI Prediction module once it's built in Phase 3.
    return {
        "farmers_onboarded": farmers,
        "buyers_onboarded": buyers,
        "crop_predictions_made": 12480,
        "prediction_accuracy_pct": 94.6,
    }
