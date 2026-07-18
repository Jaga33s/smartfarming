from fastapi import APIRouter, Depends

from app.api.deps import require_role
from app.models.user import User, UserRole

router = APIRouter(prefix="/api/farmer", tags=["Farmer"])


@router.get("/dashboard-summary")
def dashboard_summary(current_user: User = Depends(require_role(UserRole.farmer, UserRole.admin))):
    # Placeholder payload — replace with real queries (listings, orders, yield
    # forecasts) once the Farmer Dashboard module (Phase 2) is built.
    return {
        "farmer": current_user.full_name,
        "verified": current_user.is_verified,
        "active_listings": 0,
        "pending_orders": 0,
        "this_month_earnings": 0,
    }
