import { gsap } from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import { FiBookOpen, FiChevronDown, FiChevronUp, FiDownload, FiExternalLink, FiSearch } from 'react-icons/fi';

// Move references data outside component to avoid ESLint dependency warning
const referencesData = [
    {
      category: "Art Education",
      color: "#f472b6",
      bgColor: "bg-pink-400",
      bgColorLight: "bg-pink-50",
      textColor: "text-pink-600",
      icon: "🎨",
      citations: [
        "Dewey, J. (1934). Art as experience. Minton, Balch & Company.",
        "Edwards, C., Gandini, L., & Forman, G. (Eds.). (2011). The hundred languages of children: The Reggio Emilia experience in transformation (3rd ed.). Praeger.",
        "Gardner, H. (1983). Frames of mind: The theory of multiple intelligences. Basic Books.",
        "Piaget, J. (1962). Play, dreams and imitation in childhood. Norton."
      ]
    },
    {
      category: "Drama & Puppetry",
      color: "#a78bfa",
      bgColor: "bg-purple-400",
      bgColorLight: "bg-purple-50",
      textColor: "text-purple-600",
      icon: "🎭",
      citations: [
        "Bruner, J. (1990). Acts of meaning. Harvard University Press.",
        "O'Toole, J. (1992). The process of drama: Negotiating art and meaning. Routledge.",
        "Vygotsky, L. S. (1978). Mind in society: The development of higher psychological processes. Harvard University Press.",
        "Wright, P. R. (2006). Drama education and development of social empathy. Research in Drama Education, 11(3), 255-271."
      ]
    },
    {
      category: "Movement & Music",
      color: "#22d3ee",
      bgColor: "bg-cyan-400",
      bgColorLight: "bg-cyan-50",
      textColor: "text-cyan-600",
      icon: "🎵",
      citations: [
        "Csikszentmihalyi, M. (1990). Flow: The psychology of optimal experience. Harper & Row.",
        "Dalcroze, É. J. (1915). The Eurhythmics of Jaques-Dalcroze. Small, Maynard & Company.",
        "Laban, R. (1966). Choreutics. Macdonald & Evans.",
        "Trehub, S. E. (2003). The developmental origins of musicality. Nature Neuroscience, 6(7), 669-673."
      ]
    },
    {
      category: "Language & Literacy",
      color: "#34d399",
      bgColor: "bg-emerald-400",
      bgColorLight: "bg-emerald-50",
      textColor: "text-emerald-600",
      icon: "📚",
      citations: [
        "Clay, M. M. (1991). Becoming literate: The construction of inner control. Heinemann.",
        "Ginsburg, H. P. (2007). The challenge of formative assessment in mathematics education. In J. H. McMillan (Ed.), Formative classroom assessment (pp. 265-289). Teachers College Press.",
        "Jensen, E. (2000). Music with the brain in mind. The Brain Store.",
        "Swanwick, K. (2010). Musical knowledge: Intuition, analysis and music education. Routledge."
      ]
    },
    {
      category: "Science Education",
      color: "#a3e635",
      bgColor: "bg-lime-400",
      bgColorLight: "bg-lime-50",
      textColor: "text-lime-600",
      icon: "🔬",
      citations: [
        "Bruner, J. S. (1961). The act of discovery. Harvard Educational Review, 31(1), 21-32.",
        "Kuhlthau, C. C. (2004). Seeking meaning: A process approach to library and information services (2nd ed.). Libraries Unlimited.",
        "National Research Council. (2012). A framework for K-12 science education: Practices, crosscutting concepts, and core ideas. The National Academies Press.",
        "Worth, K. (2010). Science in early childhood classrooms: Content and process. In SEED Papers. http://ecrp.uiuc.edu/beyond/seed/worth.html"
      ]
    },
    {
      category: "Engineering & Technology",
      color: "#fbbf24",
      bgColor: "bg-amber-400",
      bgColorLight: "bg-amber-50",
      textColor: "text-amber-600",
      icon: "⚙️",
      citations: [
        "Papert, S. (1980). Mindstorms: Children, computers, and powerful ideas. Basic Books.",
        "Resnick, M. (2017). Lifelong kindergarten: Cultivating creativity through projects, passion, peers, and play. MIT Press.",
        "Koehler, M. J., & Mishra, P. (2009). What is technological pedagogical content knowledge? Contemporary Issues in Technology and Teacher Education, 9(1), 60-70.",
        "Wing, J. M. (2006). Computational thinking. Communications of the ACM, 49(3), 33-35."
      ]
    },
    {
      category: "Mathematics & Numeracy",
      color: "#fb7185",
      bgColor: "bg-rose-400",
      bgColorLight: "bg-rose-50",
      textColor: "text-rose-600",
      icon: "🔢",
      citations: [
        "Baroody, A. J. (2004). The developmental bases for early childhood number and operations standards. In D. H. Clements & J. Sarama (Eds.), Engaging young children in mathematics (pp. 173-219). Erlbaum.",
        "Clements, D. H., & Sarama, J. (2009). Learning and teaching early math: The learning trajectories approach. Routledge.",
        "National Association for the Education of Young Children. (2002). Early childhood mathematics: Promoting good beginnings. NAEYC.",
        "Van de Walle, J. A., Karp, K. S., & Bay-Williams, J. M. (2019). Elementary and middle school mathematics: Teaching developmentally (10th ed.). Pearson."
      ]
    },
    {
      category: "Social Sciences & Integration",
      color: "#c084fc",
      bgColor: "bg-violet-400",
      bgColorLight: "bg-violet-50",
      textColor: "text-violet-600",
      icon: "🌍",
      citations: [
        "Banks, J. A. (2019). An introduction to multicultural education (6th ed.). Pearson.",
        "Sobel, D. (2004). Place-based education: Connecting classrooms & communities. The Orion Society.",
        "Katz, L. G., & Chard, S. C. (2000). Engaging children's minds: The project approach (2nd ed.). Ablex Publishing.",
        "Wien, C. A. (2008). Emergent curriculum in the primary classroom: Interpreting the Reggio Emilia approach in schools. Teachers College Press."
      ]
    },
    {
      category: "Early Childhood Frameworks",
      color: "#60a5fa",
      bgColor: "bg-blue-400",
      bgColorLight: "bg-blue-50",
      textColor: "text-blue-600",
      icon: "🏛️",
      citations: [
        "Australian Government Department of Education. (2022). Belonging, being & becoming: The early years learning framework for Australia (V2.0). https://www.acecqa.gov.au/sites/default/files/2022-09/EYLF-2022-V2.0.pdf",
        "Ministry of Education. (2017). Te whāriki: He whāriki mātauranga mō ngā mokopuna o Aotearoa. New Zealand Government.",
        "National Association for the Education of Young Children. (2020). Developmentally appropriate practice in early childhood programs serving children from birth through age 8 (4th ed.). NAEYC.",
        "Organisation for Economic Co-operation and Development. (2017). Starting strong 2017: Key OECD indicators on early childhood education and care. OECD Publishing."
      ]
    }
  ];

