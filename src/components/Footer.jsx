import React from 'react';
import { FiAward, FiBook, FiBookOpen, FiChevronRight, FiHeart, FiPlay, FiUser } from 'react-icons/fi';

const Footer = () => {
  const quickLinks = [
    { label: '12 comprehensive pages', icon: FiBookOpen },
    { label: '500-word transcripts per page', icon: FiChevronRight },
    { label: 'Video enactments included', icon: FiPlay },
    { label: 'Critical reflection (200 words)', icon: FiBook },
    { label: 'APA 7 references', icon: FiAward },
  ];

  const features = [
    'Responsive mobile design',
    'Smooth GSAP animations',
    'Collapsible transcript sections',
    'Video accessibility features',
    'Academic citation format',
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Background with enhanced gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-art via-accent-music to-accent-science"></div>

      {/* Floating orbs for visual interest */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-secondary-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-accent-literacy/10 rounded-full blur-xl"></div>

      <div className="relative z-10 py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Main content grid */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">

            {/* About Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-literacy to-accent-science rounded-xl flex items-center justify-center">
                  <FiBook className="text-white text-xl" />
                </div>
                <h4 className="text-2xl font-heading font-bold text-white">Assessment Information</h4>
              </div>
              <p className="text-white/80 text-base leading-relaxed mb-6">
                This website presents a comprehensive early childhood creativity curriculum
                framework across 10 curriculum areas for children aged 0-8 years, designed
                to foster creative thinking and holistic development.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent-art/20 text-accent-art text-sm rounded-full border border-accent-art/30">
                  Early Childhood
                </span>
                <span className="px-3 py-1 bg-accent-science/20 text-accent-science text-sm rounded-full border border-accent-science/30">
                  Creativity Framework
                </span>
                <span className="px-3 py-1 bg-accent-literacy/20 text-accent-literacy text-sm rounded-full border border-accent-literacy/30">
                  Ages 0-8
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-heading font-semibold text-white mb-6 flex items-center gap-2">
                <FiBookOpen className="text-accent-music" />
                Quick Links
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/80 text-sm group">
                    <link.icon className="text-accent-music mt-0.5 group-hover:text-accent-literacy transition-colors duration-200 flex-shrink-0" />
                    <span className="group-hover:text-white transition-colors duration-200">
                      {link.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-xl font-heading font-semibold text-white mb-6 flex items-center gap-2">
                <FiAward className="text-accent-engineering" />
                Accessibility & Features
              </h4>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-white/80 text-sm group">
                    <div className="w-2 h-2 bg-accent-engineering rounded-full group-hover:bg-accent-tech transition-colors duration-200 flex-shrink-0"></div>
                    <span className="group-hover:text-white transition-colors duration-200">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Enhanced bottom section */}
          <div className="border-t border-gradient-to-r from-white/10 via-white/20 to-white/10 pt-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

              {/* Left section */}
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-10 h-10 bg-gradient-to-br from-accent-art to-accent-drama rounded-lg flex items-center justify-center">
                  <FiUser className="text-white" />
                </div>
                <div>
                  <div className="font-semibold">Early Childhood Education Assessment</div>
                  <div className="text-xs text-white/60">Comprehensive Curriculum Framework</div>
                </div>
              </div>

              {/* Center section */}
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <span>Made with</span>
                <FiHeart className="text-red-400 animate-pulse" />
                <span>for creative learning & development</span>
              </div>

              {/* Right section */}
              <div className="text-sm text-white/70 text-center lg:text-right">
                <div>© {new Date().getFullYear()} Educational Assessment Project</div>
                <div className="text-xs text-white/50 mt-1">Fostering creativity in early childhood</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
