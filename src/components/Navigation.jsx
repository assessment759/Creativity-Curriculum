import { gsap } from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import { FiBook, FiBookOpen, FiChevronDown, FiEdit3, FiGrid, FiHome, FiLayers, FiMenu, FiMonitor, FiMusic, FiPlay, FiSearch, FiSettings, FiUsers, FiX } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

const curriculumPages = [
  { path: '/art', title: 'Art', icon: FiEdit3, color: 'text-pink-400' },
  { path: '/drama-puppetry', title: 'Drama & Puppetry', icon: FiPlay, color: 'text-violet-400' },
  { path: '/movement-music', title: 'Movement & Music', icon: FiMusic, color: 'text-cyan-400' },
  { path: '/language-literacy', title: 'Language & Literacy', icon: FiBook, color: 'text-emerald-400' },
  { path: '/science', title: 'Science', icon: FiSearch, color: 'text-lime-400' },
  { path: '/engineering', title: 'Engineering', icon: FiSettings, color: 'text-amber-400' },
  { path: '/technologies', title: 'Technologies', icon: FiMonitor, color: 'text-indigo-400' },
  { path: '/mathematics-numeracy', title: 'Mathematics & Numeracy', icon: FiGrid, color: 'text-rose-400' },
  { path: '/humanities-social-sciences', title: 'Humanities & Social Sciences', icon: FiUsers, color: 'text-purple-400' },
  { path: '/integrated-curriculum', title: 'Integrated Curriculum', icon: FiLayers, color: 'text-blue-400' }
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on route change
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    // Animate navigation on mount
    if (navRef.current) {
      gsap.fromTo(navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );
    }
  }, []);

  useEffect(() => {
    // Animate mobile menu
    if (mobileMenuRef.current) {
      if (isMobileMenuOpen) {
        gsap.fromTo(mobileMenuRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
        );

        gsap.fromTo(mobileMenuRef.current.querySelectorAll('.mobile-menu-item'),
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, delay: 0.1, ease: "power2.out" }
        );
      }
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    // Animate dropdown menu
    if (dropdownRef.current) {
      if (isDropdownOpen) {
        gsap.fromTo(dropdownRef.current,
          { opacity: 0, y: -10, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.2, ease: "power2.out" }
        );
      }
    }
  }, [isDropdownOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg border-b border-gray-200'
            : 'bg-white/95 backdrop-blur-md border-b border-gray-200'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-18 px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 font-heading text-xl font-bold text-primary-700 hover:text-primary-800 transition-colors duration-150"
            >
              <FiHome className="text-2xl" />
              <span className="hidden sm:block">Early Childhood Curriculum</span>
              <span className="sm:hidden">ECC</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-all duration-150"
                >
                  Curriculum Areas
                  <FiChevronDown className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div
                    ref={dropdownRef}
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-hero border border-gray-200 p-4 grid grid-cols-2 gap-2"
                  >
                    {curriculumPages.map((page) => (
                      <Link
                        key={page.path}
                        to={page.path}
                        className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-all duration-150 hover:translate-x-1"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <page.icon className={`text-lg ${page.color} flex-shrink-0`} />
                        <span className="text-sm font-medium">{page.title}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/references" className="btn btn-primary">
                <FiBookOpen />
                References
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-gray-700 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-all duration-150"
            >
              {isMobileMenuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed top-18 left-0 right-0 bottom-0 bg-white/98 backdrop-blur-md z-40 lg:hidden overflow-y-auto"
        >
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">
              Curriculum Areas
            </h3>
            <div className="space-y-3">
              {curriculumPages.map((page) => (
                <Link
                  key={page.path}
                  to={page.path}
                  className="mobile-menu-item flex items-center gap-4 p-4 bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                >
                  <page.icon className={`text-xl ${page.color}`} />
                  <span className="font-medium text-gray-700">{page.title}</span>
                </Link>
              ))}
              <Link
                to="/references"
                className="mobile-menu-item flex items-center gap-4 p-4 bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <FiBookOpen className="text-xl text-primary-600" />
                <span className="font-medium text-gray-700">References</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Dropdown Backdrop */}
      {isDropdownOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;
