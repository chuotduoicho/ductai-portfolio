# DucTai Portfolio

A personal portfolio showcasing projects, experience, and certifications with 3D visuals and smooth motion.

## Features
- Single-page layout with smooth scroll navigation
- 3D hero and background effects (Three.js + R3F)
- Project and certificate carousels (Swiper)
- Contact form powered by EmailJS

## Tech Stack
- React 18 + Vite
- Three.js, @react-three/fiber, @react-three/drei
- Tailwind CSS
- Framer Motion
- Swiper
- EmailJS

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
```

## Project Structure
```
root/
  public/               # 3D assets (GLTF)
  src/
    assets/             # Images, icons, tech, project, certificate
    components/         # UI sections and 3D canvas components
    constants/          # Shared data (projects, experience, etc.)
    hoc/                # Higher-order components
    utils/              # Animation helpers
    App.jsx             # Root component
    main.jsx            # Entry point
    index.css           # Global styles
```

## Deployment
This project is ready to deploy on Firebase Hosting or any static hosting provider.

---
If you clone this repo, replace the content with your own info, assets, and links.


