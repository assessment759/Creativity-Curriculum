import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react';
import { FiBookOpen, FiCheckCircle, FiEdit3, FiFileText, FiGrid, FiLayers, FiMonitor, FiMusic, FiPlay, FiSearch, FiSettings, FiUsers } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import CollapsibleTranscript from '../components/CollapsibleTranscript';

const curriculumAreas = [
  { path: '/art', title: 'Art', icon: FiEdit3, color: 'bg-pink-400', description: 'Visual expression, creativity, and fine motor development through drawing, painting, and sculpture.' },
  { path: '/drama-puppetry', title: 'Drama & Puppetry', icon: FiPlay, color: 'bg-violet-400', description: 'Imagination, storytelling, and social communication through role-play and puppet theater.' },
  { path: '/movement-music', title: 'Movement & Music', icon: FiMusic, color: 'bg-cyan-400', description: 'Rhythm, coordination, and sensory development through musical and movement activities.' },
  { path: '/language-literacy', title: 'Language & Literacy', icon: FiBookOpen, color: 'bg-emerald-400', description: 'Communication skills, reading readiness, and vocabulary through stories and writing.' },
  { path: '/science', title: 'Science', icon: FiSearch, color: 'bg-lime-400', description: 'Inquiry, observation, and discovery through hands-on exploration and investigation.' },
  { path: '/engineering', title: 'Engineering', icon: FiSettings, color: 'bg-amber-400', description: 'Problem-solving, design thinking, and building through construction challenges.' },
  { path: '/technologies', title: 'Technologies', icon: FiMonitor, color: 'bg-indigo-400', description: 'Digital literacy, coding basics, and responsible technology use for young learners.' },
  { path: '/mathematics-numeracy', title: 'Mathematics & Numeracy', icon: FiGrid, color: 'bg-rose-400', description: 'Number sense, patterns, and logical thinking through games and manipulatives.' },
  { path: '/humanities-social-sciences', title: 'Humanities & Social Sciences', icon: FiUsers, color: 'bg-purple-400', description: 'Community understanding, culture, and social skills through local exploration.' },
  { path: '/integrated-curriculum', title: 'Integrated Curriculum', icon: FiLayers, color: 'bg-blue-400', description: 'Cross-curricular projects combining multiple learning areas for deeper understanding.' }
];

