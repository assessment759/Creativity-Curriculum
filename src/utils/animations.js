import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Enhanced page animations
export const pageAnimations = {
  // Hero section animations with floating elements
  heroEntrance: (heroRef, options = {}) => {
    const {
      delay = 0.3,
      stagger = 0.2,
      duration = 0.8,
      addFloatingElements = true
    } = options;

    if (!heroRef.current) return;

    const tl = gsap.timeline();

    // Main hero animation
    tl.fromTo(heroRef.current.children,
      {
        opacity: 0,
        y: 100,
        scale: 0.8,
        rotationX: 15
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationX: 0,
        duration,
        stagger,
        ease: "power3.out",
        delay
      }
    );

    // Add floating animation to hero elements
    if (addFloatingElements) {
      gsap.to(heroRef.current, {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });
    }

    return tl;
  },

  // Card grid animations with 3D effects
  cardGrid: (cardsRef, options = {}) => {
    const {
      stagger = 0.1,
      duration = 0.6,
      delay = 0.6,
      perspective = true
    } = options;

    if (!cardsRef.current) return;

    const cards = cardsRef.current.children;

    // Set initial state with 3D perspective
    gsap.set(cards, {
      opacity: 0,
      y: 50,
      rotationY: perspective ? 25 : 0,
      scale: 0.9,
      transformOrigin: "center center",
      perspective: perspective ? 1000 : "none"
    });

    // Animate in
    const tl = gsap.timeline();
    tl.to(cards, {
      opacity: 1,
      y: 0,
      rotationY: 0,
      scale: 1,
      duration,
      stagger,
      ease: "back.out(1.2)",
      delay
    });

    // Add hover effects
    Array.from(cards).forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          scale: 1.05,
          y: -10,
          rotationY: perspective ? 5 : 0,
          duration: 0.3,
          ease: "power2.out",
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          scale: 1,
          y: 0,
          rotationY: 0,
          duration: 0.3,
          ease: "power2.out",
          boxShadow: "0 4px 6px rgba(0,0,0,0.05)"
        });
      });
    });

    return tl;
  },

  // Age group sections with staggered reveal
  ageGroups: (experiencesRef, options = {}) => {
    const {
      stagger = 0.2,
      duration = 0.6,
      delay = 1.2
    } = options;

    if (!experiencesRef.current) return;

    const ageGroups = experiencesRef.current.querySelectorAll('.age-group');

    gsap.fromTo(ageGroups,
      {
        opacity: 0,
        x: -50,
        scale: 0.95,
        filter: "blur(5px)"
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        filter: "blur(0px)",
        duration,
        stagger,
        ease: "power2.out",
        delay
      }
    );

    return gsap.timeline();
  },

  // Scroll-triggered animations
  setupScrollAnimations: (selector, options = {}) => {
    return ScrollTrigger.batch(selector, {
      onEnter: (elements) => {
        gsap.fromTo(elements,
          {
            opacity: 0,
            y: 30,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out"
          }
        );
      },
      onLeave: (elements) => {
        gsap.to(elements, {
          opacity: 0.7,
          duration: 0.3
        });
      },
      onEnterBack: (elements) => {
        gsap.to(elements, {
          opacity: 1,
          duration: 0.3
        });
      },
      start: options.start || "top 80%",
      end: options.end || "bottom 20%"
    });
  },

  // Floating particles background
  createFloatingParticles: (container, count = 15) => {
    if (!container) return;

    const particles = [];
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.className = 'floating-particle';
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 8 + 4}px;
        height: ${Math.random() * 8 + 4}px;
        background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.2) 100%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 1;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
      `;

      container.appendChild(particle);
      particles.push(particle);

      // Animate each particle
      gsap.to(particle, {
        x: `random(-100, 100)`,
        y: `random(-100, 100)`,
        rotation: 360,
        duration: `random(10, 20)`,
        repeat: -1,
        yoyo: true,
        ease: "none"
      });

      gsap.to(particle, {
        opacity: Math.random() * 0.5 + 0.3,
        duration: `random(2, 4)`,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });
    }

    return particles;
  },

  // Video container animations
  videoContainer: (videoSection, options = {}) => {
    const { delay = 0.8, duration = 0.8 } = options;

    if (!videoSection) return;

    gsap.fromTo(videoSection,
      {
        opacity: 0,
        y: 40,
        scale: 0.95
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration,
        ease: "power3.out",
        delay,
        scrollTrigger: {
          trigger: videoSection,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate video items
    const videoItems = videoSection.querySelectorAll('.aspect-video');
    gsap.fromTo(videoItems,
      {
        opacity: 0,
        scale: 0.9,
        rotationY: 15
      },
      {
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "back.out(1.2)",
        delay: delay + 0.3
      }
    );

    return gsap.timeline();
  },

  // Button hover effects
  enhanceButtons: (selector = '.btn') => {
    const buttons = document.querySelectorAll(selector);

    buttons.forEach(button => {
      // Set initial state
      gsap.set(button, {
        transformOrigin: "center center"
      });

      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          scale: 1.05,
          duration: 0.3,
          ease: "back.out(1.7)"
        });
      });

      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      button.addEventListener('mousedown', () => {
        gsap.to(button, {
          scale: 0.95,
          duration: 0.1,
          ease: "power2.out"
        });
      });

      button.addEventListener('mouseup', () => {
        gsap.to(button, {
          scale: 1.05,
          duration: 0.1,
          ease: "power2.out"
        });
      });
    });
  },

  // Text reveal animation
  textReveal: (textElement, options = {}) => {
    const {
      duration = 0.8,
      stagger = 0.03,
      delay = 0.2
    } = options;

    if (!textElement) return;

    // Split text into spans
    const text = textElement.textContent;
    const words = text.split(' ');
    textElement.innerHTML = words.map(word =>
      `<span class="word-reveal">${word}</span>`
    ).join(' ');

    const wordElements = textElement.querySelectorAll('.word-reveal');

    gsap.fromTo(wordElements,
      {
        opacity: 0,
        y: 20,
        rotationX: -45
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration,
        stagger,
        ease: "power3.out",
        delay
      }
    );

    return gsap.timeline();
  }
};

// Utility functions
export const animationUtils = {
  // Clean up all animations
  cleanup: () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    gsap.killTweensOf("*");
  },

  // Refresh ScrollTrigger
  refresh: () => {
    ScrollTrigger.refresh();
  },

  // Create morphing shapes
  createMorphingShapes: (container) => {
    if (!container) return;

    const shapes = [];
    for (let i = 0; i < 5; i++) {
      const shape = document.createElement('div');
      shape.className = 'morphing-shape';
      shape.style.cssText = `
        position: absolute;
        width: ${Math.random() * 200 + 100}px;
        height: ${Math.random() * 200 + 100}px;
        background: linear-gradient(45deg,
          rgba(59, 130, 246, 0.1),
          rgba(139, 92, 246, 0.1));
        border-radius: ${Math.random() * 50 + 25}%;
        pointer-events: none;
        z-index: 1;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        filter: blur(40px);
      `;

      container.appendChild(shape);
      shapes.push(shape);

      // Animate morphing
      gsap.to(shape, {
        scale: Math.random() * 1.5 + 0.5,
        rotation: 360,
        borderRadius: `${Math.random() * 75 + 25}%`,
        duration: Math.random() * 20 + 10,
        repeat: -1,
        yoyo: true,
        ease: "none"
      });
    }

    return shapes;
  }
};
