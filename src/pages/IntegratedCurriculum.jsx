import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react';
import { FiClock, FiLayers, FiTarget, FiUsers } from 'react-icons/fi';
import CollapsibleTranscript from '../components/CollapsibleTranscript';

const IntegratedCurriculum = () => {
  const headerRef = useRef(null);
  const sectionsRef = useRef(null);
  const experiencesRef = useRef(null);

  useEffect(() => {
    // Animate page elements on mount
    if (headerRef.current) {
      gsap.fromTo(headerRef.current.children,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out", delay: 0.3 }
      );
    }

    if (sectionsRef.current) {
      gsap.fromTo(sectionsRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out", delay: 0.8 }
      );
    }

    if (experiencesRef.current) {
      gsap.fromTo(experiencesRef.current.querySelectorAll('.age-group'),
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.6, stagger: 0.2, ease: "power2.out", delay: 1.2 }
      );
    }
  }, []);

  const learningExperiences = [
    {
      ageGroup: '0-2 years',
      label: 'Infants & Toddlers',
      experiences: [
        {
          title: 'Garden Project',
          description: 'Infants help water plants and notice changes; adults narrate growth and routines, integrating science, care and language.',
          duration: '15-20 min',
          groupSize: 'Individual'
        },
        {
          title: 'Seasonal Sensory Table',
          description: 'Sensory trays change with seasons (leaves, snow, sand) to connect natural phenomena, vocabulary and sensory exploration.',
          duration: '20-25 min',
          groupSize: 'Individual/Pair'
        }
      ]
    },
    {
      ageGroup: '2-3 years',
      label: 'Young Toddlers',
      experiences: [
        {
          title: 'Construction Story Table',
          description: 'Toddlers build structures then tell simple stories about them, blending engineering, art and narrative play.',
          duration: '25-30 min',
          groupSize: 'Small group (3-4)'
        },
        {
          title: 'Weather Journal',
          description: 'Children mark daily weather with icons, developing observation skills and symbol use for science and literacy.',
          duration: '15-20 min',
          groupSize: 'Small group (4-6)'
        }
      ]
    },
    {
      ageGroup: '3-5 years',
      label: 'Preschoolers',
      experiences: [
        {
          title: 'Market Maths Project',
          description: 'Small businesses sell handcrafted goods, applying counting, money concepts and literacy for labels and signs.',
          duration: '45-60 min',
          groupSize: 'Small group (4-6)'
        },
        {
          title: 'Eco-art Inquiry',
          description: 'Children collect natural materials to create artworks, documenting processes and reflecting on environmental concepts.',
          duration: '40-50 min',
          groupSize: 'Small group (4-6)'
        }
      ]
    },
    {
      ageGroup: '6-8 years',
      label: 'Early Primary',
      experiences: [
        {
          title: 'STEM Design Brief',
          description: 'Teams solve a real-world school problem (e.g., waste reduction) using research, prototypes and a presentation integrating writing and data.',
          duration: '120-150 min',
          groupSize: 'Small group (4-6)'
        },
        {
          title: 'Cultural Festival Project',
          description: 'Students research a culture, create performances, food displays and informational posters, combining humanities, art and literacy.',
          duration: '90-120 min',
          groupSize: 'Small group (4-6)'
        }
      ]
    }
  ];

  const transcriptContent = `
    <h4>Integrated Curriculum in Early Childhood Education</h4>
    <p>Integrated curriculum connects disciplines, encouraging children to transfer skills and knowledge across contexts. Projects that combine art, science, literacy and maths promote deeper understanding through sustained inquiry and meaningful purpose. Integration supports holistic development, showing children how ideas interrelate and enabling authentic problem solving. Cross-curricular projects also strengthen collaboration, planning and communication skills, and provide varied entry points for diverse learners to demonstrate competence.</p>

    <h4>Theoretical Foundations</h4>
    <p>Project-based and inquiry approaches support integration: learners pursue questions over time, applying multiple disciplinary lenses. Dewey's experiential learning and Bruner's spiral curriculum argue for revisiting themes at increasing depth. Integrated models emphasise authentic tasks, community relevance and problem solving. Assessment within integrated learning foregrounds process, documentation and reflective conversation, rather than isolated discrete facts.</p>

    <h4>Resources and Digital Technology</h4>
    <p>Flexible learning spaces, project journals, mixed media materials and easy access to outdoor areas support integration. Digital tools for documenting process (photos, audio, video), simple research tools and presentation software enable synthesis and sharing. Community partners and local resources enrich authenticity. Use planning templates that map objectives across domains and include reflection prompts to capture learning trajectories.</p>

    <h4>Developmental Progression</h4>
    <p>Learning experiences progress from basic multi-sensory exploration for infants through simple project connections for toddlers, thematic investigations for preschoolers, to complex cross-curricular projects for early primary students. Each stage builds upon previous integrated experiences while introducing new challenges appropriate to cognitive and collaborative development. Assessment focuses on connections made across domains, collaborative skills, and holistic understanding.</p>

    <h4>Integration Across Curriculum</h4>
    <p>Integrated curriculum naturally weaves together all learning areas, demonstrating authentic connections between disciplines. Projects integrate literacy (research, documentation), mathematics (measurement, data), science (investigation), art (creative expression), and social studies (community connections). This holistic approach reinforces learning while providing meaningful contexts for applying knowledge and skills across multiple domains simultaneously.</p>
  `;

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-400 to-blue-600 text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-30"></div>
        <div className="container-custom relative z-10" ref={headerRef}>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="flex items-center justify-center gap-4 text-5xl font-bold mb-6 text-white">
              <FiLayers size={48} />
              Integrated Curriculum
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Cross-curricular projects combining multiple learning areas for deeper understanding
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom section-padding">
        {/* Three Core Sections */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16" ref={sectionsRef}>
          <div className="card card-hover border-t-4 border-indigo-500">
            <div className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
              ~100 words
            </div>
            <h3 className="text-indigo-700 mb-4 flex items-center gap-2">
              <FiLayers />
              Importance
            </h3>
            <p>
              Integrated curriculum connects disciplines, encouraging children to transfer skills and knowledge across contexts. Projects that combine art, science, literacy and maths promote deeper understanding through sustained inquiry and meaningful purpose. Integration supports holistic development, showing children how ideas interrelate and enabling authentic problem solving. Cross-curricular projects also strengthen collaboration, planning and communication skills, and provide varied entry points for diverse learners to demonstrate competence.
            </p>
          </div>

          <div className="card card-hover border-t-4 border-indigo-500">
            <div className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
              ~100 words
            </div>
            <h3 className="text-indigo-700 mb-4">Theories & Perspectives</h3>
            <p>
              Project-based and inquiry approaches support integration: learners pursue questions over time, applying multiple disciplinary lenses. Dewey's experiential learning and Bruner's spiral curriculum argue for revisiting themes at increasing depth. Integrated models emphasise authentic tasks, community relevance and problem solving. Assessment within integrated learning foregrounds process, documentation and reflective conversation, rather than isolated discrete facts.
            </p>
          </div>

          <div className="card card-hover border-t-4 border-indigo-500">
            <div className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
              ~100 words
            </div>
            <h3 className="text-indigo-700 mb-4">Resources & Digital Tech</h3>
            <p>
              Flexible learning spaces, project journals, mixed media materials and easy access to outdoor areas support integration. Digital tools for documenting process (photos, audio, video), simple research tools and presentation software enable synthesis and sharing. Community partners and local resources enrich authenticity. Use planning templates that map objectives across domains and include reflection prompts to capture learning trajectories.
            </p>
          </div>
        </div>

        {/* Learning Experiences Section */}
        <section className="mb-16" ref={experiencesRef}>
          <h2 className="text-center text-3xl font-bold text-gray-800 mb-12">
            Learning Experiences by Age Group
          </h2>

          <div className="space-y-8">
            {learningExperiences.map((group, index) => (
              <div key={group.ageGroup} className="age-group">
                <div className="bg-gradient-to-r from-indigo-100 to-indigo-200 rounded-t-xl p-6 border-b border-gray-200">
                  <h3 className="text-indigo-800 text-xl font-semibold flex items-center gap-3 mb-2">
                    <FiUsers />
                    {group.label}
                  </h3>
                  <div className="text-indigo-700 text-sm opacity-80">{group.ageGroup}</div>
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
            Video demonstrations of integrated curriculum learning experiences will be embedded here, showcasing developmentally
            appropriate activities across different age groups.
          </p>
          <div className="bg-gray-200 border-2 border-dashed border-gray-400 rounded-xl py-16 text-gray-600 italic">
            Video enactments from the Integrated Curriculum will be embedded here.
            <br />
            <small className="text-gray-500 not-italic">(Videos will be added during the recording phase of the assessment)</small>
          </div>
        </section>

        {/* Collapsible Transcript */}
        <CollapsibleTranscript
          title="Integrated Curriculum Transcript"
          content={transcriptContent}
          pageTitle="Integrated Curriculum"
          wordCount={500}
        />
      </div>
    </div>
  );
};

export default IntegratedCurriculum;