const Home = () => {
  const heroRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    // Hero animation
    if (heroRef.current) {
      gsap.fromTo(heroRef.current.children,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out", delay: 0.3 }
      );
    }

    // Cards animation
    if (cardsRef.current) {
      gsap.fromTo(cardsRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", delay: 0.6 }
      );
    }
  }, []);

  const transcriptContent = `
    <h4>Early Childhood Creativity Curriculum Framework</h4>
    <p>This website presents a creative, play-based curriculum framework with ten focused pages: Art; Drama & Puppetry; Movement & Music; Language & Literacy; Science; Engineering; Technologies; Mathematics & Numeracy; Humanities & Social Sciences; and Integrated Curriculum. Each page includes three short pedagogical sections — Importance, Theories, and Resources — plus eight practical learning experiences split across the age ranges 0–2, 2–3, 3–5, and 6–8 (two examples per range).</p>

    <h4>Assessment Evidence</h4>
    <p>Videos of two enactments and a 200-word reflective critique complete the assessment evidence. Use the navigation links to open each curriculum page; each page contains a collapsible 500-word transcript and downloadable resources (templates, checklists, parent consent form). The Home page also lists assessment requirements, submission notes, and a quick rubric checklist so markers can verify evidence easily.</p>

    <h4>Site Features</h4>
    <p>Include clear instructions for markers how to access the video links (embedded or URLs) and where to find the References page (APA 7 format). Finally, provide contact/author details, a short accessibility statement (captions for video; alt text for images) and a short navigation guide for reviewers.</p>

    <h4>Educational Foundation</h4>
    <p>Each curriculum area is grounded in evidence-based early childhood education theories including Vygotsky's social constructivism, Piaget's developmental stages, Gardner's multiple intelligences, and contemporary approaches like Reggio Emilia. The learning experiences are designed to support holistic development while fostering creativity, critical thinking, and joyful learning.</p>

    <h4>Age-Appropriate Progression</h4>
    <p>Learning experiences progress developmentally from sensory exploration for infants (0-2 years) through guided discovery for toddlers (2-3 years), structured play for preschoolers (3-5 years), to collaborative projects for early primary students (6-8 years). Each activity includes clear objectives, required materials, and assessment considerations.</p>

    <h4>Accessibility and Inclusion</h4>
    <p>The website features responsive design, GSAP animations for engagement, collapsible transcript sections for easy navigation, video accessibility features, clear navigation structure, and academic citation format. All content follows universal design principles to ensure accessibility for diverse learners and families from various cultural and linguistic backgrounds.</p>
  `;

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-30"></div>
        <div className="container-custom relative z-10" ref={heroRef}>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 text-white">
              Early Childhood Creativity Curriculum
            </h1>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Comprehensive play-based learning framework across 10 curriculum areas
              for children aged 0-8 years
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="#curriculum" className="btn btn-secondary">
                <FiBookOpen />
                Explore Curriculum
              </Link>
              <Link to="#videos" className="btn bg-white/20 hover:bg-white/30 text-white border-white/30">
                <FiPlay />
                View Videos
              </Link>
              <Link to="/references" className="btn bg-white/20 hover:bg-white/30 text-white border-white/30">
                <FiFileText />
                References
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom section-padding">
        {/* Overview Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="card card-hover">
            <h3 className="flex items-center gap-3 text-green-700 mb-4 text-xl font-semibold">
              <FiCheckCircle />
              Assessment Requirements
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3"><FiCheckCircle className="text-green-500" /> 12 comprehensive pages</li>
              <li className="flex items-center gap-3"><FiCheckCircle className="text-green-500" /> 500-word transcripts per page</li>
              <li className="flex items-center gap-3"><FiCheckCircle className="text-green-500" /> Two video enactments (≤5 min each)</li>
              <li className="flex items-center gap-3"><FiCheckCircle className="text-green-500" /> 200-word critical reflection</li>
              <li className="flex items-center gap-3"><FiCheckCircle className="text-green-500" /> APA 7 reference formatting</li>
              <li className="flex items-center gap-3"><FiCheckCircle className="text-green-500" /> Mobile-responsive design</li>
            </ul>
          </div>

          <div className="card card-hover">
            <h3 className="flex items-center gap-3 text-purple-700 mb-4 text-xl font-semibold">
              <FiUsers />
              Site Features
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3"><FiFileText className="text-primary-600" /> Collapsible transcript sections</li>
              <li className="flex items-center gap-3"><FiPlay className="text-primary-600" /> Embedded video enactments</li>
              <li className="flex items-center gap-3"><FiBookOpen className="text-primary-600" /> Downloadable resources</li>
              <li className="flex items-center gap-3"><FiUsers className="text-primary-600" /> Accessibility features</li>
              <li className="flex items-center gap-3"><FiCheckCircle className="text-primary-600" /> Submission checklist</li>
              <li className="flex items-center gap-3"><FiEdit3 className="text-primary-600" /> Interactive navigation</li>
            </ul>
          </div>
        </div>

        {/* Curriculum Areas */}
        <section id="curriculum" className="mb-16">
          <h2 className="text-center text-3xl font-bold text-gray-800 mb-12">
            Curriculum Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" ref={cardsRef}>
            {curriculumAreas.map((area) => (
              <Link
                key={area.path}
                to={area.path}
                className="card card-hover group"
              >
                <div className={`w-12 h-12 ${area.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <area.icon className="text-white text-xl" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {area.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {area.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="age-badge">0-2 years</span>
                  <span className="age-badge">2-3 years</span>
                  <span className="age-badge">3-5 years</span>
                  <span className="age-badge">6-8 years</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Assessment Evidence */}
        <section id="videos" className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 mb-16 border border-gray-200">
          <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">Assessment Evidence & Videos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiPlay className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Video Enactments</h3>
              <p className="text-gray-600">Two recorded enactments (maximum 5 minutes each) demonstrating learning experiences from different age ranges.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiEdit3 className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Critical Reflection</h3>
              <p className="text-gray-600">200-word evidence-based reflection analyzing what went well, areas for improvement, and future modifications.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiFileText className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Academic References</h3>
              <p className="text-gray-600">Comprehensive APA 7 reference list with 2-3 credible sources per curriculum page.</p>
            </div>
          </div>
        </section>

        {/* Collapsible Transcript */}
        <CollapsibleTranscript
          title="Home Page Transcript"
          content={transcriptContent}
          pageTitle="Home"
          wordCount={500}
        />
      </div>
    </div>
  );
};

export default Home;
