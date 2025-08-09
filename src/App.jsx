import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

// Components
import Footer from './components/Footer';
import LoadingAnimation from './components/LoadingAnimation';
import Navigation from './components/Navigation';

// Pages
import Art from './pages/Art';
import DramaPuppetry from './pages/DramaPuppetry';
import Engineering from './pages/Engineering';
import Home from './pages/Home';
import HumanitiesSocialSciences from './pages/HumanitiesSocialSciences';
import IntegratedCurriculum from './pages/IntegratedCurriculum';
import LanguageLiteracy from './pages/LanguageLiteracy';
import MathematicsNumeracy from './pages/MathematicsNumeracy';
import MovementMusic from './pages/MovementMusic';
import References from './pages/References';
import Science from './pages/Science';
import Technologies from './pages/Technologies';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Global GSAP settings
    gsap.config({
      nullTargetWarn: false,
      trialWarn: false
    });

    // Set default animation settings
    gsap.defaults({
      duration: 0.6,
      ease: "power2.out"
    });

    // Page transition on route change
    if (showContent) {
      gsap.fromTo("main",
        { opacity: 0, y: 20, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          clearProps: "all"
        }
      );
    }

  }, [location, showContent]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
      gsap.fromTo("main",
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          clearProps: "all"
        }
      );
    }, 100);
  };

  return (
    <div className="App">
      {isLoading && <LoadingAnimation onComplete={handleLoadingComplete} />}

      {showContent && (
        <>
          <Navigation />

          <main className="min-h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/art" element={<Art />} />
              <Route path="/drama-puppetry" element={<DramaPuppetry />} />
              <Route path="/movement-music" element={<MovementMusic />} />
              <Route path="/language-literacy" element={<LanguageLiteracy />} />
              <Route path="/science" element={<Science />} />
              <Route path="/engineering" element={<Engineering />} />
              <Route path="/technologies" element={<Technologies />} />
              <Route path="/mathematics-numeracy" element={<MathematicsNumeracy />} />
              <Route path="/humanities-social-sciences" element={<HumanitiesSocialSciences />} />
              <Route path="/integrated-curriculum" element={<IntegratedCurriculum />} />
              <Route path="/references" element={<References />} />
            </Routes>
          </main>

          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
