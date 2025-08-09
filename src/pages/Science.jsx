import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react';
import { FiClock, FiSearch, FiTarget, FiUsers } from 'react-icons/fi';
import CollapsibleTranscript from '../components/CollapsibleTranscript';

const Science = () => {
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
          title: 'Planting Cups',
          description: 'Toddlers plant seeds in cups, water them and observe growth, practising routines and noticing change over time.',
          duration: '20-25 min',
          groupSize: 'Small group (3-4)'
        },
        {
          title: 'Shadow Play',
          description: 'Children use flashlights to create and move shadows, learning about light and cause-effect through playful experimentation.',
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
          title: 'Simple Circuits',
          description: 'Groups use snap-together circuits to light bulbs and learn basic electricity concepts via guided discovery.',
          duration: '30-40 min',
          groupSize: 'Small group (4-6)'
        },
        {
          title: 'Life-cycle Study',
          description: 'Children observe insect or plant life cycles, document progression and create visual timelines to explain change.',
          duration: '45-60 min',
          groupSize: 'Small group (4-6)'
        }
      ]
    },
    {
      ageGroup: '6-8 years',
      label: 'Early Primary',
      experiences: [
        {
          title: 'Environmental Investigation',
          description: 'Students collect data on local ecosystems (e.g., biodiversity counts), analyse findings and propose conservation actions.',
          duration: '90-120 min',
          groupSize: 'Small group (4-6)'
        },
        {
          title: 'Engineering Challenge',
          description: 'Teams design and test bridges or shelters using given materials, iterating on design and explaining results with evidence.',
          duration: '60-90 min',
          groupSize: 'Small group (3-4)'
        }
      ]
    }
  ];

  const transcriptContent = `
    <h4>Science in Early Childhood Education</h4>
    <p>Science provokes wonder, inquiry and evidence-based reasoning. Early science experiences foster observation, prediction, testing and reflection — foundational scientific skills that transfer across domains. Hands-on investigations build curiosity, vocabulary for describing phenomena, and understanding of cause and effect. Science activities also support numeracy (measuring, comparing), language (explanations) and social skills (collaborative investigations). Offering age-appropriate materials and predictable investigative routines helps children develop hypotheses, systematically test ideas and communicate findings.</p>

    <h4>Theoretical Foundations</h4>
    <p>Inquiry-based learning (Kuhlthau, Bruner) emphasises active exploration and scaffolding. Constructivist approaches (Piaget) indicate children construct knowledge from active engagement; sociocultural frameworks stress guided participation and shared problem solving. Phenomenon-based learning connects science to real world contexts. Children's science benefits from iterative cycles of question → investigate → reflect, and from teacher use of open questions and prompting to extend thinking. Conceptual change research supports targeted misconceptions remediation through hands-on evidence.</p>

    <h4>Resources and Digital Technology</h4>
    <p>Simple materials: magnifiers, measuring tools, scales, water trays, funnels, magnets and natural collections (leaves, stones). Investigation kits for buoyancy, plant growth, and simple circuits with safe batteries. Recording tools: science journals, cameras, stopwatches and measuring tapes. Digital tools: video microscopes, data logging apps and simulation tools for older children. Safety equipment, labeled storage and clear investigation areas are essential. Use everyday materials for low-cost experiments and encourage outdoor exploration for ecological learning.</p>

    <h4>Developmental Progression</h4>
    <p>Learning experiences progress from basic sensory exploration for infants through guided investigation for toddlers, hypothesis testing for preschoolers, to formal scientific inquiry for early primary students. Each stage builds upon previous observational skills while introducing new challenges appropriate to cognitive and scientific development. Assessment focuses on inquiry skills, scientific thinking, and collaborative investigation abilities.</p>

    <h4>Integration Across Curriculum</h4>
    <p>Science naturally integrates with mathematics (measurement, data analysis), literacy (recording observations, explanations), art (scientific drawing), and social studies (environmental awareness). This interdisciplinary approach reinforces scientific concepts while providing multiple pathways for understanding and expressing scientific thinking through authentic inquiry experiences.</p>
  `;

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-lime-400 to-lime-600 text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-30"></div>
        <div className="container-custom relative z-10" ref={headerRef}>
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
        <div className="grid lg:grid-cols-3 gap-8 mb-16" ref={sectionsRef}>
          <div className="card card-hover border-t-4 border-lime-500">
            <div className="inline-block bg-lime-100 text-lime-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
              ~100 words
            </div>
            <h3 className="text-lime-700 mb-4 flex items-center gap-2">
              <FiSearch />
              Importance
            </h3>
            <p>
              Science provokes wonder, inquiry and evidence-based reasoning. Early science experiences foster observation, prediction, testing and reflection — foundational scientific skills that transfer across domains. Hands-on investigations build curiosity, vocabulary for describing phenomena, and understanding of cause and effect. Science activities also support numeracy (measuring, comparing), language (explanations) and social skills (collaborative investigations). Offering age-appropriate materials and predictable investigative routines helps children develop hypotheses, systematically test ideas and communicate findings.
            </p>
          </div>

          <div className="card card-hover border-t-4 border-lime-500">
            <div className="inline-block bg-lime-100 text-lime-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
              ~100 words
            </div>
            <h3 className="text-lime-700 mb-4">Theories & Perspectives</h3>
            <p>
              Inquiry-based learning (Kuhlthau, Bruner) emphasises active exploration and scaffolding. Constructivist approaches (Piaget) indicate children construct knowledge from active engagement; sociocultural frameworks stress guided participation and shared problem solving. Phenomenon-based learning connects science to real world contexts. Children's science benefits from iterative cycles of question → investigate → reflect, and from teacher use of open questions and prompting to extend thinking. Conceptual change research supports targeted misconceptions remediation through hands-on evidence.
            </p>
          </div>

          <div className="card card-hover border-t-4 border-lime-500">
            <div className="inline-block bg-lime-100 text-lime-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
              ~100 words
            </div>
            <h3 className="text-lime-700 mb-4">Resources & Digital Tech</h3>
            <p>
              Simple materials: magnifiers, measuring tools, scales, water trays, funnels, magnets and natural collections (leaves, stones). Investigation kits for buoyancy, plant growth, and simple circuits with safe batteries. Recording tools: science journals, cameras, stopwatches and measuring tapes. Digital tools: video microscopes, data logging apps and simulation tools for older children. Safety equipment, labeled storage and clear investigation areas are essential. Use everyday materials for low-cost experiments and encourage outdoor exploration for ecological learning.
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
            Video demonstrations of science learning experiences will be embedded here, showcasing developmentally
            appropriate activities across different age groups.
          </p>
          <div className="bg-gray-200 border-2 border-dashed border-gray-400 rounded-xl py-16 text-gray-600 italic">
            Video enactments from the Science curriculum will be embedded here.
            <br />
            <small className="text-gray-500 not-italic">(Videos will be added during the recording phase of the assessment)</small>
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
