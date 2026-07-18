# Smart Farming Assistant — Phase 1

**AI Voice & Crop Intelligence Platform**
*Empowering Farmers Through Artificial Intelligence.*

This is Phase 1 of the build: a working, verified foundation — not the final
25-page platform. It includes:

- A polished, fully animated **landing page** (Next.js + TypeScript + Tailwind
  + Framer Motion) covering Hero, Stats, Features, AI Technology, Weather,
  Voice Assistant demo, Farmer/Buyer/Admin dashboard previews, Testimonials,
  FAQ, and Contact.
- A working **backend** (FastAPI + PostgreSQL) with JWT authentication and
  role-based access for Admin / Farmer / Buyer, tested end-to-end.
- Render deployment config for both services.

Everything in this phase has been **installed, built, and smoke-tested** —
not just written. See "What was verified" below.

## What's NOT in this phase yet

This is intentionally scoped. Not included yet: the 25+ inner pages (full
dashboards, marketplace, checkout, admin panel), the AI prediction models
themselves (crop/yield/disease/price), Leaflet maps, Recharts dashboards,
real voice recognition, and the AI chatbot. The landing page markets these
modules; the backend has one working example of a real AI-module-shaped
route (`/api/farmer/dashboard-summary`) to build the rest on top of.

Tell me which piece to build next — e.g. "build the Farmer dashboard" or
"build the Crop Prediction module" — and I'll build and verify it the same
way this phase was built.

## Project structure

```
smart-farming/
├── backend/          FastAPI app (Python)
│   ├── app/
│   │   ├── api/routes/   auth, farmer, health, public
│   │   ├── core/         config, JWT + password hashing
│   │   ├── db/           SQLAlchemy engine/session
│   │   ├── models/       User model (role: admin/farmer/buyer)
│   │   └── schemas/      Pydantic request/response models
│   ├── requirements.txt
│   └── .env.example
├── frontend/          Next.js app (TypeScript)
│   ├── app/              layout.tsx, page.tsx, globals.css
│   ├── components/       Navbar, Hero, Stats, Features, etc.
│   ├── lib/utils.ts
│   ├── package.json
│   └── .env.example
└── render.yaml        One-click Render Blueprint (backend + frontend + Postgres)
```

## Deploying to Render

**Fastest path — Blueprint:**

1. Push this folder to a GitHub repo.
2. In Render: **New → Blueprint**, point it at your repo. Render reads
   `render.yaml` and provisions all three resources (Postgres, backend web
   service, frontend web service) together.
3. Render auto-generates `SECRET_KEY` and wires `DATABASE_URL` from the
   database to the backend automatically.
4. After the backend deploys, copy its public URL into the frontend's
   `NEXT_PUBLIC_API_URL` env var if it doesn't match `render.yaml`'s default,
   and copy the frontend's URL into the backend's `CORS_ORIGINS`. Redeploy
   either service after changing env vars.

**Manual path (if you'd rather not use the Blueprint):**

1. **Database**: New → PostgreSQL. Copy the **Internal Database URL**.
2. **Backend**: New → Web Service → point at `backend/`.
   - Build command: `pip install -r requirements.txt`
   - Start command: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
   - Env vars: `DATABASE_URL` (from step 1), `SECRET_KEY` (any long random
     string), `CORS_ORIGINS` (your frontend URL, added after step 3).
3. **Frontend**: New → Web Service → point at `frontend/`.
   - Build command: `npm install && npm run build`
   - Start command: `npm run start`
   - Env var: `NEXT_PUBLIC_API_URL` (your backend URL from step 2).
4. Go back and set `CORS_ORIGINS` on the backend to the frontend's real URL,
   then redeploy the backend.

## Running locally

**Backend**
```bash
cd backend
python3 -m venv venv && source venv/bin/activate
pip install -r requirements.txt
cp .env.example .env   # edit DATABASE_URL to point at a local Postgres
uvicorn app.main:app --reload
# → http://localhost:8000/docs for interactive API docs
```

**Frontend**
```bash
cd frontend
npm install
cp .env.example .env.local   # NEXT_PUBLIC_API_URL=http://localhost:8000
npm run dev
# → http://localhost:3000
```

## What was verified before delivery

- Backend: dependencies installed cleanly; app imports with zero errors; all
  routes register; live server tested end-to-end — register, login, JWT
  issuance, `/me`, role-protected route (allowed and correctly rejected with
  401 when unauthenticated), duplicate-email rejection (400), wrong-password
  rejection (401), public stats route.
- Frontend: dependencies installed cleanly; `next build` completes with zero
  type errors and zero compile errors; dev server serves HTTP 200; the
  rendered page was screenshotted and visually checked for layout issues.
- Next.js was bumped to `14.2.35` to close a known security advisory present
  in `14.2.5`.

One caveat: Google Fonts are fetched from the network at build time. This
sandbox blocks that domain, so font-loading itself couldn't be verified here
— Render's build environment has normal internet access, so this should not
be an issue, but flagging it rather than claiming 100% certainty on a part I
couldn't directly test.
