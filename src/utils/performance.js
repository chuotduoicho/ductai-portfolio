import { useEffect } from "react";

/**
 * Hook để theo dõi Web Vitals và performance metrics
 * Chỉ chạy trong production để không ảnh hưởng dev mode
 */
export const usePerformanceMonitoring = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      // Theo dõi First Contentful Paint
      if ("PerformanceObserver" in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            console.log(`${entry.name}: ${entry.startTime}ms`);
            // Có thể gửi metrics này lên analytics
          }
        });

        try {
          observer.observe({ entryTypes: ["paint", "navigation", "resource"] });
        } catch (e) {
          // Browser không support
        }

        return () => observer.disconnect();
      }
    }
  }, []);
};

/**
 * Debounce function để tối ưu event handlers
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Throttle function để giới hạn số lần gọi function
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
