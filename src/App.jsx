import { lazy, Suspense } from "react";

// Eager load critical components
import { Hero, Navbar } from "./components";

// Lazy load non-critical sections
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Experience = lazy(() => import("./components/Experience"));
const Feedbacks = lazy(() => import("./components/Feedbacks"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-primary">
    <div className="text-white text-xl">Loading...</div>
  </div>
);

const App = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <Suspense fallback={<PageLoader />}>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </Suspense>
    </div>
  );
};

export default App;