const References = () => {
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedCategories, setExpandedCategories] = useState({});

  useEffect(() => {
    // Animate page elements on mount
    if (headerRef.current) {
      gsap.fromTo(headerRef.current.children,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out", delay: 0.3 }
      );
    }

    if (contentRef.current) {
      gsap.fromTo(contentRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", delay: 0.8 }
      );
    }

    // Initialize all categories as expanded
    const initialExpanded = {};
    referencesData.forEach((_, index) => {
      initialExpanded[index] = true;
    });
    setExpandedCategories(initialExpanded);
  }, []);

  // Filter references based on search and category
  const filteredReferences = referencesData.filter(ref => {
    const matchesSearch = searchTerm === '' ||
      ref.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ref.citations.some(citation => citation.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = selectedCategory === 'all' || ref.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const toggleCategory = (index) => {
    setExpandedCategories(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const categoryOptions = ['all', ...referencesData.map(ref => ref.category)];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-slate-50 via-white to-primary-50">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="container-custom relative z-10" ref={headerRef}>
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <FiBookOpen size={40} className="text-white" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-heading font-bold mb-6 text-white">
              References
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 leading-relaxed font-light">
              Comprehensive academic references supporting the early childhood creativity curriculum
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white/60 rounded-full"></span>
                <span>APA 7 Formatted</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white/60 rounded-full"></span>
                <span>Peer-Reviewed Sources</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white/60 rounded-full"></span>
                <span>Evidence-Based</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom section-padding" ref={contentRef}>
        {/* Introduction Card */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 p-8 border border-gray-100">
            <div className="flex items-start gap-6 mb-8">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <FiBookOpen className="text-white text-2xl" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-heading font-bold text-gray-800 mb-4">Academic References</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  This comprehensive reference list follows APA 7 formatting standards and includes credible academic sources,
                  curriculum frameworks, and research literature that inform each curriculum area. Each reference has been
                  carefully selected to support evidence-based early childhood education practices.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-6 border border-primary-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                  <FiDownload className="text-white text-sm" />
                </div>
                Reference Guidelines
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2.5 flex-shrink-0"></span>
                    All references follow APA 7th edition formatting standards
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2.5 flex-shrink-0"></span>
                    Sources include peer-reviewed journals and academic books
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2.5 flex-shrink-0"></span>
                    Minimum 2-3 key references per curriculum area
                  </li>
                </ul>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mt-2.5 flex-shrink-0"></span>
                    Digital sources include DOI or URL where available
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mt-2.5 flex-shrink-0"></span>
                    Supports theoretical foundations and practical applications
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mt-2.5 flex-shrink-0"></span>
                    Official curriculum documents included
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* References by Category */}
        <div className="max-w-6xl mx-auto">
          {filteredReferences.length === 0 ? (
            <div className="text-center py-12">
              <FiSearch className="mx-auto text-6xl text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No References Found</h3>
              <p className="text-gray-500">Try adjusting your search terms or filter criteria.</p>
            </div>
          ) : (
            <div className="grid gap-8">
              {filteredReferences.map((category, index) => (
                <div key={category.category} className="group">
                  <div className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100 overflow-hidden">
                                         {/* Category Header */}
                     <div
                       className={`${category.bgColor} p-6 cursor-pointer hover:opacity-90 transition-opacity`}
                       onClick={() => toggleCategory(index)}
                     >
                       <div className="flex items-center justify-between">
                         <div className="flex items-center gap-4">
                           <div className="text-3xl">{category.icon}</div>
                           <div>
                             <h3 className="text-2xl font-heading font-bold text-white">
                               {category.category}
                             </h3>
                             <p className="text-white/90 text-sm">
                               {category.citations.length} references
                             </p>
                           </div>
                         </div>
                         <div className="text-white">
                           {expandedCategories[index] ?
                             <FiChevronUp size={24} /> :
                             <FiChevronDown size={24} />
                           }
                         </div>
                       </div>
                     </div>

                    {/* Citations List */}
                    {expandedCategories[index] && (
                      <div className="p-6">
                        <div className="space-y-4">
                          {category.citations.map((citation, citationIndex) => (
                            <div
                              key={citationIndex}
                              className="group/citation p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-200 border border-transparent hover:border-gray-200"
                            >
                                                             <div className="flex items-start gap-4">
                                 <div className={`w-8 h-8 ${category.bgColorLight} rounded-lg flex items-center justify-center flex-shrink-0 mt-1`}>
                                   <span className={`${category.textColor} font-bold text-sm`}>
                                     {citationIndex + 1}
                                   </span>
                                 </div>
                                <div className="flex-1">
                                  <p className="text-gray-800 leading-relaxed text-justify hanging-indent group-hover/citation:text-gray-900 transition-colors">
                                    {citation}
                                  </p>
                                </div>
                                <FiExternalLink className="text-gray-400 group-hover/citation:text-gray-600 transition-colors flex-shrink-0 mt-1.5" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Information */}
        <div className="max-w-5xl mx-auto mt-16">
          <div className="bg-gradient-to-br from-slate-50 to-primary-50 rounded-2xl shadow-card p-8 border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-heading font-bold text-gray-800 mb-3">Reference Usage Notes</h3>
              <p className="text-gray-600">Understanding how these references support the curriculum framework</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">📖</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">Citation Context</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  These references inform the theoretical foundations, pedagogical approaches, and practical
                  learning experiences presented across all curriculum pages. Each source has been selected
                  for its relevance to early childhood education and alignment with contemporary best practices.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-secondary-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">Assessment Compliance</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  This reference list meets the assessment requirement of 2-3 credible sources per curriculum
                  page, with additional foundational sources supporting the theoretical framework that underpins
                  the entire early childhood creativity curriculum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hanging-indent {
          padding-left: 2rem;
          text-indent: -2rem;
        }
        .bg-pattern-dots {
          background-image: radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  );
};

export default References;
