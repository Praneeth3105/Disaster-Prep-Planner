# Readyline — Emergency Preparedness Planner

A ReactJS web app for building and tracking a household disaster preparedness plan:
supply checklist, family communication plan, evacuation steps, and emergency
helplines/hazard guides. All data is stored locally in the browser (no backend,
no account needed).

## Features

- **Dashboard** — a readiness gauge and per-category kit progress at a glance.
- **Supply Checklist** — 30+ items across Water & Food, Medical, Tools & Power,
  Documents, and Clothing & Shelter, with suggested quantities.
- **Family Plan** — add/remove emergency contacts and meeting points.
- **Evacuation Plan** — a step-by-step evacuation sequence plus your saved
  meeting points.
- **Alerts & Resources** — India-wide emergency helplines and short response
  guides for earthquake, flood, urban fire, and heatwave.

Progress is saved to `localStorage`, so it persists between visits on the same
device/browser.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview
```

The production build is written to `dist/`, which you can deploy to any static
host (Vercel, Netlify, GitHub Pages, S3, etc.).

## Project structure

```
src/
  components/       UI screens (Dashboard, Checklist, FamilyPlan, EvacuationPlan, Resources)
  data/             Static reference data (checklist items, helplines, hazard guides)
  hooks/            useLocalStorage — persists state to the browser
  App.jsx           Page routing (simple tab-based state, no router needed)
  index.css         Design tokens and all styling
```

## Customizing

- **Checklist items**: edit `src/data/checklistData.js`.
- **Helplines / hazard guides**: edit `src/data/resourcesData.js` (numbers here
  are India-focused — swap in your country's equivalents if needed).
- **Colors/type**: CSS custom properties are defined at the top of
  `src/index.css` under `:root`.

## Notes

This tool helps with planning and is not a substitute for official guidance
from local disaster management authorities during an actual emergency.
