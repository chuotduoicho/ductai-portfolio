# ductai-portfolio
# Tech Stack
- React 18
- Vite
- Three.js & @react-three/fiber, @react-three/drei
- Tailwind CSS
- Framer Motion
- React Router DOM
- Firebase Hosting
- EmailJS
- Swiper
- MongoDB (icon, có thể dùng cho demo)
- Docker (icon, có thể dùng cho demo)
- Figma (icon, có thể dùng cho demo)
- Git

# Project Structure

```
ductai-portfolio/
├── public/               # Static files, 3D models, textures, images
├── src/                  # Source code
│   ├── assets/           # Ảnh, icon, logo, tech, project, certificate, company
│   ├── components/       # React components (About, Contact, Experience, Hero, Navbar, Tech, Works, Feedbacks, Loader, canvas/)
│   ├── constants/        # Các hằng số dùng chung (navLinks, services, technologies, ...)
│   ├── hoc/              # Higher Order Components (SectionWrapper)
│   ├── utils/            # Hàm tiện ích (motion.js)
│   ├── styles.js         # Định nghĩa style chung
│   ├── App.jsx           # Root component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles, TailwindCSS
├── build/                # Thư mục build sau khi deploy
├── package.json          # Thông tin project & dependencies
├── tailwind.config.cjs   # Cấu hình TailwindCSS
├── postcss.config.cjs    # Cấu hình PostCSS
├── vite.config.js        # Cấu hình Vite
├── firebase.json         # Cấu hình Firebase Hosting
└── README.md             # Tài liệu dự án
```