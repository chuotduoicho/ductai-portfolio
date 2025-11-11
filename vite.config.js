import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks: {
          // Tách vendor chunks
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "three-vendor": ["three", "@react-three/fiber", "@react-three/drei"],
          "animation-vendor": ["framer-motion"],
          "ui-vendor": [
            "react-tilt",
            "react-vertical-timeline-component",
            "swiper",
          ],
        },
      },
    },
    // Minify và optimize
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true, // Xóa console.log trong production
        drop_debugger: true,
      },
    },
    // Enable source map cho debugging (có thể tắt nếu không cần)
    sourcemap: false,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ["react", "react-dom", "three"],
  },
});
