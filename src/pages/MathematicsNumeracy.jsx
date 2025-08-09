import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react';
import { FiClock, FiGrid, FiTarget, FiUsers } from 'react-icons/fi';
import CollapsibleTranscript from '../components/CollapsibleTranscript';

const MathematicsNumeracy = () => {
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
          title: 'Finger Counting Songs',
          description: 'Caregivers sing counting songs and model finger play to support one-to-one correspondence and early number rhythm.',
          duration: '10-15 min',
          groupSize: 'Individual'
        },
        {
          title: 'Object Exploration',
          description: 'Infants manipulate nested cups and rings to explore size, fit and simple comparisons with adult narration.',
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
          title: 'Sorting Baskets',
          description: 'Toddlers sort objects by colour, shape or size, developing classification skills and vocabulary for comparison.',
          duration: '20-25 min',
          groupSize: 'Small group (3-4)'
        },
        {
          title: 'Pattern Parade',
          description: 'Children create simple repeating patterns with beads or blocks, describe and extend them, supporting early algebraic thinking.',
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
          title: 'Measurement Walk',
          description: 'Children use non-standard units (footprints, cubes) to measure items and compare lengths, developing measurement concepts.',
          duration: '30-40 min',
          groupSize: 'Small group (4-6)'
        },
        {
          title: 'Problem Cards',
          description: 'Small groups solve open-ended counting or sharing problems using manipulatives and explain reasoning to peers.',
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
          title: 'Fraction Cooking',
          description: 'Students follow recipes halving or doubling ingredients, making fractional relationships concrete through practical tasks.',
          duration: '60-90 min',
          groupSize: 'Small group (3-4)'
        },
        {
          title: 'Data Detectives',
          description: 'Students collect classroom data, create charts and interpret results, reasoning about variability and averages.',
          duration: '45-60 min',
          groupSize: 'Small group (4-6)'
        }
      ]
    }
  ];

  const transcriptContent = `
    <h4>Mathematics & Numeracy in Early Childhood Education</h4>
    <p>Mathematics early experiences build number sense, spatial reasoning, measurement understanding and problem solving. Hands-on play with counting, sorting, patterning and measurement develops conceptual understanding and supports later formal maths. Numeracy is embedded across daily routines (snack time, block play) and through purposeful games that promote estimation, comparison and reasoning. Encouraging mathematical talk and modelling strategies supports flexible thinking and fosters confidence with quantitative concepts.</p>

    <h4>Theoretical Foundations</h4>
    <p>Constructivist approaches (Piaget) show that children build mathematical understanding through interaction with materials and peers. Sociocultural theories emphasise guided participation, language and cultural tools for counting and problem solving. Number sense frameworks prioritise subitising, cardinality and pattern recognition. Problem-solving models encourage heuristic strategies: act, represent, check. Playful, context-rich tasks support transfer to abstract representations and formal notation as children mature.</p>

    <h4>Resources and Digital Technology</h4>
    <p>Counting collections, number lines, base-ten manipulatives, pattern blocks, measuring tools (rulers, scales), and geometric shapes. Games for sorting, matching and estimation. Digital tools: interactive number apps, virtual manipulatives and simple spreadsheet tools for older children. Visual supports and real objects (food, blocks) help concretise abstract concepts. Provide labelled math stations and challenge cards for differentiated practice.</p>

    <h4>Developmental Progression</h4>
    <p>Learning experiences progress from basic sensory exploration of quantity for infants through concrete counting for toddlers, problem-solving with manipulatives for preschoolers, to abstract mathematical thinking for early primary students. Each stage builds upon previous mathematical concepts while introducing new challenges appropriate to cognitive development. Assessment focuses on mathematical reasoning, problem-solving strategies, and conceptual understanding.</p>

    <h4>Integration Across Curriculum</h4>
    <p>Mathematics naturally integrates with science (measurement, data analysis), art (patterns, geometry), literacy (mathematical vocabulary), and daily routines (time, counting). This interdisciplinary approach reinforces mathematical concepts while providing authentic contexts for applying numerical thinking and problem-solving skills across multiple domains.</p>
  `;

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-rose-400 to-rose-600 text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-30"></div>
        <div className="container-custom relative z-10" ref={headerRef}>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="flex items-center justify-center gap-4 text-5xl font-bold mb-6 text-white">
              <FiGrid size={48} />
              Mathematics & Numeracy
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Number sense, patterns, and logical thinking through games and manipulatives
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom section-padding">
        {/* Three Core Sections */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16" ref={sectionsRef}>
          <div className="card card-hover border-t-4 border-red-500">
            <div className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
              ~100 words
            </div>
            <h3 className="text-red-700 mb-4 flex items-center gap-2">
              <FiGrid />
              Importance
            </h3>
            <p>
              Mathematics early experiences build number sense, spatial reasoning, measurement understanding and problem solving. Hands-on play with counting, sorting, patterning and measurement develops conceptual understanding and supports later formal maths. Numeracy is embedded across daily routines (snack time, block play) and through purposeful games that promote estimation, comparison and reasoning. Encouraging mathematical talk and modelling strategies supports flexible thinking and fosters confidence with quantitative concepts.
            </p>
          </div>

          <div className="card card-hover border-t-4 border-red-500">
            <div className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
              ~100 words
            </div>
            <h3 className="text-red-700 mb-4">Theories & Perspectives</h3>
            <p>
              Constructivist approaches (Piaget) show that children build mathematical understanding through interaction with materials and peers. Sociocultural theories emphasise guided participation, language and cultural tools for counting and problem solving. Number sense frameworks prioritise subitising, cardinality and pattern recognition. Problem-solving models encourage heuristic strategies: act, represent, check. Playful, context-rich tasks support transfer to abstract representations and formal notation as children mature.
            </p>
          </div>

          <div className="card card-hover border-t-4 border-red-500">
            <div className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
              ~100 words
            </div>
            <h3 className="text-red-700 mb-4">Resources & Digital Tech</h3>
            <p>
              Counting collections, number lines, base-ten manipulatives, pattern blocks, measuring tools (rulers, scales), and geometric shapes. Games for sorting, matching and estimation. Digital tools: interactive number apps, virtual manipulatives and simple spreadsheet tools for older children. Visual supports and real objects (food, blocks) help concretise abstract concepts. Provide labelled math stations and challenge cards for differentiated practice.
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
                <div className="bg-gradient-to-r from-red-100 to-red-200 rounded-t-xl p-6 border-b border-gray-200">
                  <h3 className="text-red-800 text-xl font-semibold flex items-center gap-3 mb-2">
                    <FiUsers />
                    {group.label}
                  </h3>
                  <div className="text-red-700 text-sm opacity-80">{group.ageGroup}</div>
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
            Video demonstrations of mathematics and numeracy learning experiences will be embedded here, showcasing developmentally
            appropriate activities across different age groups.
          </p>
          <div className="bg-gray-200 border-2 border-dashed border-gray-400 rounded-xl py-16 text-gray-600 italic">
            Video enactments from the Mathematics & Numeracy curriculum will be embedded here.
            <br />
            <small className="text-gray-500 not-italic">(Videos will be added during the recording phase of the assessment)</small>
          </div>
        </section>

        {/* Collapsible Transcript */}
        <CollapsibleTranscript
          title="Mathematics & Numeracy Curriculum Transcript"
          content={transcriptContent}
          pageTitle="Mathematics & Numeracy"
          wordCount={500}
        />
      </div>
    </div>
  );
};

export default MathematicsNumeracy;
