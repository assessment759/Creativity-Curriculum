import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react';

const LoadingAnimation = ({ onComplete }) => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const particlesRef = useRef(null);
  const textRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(onComplete, 500);
      }
    });

    // Create floating particles
    const particles = [];
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'loading-particle';
      particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: linear-gradient(45deg, #3b82f6, #8b5cf6);
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
      `;
      particlesRef.current?.appendChild(particle);
      particles.push(particle);
    }

    // Animate particles
    particles.forEach((particle, index) => {
      gsap.fromTo(particle,
        {
          opacity: 0,
          scale: 0,
          rotation: 0
        },
        {
          opacity: 1,
          scale: Math.random() * 1.5 + 0.5,
          rotation: 360,
          duration: 2,
          delay: index * 0.1,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut"
        }
      );
    });

    // Main animation sequence
    tl.fromTo(logoRef.current,
      { scale: 0, rotation: -180, opacity: 0 },
      { scale: 1, rotation: 0, opacity: 1, duration: 1, ease: "back.out(1.7)" }
    )
    .fromTo(textRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.5"
    )
    .fromTo(progressRef.current,
      { width: "0%" },
      { width: "100%", duration: 2, ease: "power2.inOut" }, "-=0.3"
    )
    .to(containerRef.current,
      {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: "power3.in"
      }, "+=0.5"
    );

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary-500 via-purple-600 to-pink-500"
      style={{
        background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)'
      }}
    >
      <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none" />

      <div className="text-center text-white relative z-10">
        <div ref={logoRef} className="mb-8">
          <div className="w-24 h-24 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 shadow-2xl">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-white">EC</span>
            </div>
          </div>
        </div>

        <div ref={textRef} className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent">
            Early Childhood
          </h1>
          <p className="text-lg md:text-xl opacity-90 font-medium">
            Creativity Curriculum
          </p>
        </div>

        <div className="w-64 mx-auto">
          <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
            <div
              ref={progressRef}
              className="h-full bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full"
            />
          </div>
          <p className="text-sm mt-2 opacity-75">Loading amazing content...</p>
        </div>
      </div>

      <style jsx>{`
        .loading-particle {
          filter: blur(0.5px);
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
        }
      `}</style>
    </div>
  );
};

export default LoadingAnimation;
