import React from 'react';
import { FiClock, FiSearch, FiTarget, FiUsers } from 'react-icons/fi';
import CollapsibleTranscript from '../components/CollapsibleTranscript';

const Science = () => {
  const learningExperiences = [
    {
      ageGroup: '0-2 years',
      label: 'Infants & Toddlers',
      experiences: [
        {
          title: 'Sink/Float Play',
          description: 'Infants explore objects in water tubs, guided by adults who name properties and model actions, promoting sensory and causal awareness.',
          duration: '10-15 min',
          groupSize: 'Individual'
        },
        {
          title: 'Texture Exploration',
          description: 'Tactile trays and safe objects let infants explore textures; adults describe sensations and support vocabulary for observation.',
          duration: '15-20 min',
          groupSize: 'Individual/Pair'
        }
      ]
    },
    {
      ageGroup: '2-3 years',
      label: 'Young Toddlers',
      experiences: [
        {
          title: 'Light & Shadow',
          description: 'Toddlers use torches and objects to explore light and shadows on walls, developing cause-effect understanding and observation skills.',
          duration: '20-25 min',
          groupSize: 'Small group (3-4)'
        },
        {
          title: 'Magnet Discovery',
          description: 'Simple magnet play with metal and non-metal objects builds categorisation skills and understanding of invisible forces.',
          duration: '15-20 min',
          groupSize: 'Pairs'
        }
      ]
    },
    {
      ageGroup: '3-5 years',
      label: 'Preschoolers',
      experiences: [
        {
          title: 'Growing Seeds',
          description: 'Children plant seeds, predict outcomes and observe growth, documenting changes to build scientific observation and prediction skills.',
          duration: '30-40 min',
          groupSize: 'Small group (4-6)'
        },
        {
          title: 'Weather Station',
          description: 'Children create simple weather tracking tools and record daily observations, learning about measurement and patterns.',
          duration: '25-35 min',
          groupSize: 'Small group (4-6)'
        }
      ]
    },
    {
      ageGroup: '6-8 years',
      label: 'Early Primary',
      experiences: [
        {
          title: 'Simple Experiments',
          description: 'Students design and conduct simple tests with variables and controls, learning scientific method and documentation.',
          duration: '60-90 min',
          groupSize: 'Small group (3-4)'
        },
        {
          title: 'Nature Journal',
          description: 'Students observe and document local wildlife and plants over time, developing systematic observation and recording skills.',
          duration: '45-60 min',
          groupSize: 'Individual/Pairs'
        }
      ]
    }
  ];

  const transcriptContent = `
    <h4>Science in Early Childhood Education</h4>
    <p>Science education in early years builds curiosity, observation and reasoning skills through hands-on exploration of natural phenomena. Young children are natural scientists — questioning, testing and discovering. Science experiences support cognitive development by encouraging prediction, hypothesis formation and systematic observation. Inquiry-based learning develops critical thinking, problem-solving and communication skills. Science experiences also support mathematical concepts (measurement, counting, patterns) and literacy (vocabulary, documentation, discussion). Early science fosters a lifelong love of learning and provides foundational concepts for later formal science education.</p>

    <h4>Theoretical Foundations</h4>
    <p>Piaget's constructivist theory supports hands-on exploration and discovery learning in science. Vygotsky's zone of proximal development guides scaffolded investigations and collaborative inquiry. Inquiry-based learning theory emphasises questioning, testing and reflection over memorisation. Constructivist science pedagogy encourages children to build understanding through direct experience and discussion. Place-based education connects scientific learning to local environments and community resources. The 5E instructional model (Engage, Explore, Explain, Elaborate, Evaluate) provides structure for developmentally appropriate science experiences.</p>

    <h4>Resources and Digital Technology</h4>
    <p>Natural materials (rocks, shells, plants), simple tools (magnifying glasses, measuring tools, balance scales), water and sand tables for experimentation. Safety equipment (goggles, aprons) and documentation tools (cameras, clipboards, journals). Digital tools include simple data collection apps, digital microscopes for older children, and weather tracking tools. Nature guides, science picture books and exploration kits extend learning. Ensure safe experimentation areas, accessible storage for materials and outdoor learning spaces for authentic scientific investigation.</p>

    <h4>Developmental Progression</h4>
    <p>Learning experiences progress from basic sensory exploration for infants through simple investigations for toddlers, structured observations for preschoolers, to systematic experiments for early primary students. Each stage builds upon previous scientific thinking skills while introducing new challenges appropriate to cognitive development. Assessment focuses on inquiry skills, scientific reasoning, and individual growth in observation and communication abilities.</p>

    <h4>Integration Across Curriculum</h4>
    <p>Science naturally integrates with mathematics (measurement, data collection), literacy (vocabulary, documentation), art (scientific drawing), and social studies (environmental awareness). This interdisciplinary approach reinforces scientific concepts while providing authentic contexts for applying knowledge and skills across multiple domains through hands-on investigation and discovery.</p>
  `;

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-lime-400 to-lime-600 text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-30"></div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="flex items-center justify-center gap-4 text-5xl font-bold mb-6 text-white">
              <FiSearch size={48} />
              Science
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Inquiry, observation, and discovery through hands-on exploration and investigation
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom section-padding">
        {/* Three Core Sections */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="card card-hover border-t-4 border-green-500">
            <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
              ~100 words
            </div>
            <h3 className="text-green-700 mb-4 flex items-center gap-2">
              <FiSearch />
              Importance
            </h3>
            <p>
              Science education in early years builds curiosity, observation and reasoning skills through hands-on exploration of natural phenomena. Young children are natural scientists — questioning, testing and discovering. Science experiences support cognitive development by encouraging prediction, hypothesis formation and systematic observation. Inquiry-based learning develops critical thinking, problem-solving and communication skills. Science experiences also support mathematical concepts (measurement, counting, patterns) and literacy (vocabulary, documentation, discussion).
            </p>
          </div>

          <div className="card card-hover border-t-4 border-green-500">
            <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
              ~100 words
            </div>
            <h3 className="text-green-700 mb-4">Theories & Perspectives</h3>
            <p>
              Piaget's constructivist theory supports hands-on exploration and discovery learning in science. Vygotsky's zone of proximal development guides scaffolded investigations and collaborative inquiry. Inquiry-based learning theory emphasises questioning, testing and reflection over memorisation. Constructivist science pedagogy encourages children to build understanding through direct experience and discussion. Place-based education connects scientific learning to local environments and community resources. The 5E instructional model (Engage, Explore, Explain, Elaborate, Evaluate) provides structure for developmentally appropriate science experiences.
            </p>
          </div>

          <div className="card card-hover border-t-4 border-green-500">
            <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
              ~100 words
            </div>
            <h3 className="text-green-700 mb-4">Resources & Digital Tech</h3>
            <p>
              Natural materials (rocks, shells, plants), simple tools (magnifying glasses, measuring tools, balance scales), water and sand tables for experimentation. Safety equipment (goggles, aprons) and documentation tools (cameras, clipboards, journals). Digital tools include simple data collection apps, digital microscopes for older children, and weather tracking tools. Nature guides, science picture books and exploration kits extend learning. Ensure safe experimentation areas, accessible storage for materials and outdoor learning spaces.
            </p>
          </div>
        </div>

        {/* Learning Experiences Section */}
        <section className="mb-16">
          <h2 className="text-center text-3xl font-bold text-gray-800 mb-12">
            Learning Experiences by Age Group
          </h2>

          <div className="space-y-8">
            {learningExperiences.map((group, index) => (
              <div key={group.ageGroup} className="age-group">
                <div className="bg-gradient-to-r from-lime-100 to-lime-200 rounded-t-xl p-6 border-b border-gray-200">
                  <h3 className="text-lime-800 text-xl font-semibold flex items-center gap-3 mb-2">
                    <FiUsers />
                    {group.label}
                  </h3>
                  <div className="text-lime-700 text-sm opacity-80">{group.ageGroup}</div>
                </div>

                <div className="grid md:grid-cols-2 bg-white rounded-b-xl shadow-card">
                  {group.experiences.map((experience, expIndex) => (
                    <div
                      key={expIndex}
                      className={`p-8 ${expIndex === 0 ? 'md:border-r border-gray-200' : ''} ${expIndex === 0 && group.experiences.length === 2 ? 'md:border-b-0 border-b border-gray-200 md:border-b-0' : ''}`}
                    >
                      <h4 className="text-gray-800 text-lg font-medium mb-4 flex items-center gap-2">
                        <FiTarget />
                        {experience.title}
                      </h4>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {experience.description}
                      </p>
                      <div className="flex gap-4 text-sm text-gray-600 pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-1">
                          <FiClock />
                          {experience.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <FiUsers />
                          {experience.groupSize}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Video Section */}
        <section className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 mb-16 border border-gray-200 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Video Enactments</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Educational videos demonstrating science exploration and discovery activities for early childhood development.
          </p>
                              <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-4 shadow-sm border">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Toddler Science Experiments</h3>
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/GdqVONna-Co"
                  title="TODDLER SCIENCE EXPERIMENTS | STEM Activities to Try With Your Toddler"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Sink or Float Experiment for Kids</h3>
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/3Cif-tnRxjg"
                  title="Sink or Float for Kids and More Preschool Songs, Learning and Movement - Science Experiment for Kids"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Collapsible Transcript */}
        <CollapsibleTranscript
          title="Science Curriculum Transcript"
          content={transcriptContent}
          pageTitle="Science"
          wordCount={500}
        />
      </div>
    </div>
  );
};

export default Science;
