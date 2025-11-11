import { BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

// Eager load components hiển thị đầu tiên
import { Hero, Navbar } from "./components";

// Lazy load components không cần thiết ngay lập tức
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Experience = lazy(() => import("./components/Experience"));
const Feedbacks = lazy(() => import("./components/Feedbacks"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwPJTBMb9syn3lxzl1C0ho8s0v2TDI1vM",
  authDomain: "ductai-porfolio.firebaseapp.com",
  projectId: "ductai-porfolio",
  storageBucket: "ductai-porfolio.appspot.com",
  messagingSenderId: "287151649595",
  appId: "1:287151649595:web:4fec14e993635daff4fd1e",
  measurementId: "G-6VSGGHJNKV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-primary">
    <div className="text-white text-xl">Loading...</div>
  </div>
);

const App = () => {
  logEvent(analytics, "notification_received");

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
