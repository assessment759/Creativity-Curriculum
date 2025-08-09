import React from 'react';
import { FiClock, FiGrid, FiTarget, FiUsers } from 'react-icons/fi';
import CollapsibleTranscript from '../components/CollapsibleTranscript';

const MathematicsNumeracy = () => {
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
    <p>Mathematics education in early childhood builds foundational number sense, spatial reasoning, measurement understanding, and problem-solving skills through hands-on exploration and play. Young children naturally engage with mathematical concepts through counting, sorting, patterning, and measuring activities embedded in daily routines and purposeful play experiences. Mathematical learning supports logical thinking, pattern recognition, and analytical skills that transfer across domains. Early numeracy experiences foster confidence with quantitative concepts and prepare children for formal mathematical instruction.</p>

    <h4>Theoretical Foundations</h4>
    <p>Piaget's constructivist theory demonstrates that children build mathematical understanding through active manipulation of materials and social interaction. Number sense research emphasizes the importance of subitizing, cardinality understanding, and pattern recognition as foundational skills. Sociocultural approaches highlight the role of mathematical language, cultural tools, and guided participation in developing numerical competence. Problem-solving frameworks encourage multiple strategies and representations, supporting flexible mathematical thinking. Play-based approaches connect abstract mathematical concepts to concrete, meaningful experiences.</p>

    <h4>Resources and Digital Technology</h4>
    <p>Essential materials include counting collections, manipulatives (blocks, bears, cubes), number lines, pattern blocks, measuring tools (rulers, scales, timers), and geometric shapes. Games for sorting, matching, and estimation support conceptual development. Digital tools include interactive counting apps, virtual manipulatives, simple graphing tools, and measurement apps for older children. Real-world objects (food items, natural materials) help connect mathematical concepts to everyday experiences. Provide organized math stations with labeled materials and differentiated challenge cards.</p>

    <h4>Developmental Progression</h4>
    <p>Learning experiences progress from basic quantity exploration for infants through concrete counting and sorting for toddlers, pattern recognition and simple problem-solving for preschoolers, to abstract mathematical reasoning and formal operations for early primary students. Each stage builds upon previous mathematical understandings while introducing new challenges appropriate to cognitive development. Assessment focuses on mathematical reasoning processes, problem-solving strategies, and conceptual understanding rather than computational accuracy.</p>

    <h4>Integration Across Curriculum</h4>
    <p>Mathematics naturally integrates with science (measurement, data collection, analysis), art (patterns, symmetry, geometric shapes), literacy (mathematical vocabulary, word problems), and daily routines (time, measurement, counting). This interdisciplinary approach reinforces mathematical concepts while providing authentic, meaningful contexts for applying numerical thinking and problem-solving skills across multiple domains of learning and development.</p>
  `;

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-rose-400 to-rose-600 text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-30"></div>
        <div className="container-custom relative z-10">
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
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="card card-hover border-t-4 border-red-500">
            <div className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
              ~100 words
            </div>
            <h3 className="text-red-700 mb-4 flex items-center gap-2">
              <FiGrid />
              Importance
            </h3>
            <p>
              Mathematics education in early childhood builds foundational number sense, spatial reasoning, measurement understanding, and problem-solving skills through hands-on exploration and play. Young children naturally engage with mathematical concepts through counting, sorting, patterning, and measuring activities embedded in daily routines and purposeful play experiences. Mathematical learning supports logical thinking, pattern recognition, and analytical skills that transfer across domains. Early numeracy experiences foster confidence with quantitative concepts and prepare children for formal mathematical instruction.
            </p>
          </div>

          <div className="card card-hover border-t-4 border-red-500">
            <div className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
              ~100 words
            </div>
            <h3 className="text-red-700 mb-4">Theories & Perspectives</h3>
            <p>
              Piaget's constructivist theory demonstrates that children build mathematical understanding through active manipulation of materials and social interaction. Number sense research emphasizes the importance of subitizing, cardinality understanding, and pattern recognition as foundational skills. Sociocultural approaches highlight the role of mathematical language, cultural tools, and guided participation in developing numerical competence. Problem-solving frameworks encourage multiple strategies and representations, supporting flexible mathematical thinking. Play-based approaches connect abstract mathematical concepts to concrete, meaningful experiences.
            </p>
          </div>

          <div className="card card-hover border-t-4 border-red-500">
            <div className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
              ~100 words
            </div>
            <h3 className="text-red-700 mb-4">Resources & Digital Tech</h3>
            <p>
              Essential materials include counting collections, manipulatives (blocks, bears, cubes), number lines, pattern blocks, measuring tools (rulers, scales, timers), and geometric shapes. Games for sorting, matching, and estimation support conceptual development. Digital tools include interactive counting apps, virtual manipulatives, simple graphing tools, and measurement apps for older children. Real-world objects (food items, natural materials) help connect mathematical concepts to everyday experiences. Provide organized math stations with labeled materials and differentiated challenge cards.
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
            Educational videos demonstrating mathematics and numeracy activities for early childhood development.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-4 shadow-sm border">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Building Mathematical Competencies</h3>
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/BMoF-hiH3J8"
                  title="Building Mathematical Competencies in Early Childhood"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Numbers and Shapes for Children</h3>
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/F0WCdHFAuvg"
                  title="Learn Numbers with Color Balls - Numbers & Shapes Collection for Children"
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
