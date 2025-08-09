import React from 'react';
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2186&q=80')`
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/85 to-primary-600/80"></div>

        {/* Animated Pattern Overlay */}
        <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>

        {/* Floating Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl animate-bounce-slow"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-pink-400/20 rounded-full blur-lg animate-pulse"></div>
          <div className="absolute bottom-32 left-40 w-40 h-40 bg-green-400/20 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-purple-400/20 rounded-full blur-xl animate-bounce-slow"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-8 border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Ages 0-8 Years • Play-Based Learning
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              Early Childhood
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400">
                Creativity Curriculum
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto font-light">
              Comprehensive play-based learning framework across
              <span className="font-semibold text-yellow-300"> 10 curriculum areas </span>
              designed to nurture creativity, critical thinking, and joyful learning
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">10</div>
                <div className="text-white/80 text-sm">Curriculum Areas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400">4</div>
                <div className="text-white/80 text-sm">Age Groups</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">80+</div>
                <div className="text-white/80 text-sm">Learning Activities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">500+</div>
                <div className="text-white/80 text-sm">Words Per Page</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/references"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                <FiFileText className="text-xl" />
                References
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
