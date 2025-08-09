import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react';
import { FiClock, FiMusic, FiTarget, FiUsers } from 'react-icons/fi';
import CollapsibleTranscript from '../components/CollapsibleTranscript';

const MovementMusic = () => {
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
          title: 'Infant Pulse Play',
          description: 'Caregiver taps soft drum to a slow pulse, imitates infant vocalisations and waits for turn-taking, supporting bonding, timing and early rhythmic sensitivity.',
          duration: '10-15 min',
          groupSize: 'Individual'
        },
        {
          title: 'Scarves & Reach',
          description: 'Infants explore scarves moving to music, developing grasp, eye tracking, vestibular awareness while adults narrate and model gentle movement.',
          duration: '10-15 min',
          groupSize: 'Individual/Pair'
        }
      ]
    },
    {
      ageGroup: '2-3 years',
      label: 'Young Toddlers',
      experiences: [
        {
          title: 'Rhythm Walk',
          description: 'Children march to changing tempos, practise stop-and-go cues and respond to musical signals to build self-regulation and gross motor timing.',
          duration: '15-20 min',
          groupSize: 'Small group (4-6)'
        },
        {
          title: 'Sound Scavenger Hunt',
          description: 'Small groups locate environmental sounds, replicate them with found objects and create short rhythmic patterns, fostering listening and categorisation.',
          duration: '20-25 min',
          groupSize: 'Small group (3-4)'
        }
      ]
    },
    {
      ageGroup: '3-5 years',
      label: 'Preschoolers',
      experiences: [
        {
          title: 'Story-Music Improvisation',
          description: 'Children use instruments to represent characters and scenes, experimenting with dynamics, tempo and expressive choices linked to narrative events.',
          duration: '25-30 min',
          groupSize: 'Small group (4-6)'
        },
        {
          title: 'Movement Motif Composition',
          description: 'Groups invent short movement motifs, link them into a sequence and perform, strengthening memory, sequencing and shared creativity.',
          duration: '30-40 min',
          groupSize: 'Small group (4-6)'
        }
      ]
    },
    {
      ageGroup: '6-8 years',
      label: 'Early Primary',
      experiences: [
        {
          title: 'Percussion Ensemble',
          description: 'Students create layered rhythmic patterns with body percussion and instruments, practice simple notation and reflect on texture and form.',
          duration: '45-60 min',
          groupSize: 'Whole class'
        },
        {
          title: 'Cross-curricular Music Project',
          description: 'Teams compose a short song to explain a science concept (e.g., water cycle), combining content learning with melody and rhythm.',
          duration: '60-90 min',
          groupSize: 'Small group (4-6)'
        }
      ]
    }
  ];

  const transcriptContent = `
    <h4>Movement & Music in Early Childhood Education</h4>
    <p>Music and movement are foundational for young children, supporting sensorimotor development, language acquisition, social skills, and emotional regulation through playful interactions and guided experiences. Rhythmic activities stimulate neural circuits involved in timing, attention, memory, and pattern recognition, offering a scaffold for cognitive growth. Movement increases body awareness, coordination, and vestibular processing, while musical play promotes vocal experimentation and listening skills. Regular playful sessions provide opportunities for turn-taking, imitation and expressive choice, strengthening peer interaction and confidence. These activities are low-cost, culturally adaptable, inclusive and excellent for cross-curricular integration and assessment.</p>

    <h4>Theoretical Foundations</h4>
    <p>Vygotsky's social constructivism emphasises social interaction and scaffolded learning; music and movement create contexts for co-regulation, symbolic meaning and peer-supported development. Piaget's sensorimotor and early symbolic stages show how rhythmic and movement play foster exploration and representational thought. Gardner's multiple intelligences highlights musical and bodily-kinesthetic competencies as legitimate pathways for learning and expression. Csikszentmihalyi's notion of flow helps explain deep sustained engagement during immersive musical or movement tasks. Laban movement analysis and Dalcroze/Eurhythmics provide practical frameworks for observing movement quality and designing progressive, scaffolded experiences.</p>

    <h4>Resources and Digital Technology</h4>
    <p>Core resources: simple percussion (shakers, small drums), rhythm sticks, scarves, balls and open-ended props that invite movement improvisation. Low-cost recycled materials expand creative possibilities. Provide a safe, clear floor area and a portable speaker or playback device for songs and recorded prompts. Digital tools such as Chrome Music Lab, simple sequencing apps, voice recorders and basic notation apps can extend composition, documentation and reflection. Teacher facilitation and documentation tools (photo, audio, notes) are essential for scaffolding and assessment. Prioritise accessibility, variety of tempos, dynamic levels and culturally relevant music selections.</p>

    <h4>Developmental Progression</h4>
    <p>Learning experiences progress from basic rhythmic awareness for infants through guided movement activities for toddlers, creative expression for preschoolers, to complex musical compositions for early primary students. Each stage builds upon previous skills while introducing new challenges appropriate to cognitive and physical development. Assessment focuses on creative expression, rhythmic awareness, and collaborative participation.</p>

    <h4>Integration Across Curriculum</h4>
    <p>Movement and music naturally integrate with language (vocabulary, phonological awareness), mathematics (counting, patterns), science (sound waves, vibration), and social studies (cultural music traditions). This interdisciplinary approach reinforces learning while providing multiple pathways for expression and understanding through embodied experiences.</p>
  `;

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-cyan-400 to-cyan-600 text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-30"></div>
        <div className="container-custom relative z-10" ref={headerRef}>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="flex items-center justify-center gap-4 text-5xl font-bold mb-6 text-white">
              <FiMusic size={48} />
              Movement & Music
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Rhythm, coordination, and sensory development through musical and movement activities
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom section-padding">
        {/* Three Core Sections */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16" ref={sectionsRef}>
          <div className="card card-hover border-t-4 border-cyan-500">
            <div className="inline-block bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
              ~100 words
            </div>
            <h3 className="text-cyan-700 mb-4 flex items-center gap-2">
              <FiMusic />
              Importance
            </h3>
            <p>
              Music and movement are foundational for young children, supporting sensorimotor development, language acquisition, social skills, and emotional regulation through playful interactions and guided experiences. Rhythmic activities stimulate neural circuits involved in timing, attention, memory, and pattern recognition, offering a scaffold for cognitive growth. Movement increases body awareness, coordination, and vestibular processing, while musical play promotes vocal experimentation and listening skills. Regular playful sessions provide opportunities for turn-taking, imitation and expressive choice, strengthening peer interaction and confidence.
            </p>
          </div>

          <div className="card card-hover border-t-4 border-cyan-500">
            <div className="inline-block bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
              ~100 words
            </div>
            <h3 className="text-cyan-700 mb-4">Theories & Perspectives</h3>
            <p>
              Vygotsky's social constructivism emphasises social interaction and scaffolded learning; music and movement create contexts for co-regulation, symbolic meaning and peer-supported development. Piaget's sensorimotor and early symbolic stages show how rhythmic and movement play foster exploration and representational thought. Gardner's multiple intelligences highlights musical and bodily-kinesthetic competencies as legitimate pathways for learning and expression. Csikszentmihalyi's notion of flow helps explain deep sustained engagement during immersive musical or movement tasks.
            </p>
          </div>

          <div className="card card-hover border-t-4 border-cyan-500">
            <div className="inline-block bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
              ~100 words
            </div>
            <h3 className="text-cyan-700 mb-4">Resources & Digital Tech</h3>
            <p>
              Core resources: simple percussion (shakers, small drums), rhythm sticks, scarves, balls and open-ended props that invite movement improvisation. Low-cost recycled materials expand creative possibilities. Provide a safe, clear floor area and a portable speaker or playback device for songs and recorded prompts. Digital tools such as Chrome Music Lab, simple sequencing apps, voice recorders and basic notation apps can extend composition, documentation and reflection. Teacher facilitation and documentation tools are essential for scaffolding and assessment.
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
                <div className="bg-gradient-to-r from-cyan-100 to-cyan-200 rounded-t-xl p-6 border-b border-gray-200">
                  <h3 className="text-cyan-800 text-xl font-semibold flex items-center gap-3 mb-2">
                    <FiUsers />
                    {group.label}
                  </h3>
                  <div className="text-cyan-700 text-sm opacity-80">{group.ageGroup}</div>
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
            Educational videos demonstrating movement and music activities for early childhood development.
          </p>
                                        <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-4 shadow-sm border">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Creative Movement in Early Childhood</h3>
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/OQKEWtTBJbI"
                  title="Creative Movement in Early Childhood Settings"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Dance and Stop - Music Freeze Game</h3>
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/Hi63z3wn9n8"
                  title="Can You Dance And Stop? | Songs from Caitie's Classroom | Music Freeze Game!"
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
          title="Movement & Music Curriculum Transcript"
          content={transcriptContent}
          pageTitle="Movement & Music"
          wordCount={500}
        />
      </div>
    </div>
  );
};

export default MovementMusic;
