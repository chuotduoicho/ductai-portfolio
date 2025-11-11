# Performance Optimization Guide

## Các tối ưu đã áp dụng:

### 1. **Code Splitting & Lazy Loading**
- ✅ Lazy load các components không cần thiết ngay (About, Experience, Tech, Works, Contact, etc.)
- ✅ Chia nhỏ vendor chunks (React, Three.js, Animation, UI libraries)
- ✅ Suspense boundaries cho better loading experience

### 2. **3D Canvas Optimization**
- ✅ Tắt antialiasing để tăng FPS
- ✅ PowerPreference: "high-performance" để ưu tiên GPU
- ✅ Performance prop tự động giảm quality khi FPS thấp
- ✅ frameloop='demand' chỉ render khi cần thiết

### 3. **Build Optimization**
- ✅ Terser minification với drop_console
- ✅ Manual chunks cho better caching
- ✅ Source maps tắt trong production
- ✅ Tree shaking tự động

### 4. **Asset Optimization**
- ✅ LazyImage component với IntersectionObserver
- ✅ Native lazy loading cho images
- ✅ Preconnect cho external resources (Google Fonts)

### 5. **CSS & Fonts**
- ✅ Font display: swap để tránh FOIT
- ✅ Content-visibility: auto cho lazy render
- ✅ Will-change hints cho animations

### 6. **Runtime Optimization**
- ✅ Performance monitoring hooks
- ✅ Debounce/throttle utilities
- ✅ Optimize dependencies prebundling

## Kết quả mong đợi:

- 🚀 **First Contentful Paint**: < 1.5s
- 🚀 **Time to Interactive**: < 3s
- 🚀 **Largest Contentful Paint**: < 2.5s
- 🚀 **Cumulative Layout Shift**: < 0.1
- 🚀 **Bundle size reduction**: ~30-40%

## Các bước tiếp theo để tối ưu thêm:

### 1. Optimize Images
```bash
# Cài đặt image optimization
npm install --save-dev vite-plugin-imagemin
```

### 2. Add PWA Support
```bash
# Cài đặt PWA plugin
npm install --save-dev vite-plugin-pwa
```

### 3. Enable Compression
```bash
# Cài đặt compression plugin
npm install --save-dev vite-plugin-compression
```

### 4. Analyze Bundle
```bash
# Build và xem bundle analyzer
npm run build
npx vite-bundle-visualizer
```

### 5. Lighthouse Testing
- Chạy Lighthouse trong Chrome DevTools
- Target: Score > 90 cho tất cả categories

## Sử dụng Performance Utilities:

```jsx
import { usePerformanceMonitoring, debounce, throttle } from './utils/performance';

function MyComponent() {
  usePerformanceMonitoring(); // Monitor performance
  
  const handleScroll = throttle(() => {
    // Heavy scroll handler
  }, 100);
  
  const handleResize = debounce(() => {
    // Heavy resize handler
  }, 250);
}
```

## Monitoring trong Production:

Sử dụng Firebase Analytics để theo dõi:
- Page load times
- User engagement
- Error rates
- Core Web Vitals

## Checklist trước khi Deploy:

- [ ] Run `npm run build` không có warnings
- [ ] Test trên mobile devices
- [ ] Check bundle size < 500KB (gzipped)
- [ ] Lighthouse score > 90
- [ ] Test slow 3G connection
- [ ] Verify lazy loading works
- [ ] Check console for errors
