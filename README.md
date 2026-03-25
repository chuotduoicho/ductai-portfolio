# DucTai Portfolio

A personal portfolio showcasing projects, experience, and certifications with 3D visuals and smooth motion.

## Features
- Single-page layout with smooth scroll navigation
- 3D hero and background effects (Three.js + R3F)
- Project and certificate carousels (Swiper)
- Contact form powered by EmailJS
- AI Assistant (About Me + Project Q&A) with API mode and local fallback

## Tech Stack
- React 18 + Vite
- Three.js, @react-three/fiber, @react-three/drei
- Tailwind CSS
- Framer Motion
- Swiper
- EmailJS
- Firebase Hosting + Firebase Functions (for AI assistant API)

## Getting Started
```bash
npm install --legacy-peer-deps
npm run dev
```

## Scripts
- `npm run dev` - start the local dev server
- `npm run build` - production build
- `npm run preview` - preview the production build

## Environment Variables
Create a `.env` file in the project root:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Optional. Defaults to /api/assistant
VITE_ASSISTANT_API_URL=/api/assistant
```

## AI Assistant Setup (Production)
This project includes a secure server endpoint at `/api/assistant` using Firebase Functions.

1. Install function dependencies:
```bash
cd functions
npm install
cd ..
```
2. Set OpenAI secret for Firebase Functions:
```bash
firebase functions:secrets:set OPENAI_API_KEY
```
3. Build and deploy:
```bash
npm run build
firebase deploy
```

If the API is unavailable, the UI assistant automatically falls back to local portfolio knowledge.

## Project Structure
```
root/
  functions/            # Firebase function for /api/assistant
  public/               # 3D assets (GLTF)
  src/
    assets/             # Images, icons, tech, project, certificate
    components/         # UI sections and 3D canvas components
    constants/          # Shared data (projects, experience, etc.)
    utils/              # Assistant + animation helpers
    App.jsx             # Root component
    main.jsx            # Entry point
    index.css           # Global styles
```

## Deployment
Configured for Firebase Hosting with rewrites:
- `/api/assistant` -> Firebase Function `assistant`
- all other routes -> `index.html`

---
If you clone this repo, replace the content with your own info, assets, and links.


