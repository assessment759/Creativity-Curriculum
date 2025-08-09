import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react';
import { FiClock, FiSettings, FiTarget, FiUsers } from 'react-icons/fi';
import CollapsibleTranscript from '../components/CollapsibleTranscript';

const Engineering = () => {
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
          title: 'Stack & Balance',
          description: 'Babies explore stacking soft blocks; caregivers scaffold by naming shapes and modelling safe stacking and knocking down to study balance.',
          duration: '10-15 min',
          groupSize: 'Individual'
        },
        {
          title: 'Tube Play',
          description: 'Infants roll balls through tubes and watch outcomes to build cause-effect and hand-eye coordination.',
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
          title: 'Join & Build',
          description: 'Toddlers use larger connectors to join parts and create simple structures, exploring fit, force and cooperation.',
          duration: '20-25 min',
          groupSize: 'Small group (3-4)'
        },
        {
          title: 'Obstacle Course Design',
          description: 'Children rearrange mats and boxes to design a path, testing ideas and negotiating turns with peers.',
          duration: '25-30 min',
          groupSize: 'Small group (4-6)'
        }
      ]
    },
    {
      ageGroup: '3-5 years',
      label: 'Preschoolers',
      experiences: [
        {
          title: 'Bridge Building',
          description: 'Small groups plan and construct simple bridges from craft materials, testing weight and iterating designs.',
          duration: '30-40 min',
          groupSize: 'Small group (4-6)'
        },
        {
          title: 'Pulley Demonstration',
          description: 'Children experiment with simple pulleys to lift objects, learning mechanical advantage through guided play.',
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
          title: 'Rube Goldberg Challenge',
          description: 'Teams design multi-step machines that perform a task, practicing complex sequencing and collaborative problem solving.',
          duration: '90-120 min',
          groupSize: 'Small group (3-4)'
        },
        {
          title: 'Programmable Robot Task',
          description: 'Students program a robot to navigate obstacles, linking planning, measurement and debugging.',
          duration: '60-90 min',
          groupSize: 'Pairs'
        }
      ]
    }
  ];

  const transcriptContent = `
    <h4>Engineering in Early Childhood Education</h4>
    <p>Engineering in early years frames purposeful problem solving: designing, building, testing and improving artefacts that meet goals. It cultivates creativity, spatial reasoning, planning and collaboration. Engineering tasks help children transfer mathematical and scientific concepts into practical solutions and develop persistence through iterative testing. By placing constraints and goals, teachers encourage divergent thinking, trade-offs and real-world reasoning. Early engineering nurtures a maker mindset where failure is framed as information and iteration is celebrated.</p>

    <h4>Theoretical Foundations</h4>
    <p>Design-based learning and maker pedagogy emphasise iterative cycles of plan → build → test → redesign. Constructionism (Papert) argues that learning occurs through making shareable artefacts. Cognitive apprenticeship models recommend modelling skills, coached practice and fading assistance. Sociocultural theories highlight the importance of collaborative design talk and distributed cognition using tools and peers. Providing structured challenges with open outcomes fosters both guided and exploratory problem solving.</p>

    <h4>Resources and Digital Technology</h4>
    <p>Loose parts (blocks, connectors, cardboard), simple tools (safe scissors, tape, string), recycled materials and kits (K'NEX, LEGO) support building. Measuring tools, ramps and weights enable testing and iteration. Digital complements include coding blocks for programmable kits, design apps and simple CAD tools for older children. Storage for prototypes, a maker corner and documentation tools (cameras, reflection journals) are essential to capture iterative design thinking and explain choices.</p>

    <h4>Developmental Progression</h4>
    <p>Learning experiences progress from basic cause-effect exploration for infants through simple construction for toddlers, guided design challenges for preschoolers, to complex engineering projects for early primary students. Each stage builds upon previous problem-solving skills while introducing new challenges appropriate to cognitive and motor development. Assessment focuses on design thinking, collaboration, and persistence through iteration.</p>

    <h4>Integration Across Curriculum</h4>
    <p>Engineering naturally integrates with mathematics (measurement, geometry), science (testing hypotheses), art (design aesthetics), and literacy (documenting processes). This interdisciplinary approach reinforces engineering concepts while providing authentic contexts for applying knowledge across multiple domains through hands-on design challenges.</p>
  `;

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-amber-400 to-amber-600 text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-30"></div>
        <div className="container-custom relative z-10" ref={headerRef}>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="flex items-center justify-center gap-4 text-5xl font-bold mb-6 text-white">
              <FiSettings size={48} />
              Engineering
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Problem-solving, design thinking, and building through construction challenges
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom section-padding">
        {/* Three Core Sections */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16" ref={sectionsRef}>
          <div className="card card-hover border-t-4 border-amber-500">
            <div className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
              ~100 words
            </div>
            <h3 className="text-amber-700 mb-4 flex items-center gap-2">
              <FiSettings />
              Importance
            </h3>
            <p>
              Engineering in early years frames purposeful problem solving: designing, building, testing and improving artefacts that meet goals. It cultivates creativity, spatial reasoning, planning and collaboration. Engineering tasks help children transfer mathematical and scientific concepts into practical solutions and develop persistence through iterative testing. By placing constraints and goals, teachers encourage divergent thinking, trade-offs and real-world reasoning. Early engineering nurtures a maker mindset where failure is framed as information and iteration is celebrated.
            </p>
          </div>

          <div className="card card-hover border-t-4 border-amber-500">
            <div className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
              ~100 words
            </div>
            <h3 className="text-amber-700 mb-4">Theories & Perspectives</h3>
            <p>
              Design-based learning and maker pedagogy emphasise iterative cycles of plan → build → test → redesign. Constructionism (Papert) argues that learning occurs through making shareable artefacts. Cognitive apprenticeship models recommend modelling skills, coached practice and fading assistance. Sociocultural theories highlight the importance of collaborative design talk and distributed cognition using tools and peers. Providing structured challenges with open outcomes fosters both guided and exploratory problem solving.
            </p>
          </div>

          <div className="card card-hover border-t-4 border-amber-500">
            <div className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
              ~100 words
            </div>
            <h3 className="text-amber-700 mb-4">Resources & Digital Tech</h3>
            <p>
              Loose parts (blocks, connectors, cardboard), simple tools (safe scissors, tape, string), recycled materials and kits (K'NEX, LEGO) support building. Measuring tools, ramps and weights enable testing and iteration. Digital complements include coding blocks for programmable kits, design apps and simple CAD tools for older children. Storage for prototypes, a maker corner and documentation tools (cameras, reflection journals) are essential to capture iterative design thinking and explain choices.
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
                <div className="bg-gradient-to-r from-amber-100 to-amber-200 rounded-t-xl p-6 border-b border-gray-200">
                  <h3 className="text-amber-800 text-xl font-semibold flex items-center gap-3 mb-2">
                    <FiUsers />
                    {group.label}
                  </h3>
                  <div className="text-amber-700 text-sm opacity-80">{group.ageGroup}</div>
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
            Educational videos demonstrating engineering and building activities for early childhood development.
          </p>
                                        <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-4 shadow-sm border">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Fun STEM Engineering Projects for Kids</h3>
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/qECPIVNn0jw"
                  title="What is STEM? Fun STEM Engineering Projects for Kids"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Thinking Like an Engineer</h3>
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/AhXW7qwf6Gw"
                  title="Thinking Like an Engineer | Sid the Science Kid"
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
          title="Engineering Curriculum Transcript"
          content={transcriptContent}
          pageTitle="Engineering"
          wordCount={500}
        />
      </div>
    </div>
  );
};

export default Engineering;
