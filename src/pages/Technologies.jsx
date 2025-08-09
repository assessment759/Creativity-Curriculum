import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react';
import { FiClock, FiMonitor, FiTarget, FiUsers } from 'react-icons/fi';
import CollapsibleTranscript from '../components/CollapsibleTranscript';

const Technologies = () => {
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
          title: 'Audio Play',
          description: 'Record and replay infants\' vocalisations to promote awareness of sound and support turn-taking; caregivers narrate actions and label sounds.',
          duration: '10-15 min',
          groupSize: 'Individual'
        },
        {
          title: 'Photo Exploration',
          description: 'Adults photograph infants\' play and show images to support recognition, naming and shared reflection.',
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
          title: 'Cause/Effect Buttons',
          description: 'Toddlers use simple electronic toys with buttons to learn action-reaction and build early mouse/touch skills.',
          duration: '15-20 min',
          groupSize: 'Individual/Pairs'
        },
        {
          title: 'Digital Storyboard',
          description: 'Children sequence photos on a tablet to tell a simple story, developing ordering and emergent sequencing.',
          duration: '20-25 min',
          groupSize: 'Pairs'
        }
      ]
    },
    {
      ageGroup: '3-5 years',
      label: 'Preschoolers',
      experiences: [
        {
          title: 'Coding with Blocks',
          description: 'Children drag and drop code blocks to sequence animations or move characters, learning logical order and prediction.',
          duration: '25-30 min',
          groupSize: 'Small group (3-4)'
        },
        {
          title: 'Documentary Project',
          description: 'Groups record short interviews about a class topic and create a simple video montage, practising speaking and editing basics.',
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
          title: 'Data Visualisation',
          description: 'Students gather simple data (e.g., class survey) and use a charting app to represent findings and draw conclusions.',
          duration: '60-90 min',
          groupSize: 'Small group (3-4)'
        },
        {
          title: 'App Design Pitch',
          description: 'Teams design a simple app concept for a classroom problem, create wireframes and pitch to peers, blending design thinking and presentation.',
          duration: '90-120 min',
          groupSize: 'Small group (4-6)'
        }
      ]
    }
  ];

  const transcriptContent = `
    <h4>Technologies in Early Childhood Education</h4>
    <p>Appropriate technology use develops digital literacy, problem solving and creative production skills. Early exposure to simple, age-appropriate tech supports logical thinking, sequencing and multimodal composition — from recording voice to basic coding. Technology enables documentation, sharing of learning and differentiated access for children with diverse needs. Teaching responsible use, privacy and digital citizenship from the start frames ethical technology habits and supports lifelong learning competencies.</p>

    <h4>Theoretical Foundations</h4>
    <p>Constructionist theory supports learning-by-making with technology. Sociocultural approaches emphasise guided use and adult mediation in young children's digital experiences. Multiliteracies frameworks expand literacy to include screen and multimodal texts. Technological pedagogical content knowledge (TPACK) helps teachers design meaningful tech integrations that amplify, not replace, hands-on learning. Ethical and critical media literacies are embedded to foster reflection about technology's role.</p>

    <h4>Resources and Digital Technology</h4>
    <p>Tablets with child-safe apps, voice recorders, cameras, programmable toys (Bee-Bot), stop-motion and simple editing apps. Charging stations, protective cases and clear storage maintain longevity. Use age-appropriate filters and manage screen time with short, purposeful sessions. Tools for documentation (video, photo) support assessment. Ensure staff training in app selection, data privacy and basic troubleshooting for smooth integration.</p>

    <h4>Developmental Progression</h4>
    <p>Learning experiences progress from basic cause-effect interactions for infants through simple digital tools for toddlers, creative production for preschoolers, to complex digital projects for early primary students. Each stage builds upon previous technological skills while introducing new challenges appropriate to cognitive and fine motor development. Assessment focuses on digital literacy, creative expression, and responsible technology use.</p>

    <h4>Integration Across Curriculum</h4>
    <p>Technology naturally integrates with all curriculum areas, enhancing documentation, creativity, and communication. Digital tools support science inquiry (data collection), literacy (digital storytelling), mathematics (graphing apps), and art (digital creation). This interdisciplinary approach reinforces technological skills while providing authentic contexts for digital citizenship and creative expression.</p>
  `;

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-indigo-400 to-indigo-600 text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-30"></div>
        <div className="container-custom relative z-10" ref={headerRef}>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="flex items-center justify-center gap-4 text-5xl font-bold mb-6 text-white">
              <FiMonitor size={48} />
              Technologies
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Digital literacy, coding basics, and responsible technology use for young learners
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
              <FiMonitor />
              Importance
            </h3>
            <p>
              Appropriate technology use develops digital literacy, problem solving and creative production skills. Early exposure to simple, age-appropriate tech supports logical thinking, sequencing and multimodal composition — from recording voice to basic coding. Technology enables documentation, sharing of learning and differentiated access for children with diverse needs. Teaching responsible use, privacy and digital citizenship from the start frames ethical technology habits and supports lifelong learning competencies.
            </p>
          </div>

          <div className="card card-hover border-t-4 border-indigo-500">
            <div className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
              ~100 words
            </div>
            <h3 className="text-indigo-700 mb-4">Theories & Perspectives</h3>
            <p>
              Constructionist theory supports learning-by-making with technology. Sociocultural approaches emphasise guided use and adult mediation in young children's digital experiences. Multiliteracies frameworks expand literacy to include screen and multimodal texts. Technological pedagogical content knowledge (TPACK) helps teachers design meaningful tech integrations that amplify, not replace, hands-on learning. Ethical and critical media literacies are embedded to foster reflection about technology's role.
            </p>
          </div>

          <div className="card card-hover border-t-4 border-indigo-500">
            <div className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
              ~100 words
            </div>
            <h3 className="text-indigo-700 mb-4">Resources & Digital Tech</h3>
            <p>
              Tablets with child-safe apps, voice recorders, cameras, programmable toys (Bee-Bot), stop-motion and simple editing apps. Charging stations, protective cases and clear storage maintain longevity. Use age-appropriate filters and manage screen time with short, purposeful sessions. Tools for documentation (video, photo) support assessment. Ensure staff training in app selection, data privacy and basic troubleshooting for smooth integration.
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
            Educational videos demonstrating technology and digital literacy activities for early childhood development.
          </p>
                    <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-4 shadow-sm border">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">What is a Computer? - For Kids</h3>
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/vqhRy6ABbJs"
                  title="🖥 What is a Computer? | Computer Science for Kids Part 1 | Grades K-2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">StoryBots Explore Technology</h3>
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/ax6bUF_8txM"
                  title="The StoryBots Explore Technology 💻 Netflix Jr"
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
          title="Technologies Curriculum Transcript"
          content={transcriptContent}
          pageTitle="Technologies"
          wordCount={500}
        />
      </div>
    </div>
  );
};

export default Technologies;
