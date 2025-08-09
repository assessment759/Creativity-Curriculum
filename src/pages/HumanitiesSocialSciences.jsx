import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react';
import { FiClock, FiTarget, FiUsers } from 'react-icons/fi';
import CollapsibleTranscript from '../components/CollapsibleTranscript';

const HumanitiesSocialSciences = () => {
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
          title: 'Family Album Sharing',
          description: 'Caregivers share photos of family members and routines; infants respond to familiar faces and voices, building social recognition.',
          duration: '10-15 min',
          groupSize: 'Individual'
        },
        {
          title: 'Comfort Object Routines',
          description: 'Teachers incorporate familiar objects and rituals to support security and transitions, promoting social regulation.',
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
          title: 'Market Play',
          description: 'Toddlers role-play buying and selling with play money, learning exchange concepts, turn-taking and vocabulary for goods.',
          duration: '20-25 min',
          groupSize: 'Small group (3-4)'
        },
        {
          title: 'Home Corner Storytelling',
          description: 'Children act out family routines using props, practising social roles and everyday language.',
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
          title: 'Community Map Project',
          description: 'Children create a simple map of their classroom or local area and discuss places and purposes.',
          duration: '30-40 min',
          groupSize: 'Small group (4-6)'
        },
        {
          title: 'Oral History Interview',
          description: 'Children ask family members simple questions about childhood games to build timelines and cultural understanding.',
          duration: '25-35 min',
          groupSize: 'Pairs'
        }
      ]
    },
    {
      ageGroup: '6-8 years',
      label: 'Early Primary',
      experiences: [
        {
          title: 'Local Research Inquiry',
          description: 'Students investigate a local issue (e.g., park usage), collect data and propose community recommendations.',
          duration: '90-120 min',
          groupSize: 'Small group (4-6)'
        },
        {
          title: 'Civic Debate',
          description: 'Guided small-group debates on classroom rules or community topics develop reasoned argument and perspective taking.',
          duration: '45-60 min',
          groupSize: 'Small group (6-8)'
        }
      ]
    }
  ];

  const transcriptContent = `
    <h4>Humanities & Social Sciences in Early Childhood Education</h4>
    <p>Humanities and social sciences cultivate identity, community understanding, empathy and civic awareness. Early experiences explore family, culture, local community and simple historical or geographic concepts through storytelling, projects and role play. These activities support social reasoning, perspective taking and ethical discussion. Integrating community resources and place-based learning connects children to their environment and develops respect for diversity, local knowledge and shared responsibilities.</p>

    <h4>Theoretical Foundations</h4>
    <p>Sociocultural theory foregrounds learning as participation in cultural practices and the use of cultural tools (language, rituals). Place-based education emphasises learning from the local environment and community. Narrative and oral history frameworks situate children as knowledge producers, allowing family and community stories to shape curriculum. Civic education at early ages focuses on rights, responsibilities, fairness and collaborative problem solving using concrete, age-appropriate scenarios.</p>

    <h4>Resources and Digital Technology</h4>
    <p>Maps, photos of local places, family artefacts, storybooks about communities, and role-play props for market/shop or home corner. Recording devices for oral histories, simple mapping tools and photographs to document local features. Community visitors, field trips and culturally authentic materials strengthen relevance. Use multilingual resources to reflect community languages and support inclusion. Display local timelines and maps for ongoing reference.</p>

    <h4>Developmental Progression</h4>
    <p>Learning experiences progress from basic family recognition for infants through simple community roles for toddlers, cultural exploration for preschoolers, to civic engagement for early primary students. Each stage builds upon previous social understanding while introducing new challenges appropriate to cognitive and social development. Assessment focuses on community awareness, cultural appreciation, and social reasoning skills.</p>

    <h4>Integration Across Curriculum</h4>
    <p>Humanities and social sciences naturally integrate with literacy (storytelling, research), mathematics (community data), science (environmental studies), and art (cultural expression). This interdisciplinary approach reinforces social concepts while providing authentic contexts for exploring identity, community, and civic responsibility through meaningful cultural connections.</p>
  `;

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-purple-400 to-purple-600 text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-30"></div>
        <div className="container-custom relative z-10" ref={headerRef}>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="flex items-center justify-center gap-4 text-5xl font-bold mb-6 text-white">
              <FiUsers size={48} />
              Humanities & Social Sciences
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Community understanding, culture, and social skills through local exploration
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom section-padding">
        {/* Three Core Sections */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16" ref={sectionsRef}>
          <div className="card card-hover border-t-4 border-purple-500">
            <div className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
              ~100 words
            </div>
            <h3 className="text-purple-700 mb-4 flex items-center gap-2">
              <FiUsers />
              Importance
            </h3>
            <p>
              Humanities and social sciences cultivate identity, community understanding, empathy and civic awareness. Early experiences explore family, culture, local community and simple historical or geographic concepts through storytelling, projects and role play. These activities support social reasoning, perspective taking and ethical discussion. Integrating community resources and place-based learning connects children to their environment and develops respect for diversity, local knowledge and shared responsibilities.
            </p>
          </div>

          <div className="card card-hover border-t-4 border-purple-500">
            <div className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
              ~100 words
            </div>
            <h3 className="text-purple-700 mb-4">Theories & Perspectives</h3>
            <p>
              Sociocultural theory foregrounds learning as participation in cultural practices and the use of cultural tools (language, rituals). Place-based education emphasises learning from the local environment and community. Narrative and oral history frameworks situate children as knowledge producers, allowing family and community stories to shape curriculum. Civic education at early ages focuses on rights, responsibilities, fairness and collaborative problem solving using concrete, age-appropriate scenarios.
            </p>
          </div>

          <div className="card card-hover border-t-4 border-purple-500">
            <div className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
              ~100 words
            </div>
            <h3 className="text-purple-700 mb-4">Resources & Digital Tech</h3>
            <p>
              Maps, photos of local places, family artefacts, storybooks about communities, and role-play props for market/shop or home corner. Recording devices for oral histories, simple mapping tools and photographs to document local features. Community visitors, field trips and culturally authentic materials strengthen relevance. Use multilingual resources to reflect community languages and support inclusion. Display local timelines and maps for ongoing reference.
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
                <div className="bg-gradient-to-r from-purple-100 to-purple-200 rounded-t-xl p-6 border-b border-gray-200">
                  <h3 className="text-purple-800 text-xl font-semibold flex items-center gap-3 mb-2">
                    <FiUsers />
                    {group.label}
                  </h3>
                  <div className="text-purple-700 text-sm opacity-80">{group.ageGroup}</div>
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
            Educational videos demonstrating social studies and community learning activities for early childhood development.
          </p>
                                        <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-4 shadow-sm border">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Learning About a Child's Family Culture</h3>
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/RgHZq-qJHeY"
                  title="Learning About a Child's Family Culture"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Discussing Differences With Children</h3>
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/-ppZq1mU5Hs"
                  title="Discussing Differences With Children"
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
          title="Humanities & Social Sciences Curriculum Transcript"
          content={transcriptContent}
          pageTitle="Humanities & Social Sciences"
          wordCount={500}
        />
      </div>
    </div>
  );
};

export default HumanitiesSocialSciences;
