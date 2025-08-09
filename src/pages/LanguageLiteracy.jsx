import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react';
import { FiBookOpen, FiClock, FiTarget, FiUsers } from 'react-icons/fi';
import CollapsibleTranscript from '../components/CollapsibleTranscript';

const LanguageLiteracy = () => {
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
          title: 'Babble & Bubble',
          description: 'Caregiver imitates infant vocalisations and expands utterances, using exaggerated intonation to support early turn-taking and proto-conversations.',
          duration: '10-15 min',
          groupSize: 'Individual'
        },
        {
          title: 'Picture Language Play',
          description: 'Adult names images on a high-contrast board and gestures; infants point or look to build joint attention and vocabulary.',
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
          title: 'Rhyme Time',
          description: 'Toddlers chant nursery rhymes with actions, strengthening phonological awareness and memory for rhythm and sequence.',
          duration: '15-20 min',
          groupSize: 'Small group (4-6)'
        },
        {
          title: 'Message Centre',
          description: 'Children "write" simple messages with scribble marks and draw pictures for peers, developing emergent writing and symbolic understanding.',
          duration: '20-25 min',
          groupSize: 'Individual/Pairs'
        }
      ]
    },
    {
      ageGroup: '3-5 years',
      label: 'Preschoolers',
      experiences: [
        {
          title: 'Story Circle Retell',
          description: 'Children retell stories using props and sequencing cards, building narrative structure, vocabulary and turn-taking.',
          duration: '25-30 min',
          groupSize: 'Small group (4-6)'
        },
        {
          title: 'Author\'s Chair',
          description: 'Children share original stories or drawings to the group; teacher models feedback and reflective questioning to expand ideas.',
          duration: '30-40 min',
          groupSize: 'Whole class'
        }
      ]
    },
    {
      ageGroup: '6-8 years',
      label: 'Early Primary',
      experiences: [
        {
          title: 'Research Mini-project',
          description: 'Students research a topic, create short reports and present to peers, developing informational text conventions and public speaking.',
          duration: '60-90 min',
          groupSize: 'Small group (3-4)'
        },
        {
          title: 'Podcast Creation',
          description: 'Small teams script, record and edit short podcasts on classroom topics, integrating planning, voice modulation and digital editing skills.',
          duration: '90-120 min',
          groupSize: 'Small group (3-4)'
        }
      ]
    }
  ];

  const transcriptContent = `
    <h4>Language & Literacy in Early Childhood Education</h4>
    <p>Language and literacy are foundational tools for thinking, social participation and later academic success. Rich oral language experiences, shared reading, storytelling and playful phonological games build vocabulary, narrative competence and early print awareness. Literacy activities support emergent writing, symbol recognition and comprehension; they also scaffold metalinguistic skills necessary for decoding and spelling. Integrating multimodal literacy (picture, gesture, sound) ensures inclusive access for diverse learners. Literacy through creative arts fosters motivation and deeper meaning making, turning abstract concepts into relatable stories and hands-on projects.</p>

    <h4>Theoretical Foundations</h4>
    <p>Emergent literacy theories (Clay) emphasise that literacy develops through meaningful interactions and shared texts. Vygotsky's social mediation highlights dialogic reading and caregiver scaffolding. Bruner's spiral curriculum and narrative construction show how stories help children organise experience. Phonological awareness research supports play-based rhyming, segmenting and blending activities. Sociocultural literacy approaches advocate for authentic writing opportunities (lists, labels, messages) and culturally relevant texts. Multiliteracies theory supports multimodal texts (audio, visual, digital) as legitimate literacy practices in contemporary classrooms.</p>

    <h4>Resources and Digital Technology</h4>
    <p>Books (board, picture, predictable text), puppets for story retelling, letter manipulatives, magnetic letters, print-rich labels and environmental print. Writing materials (clipboards, pencils, whiteboards), drawing supplies, and listening centres for recorded stories. Digital apps for interactive stories, audio recorders for children to record retellings, and simple publishing tools to create class books. Include home-language resources and dual-language stories for multilingual contexts. Provide comfortable reading spaces, accessible book displays and routine times for shared reading and storytelling.</p>

    <h4>Developmental Progression</h4>
    <p>Learning experiences progress from early vocal interactions for infants through emergent writing for toddlers, narrative development for preschoolers, to formal literacy skills for early primary students. Each stage builds upon previous communication skills while introducing new challenges appropriate to cognitive and language development. Assessment focuses on communication competence, story understanding, and individual growth in literacy skills.</p>

    <h4>Integration Across Curriculum</h4>
    <p>Language and literacy naturally integrate with all curriculum areas, serving as the foundation for learning across domains. Reading and writing support science inquiry, mathematical problem-solving, artistic expression, and social understanding. This interdisciplinary approach reinforces literacy skills while providing meaningful contexts for communication and learning through authentic literacy experiences.</p>
  `;

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-emerald-400 to-emerald-600 text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-30"></div>
        <div className="container-custom relative z-10" ref={headerRef}>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="flex items-center justify-center gap-4 text-5xl font-bold mb-6 text-white">
              <FiBookOpen size={48} />
              Language & Literacy
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Communication skills, reading readiness, and vocabulary through stories and writing
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom section-padding">
        {/* Three Core Sections */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16" ref={sectionsRef}>
          <div className="card card-hover border-t-4 border-green-500">
            <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
              ~100 words
            </div>
            <h3 className="text-green-700 mb-4 flex items-center gap-2">
              <FiBookOpen />
              Importance
            </h3>
            <p>
              Language and literacy are foundational tools for thinking, social participation and later academic success. Rich oral language experiences, shared reading, storytelling and playful phonological games build vocabulary, narrative competence and early print awareness. Literacy activities support emergent writing, symbol recognition and comprehension; they also scaffold metalinguistic skills necessary for decoding and spelling. Integrating multimodal literacy (picture, gesture, sound) ensures inclusive access for diverse learners. Literacy through creative arts fosters motivation and deeper meaning making, turning abstract concepts into relatable stories and hands-on projects.
            </p>
          </div>

          <div className="card card-hover border-t-4 border-green-500">
            <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
              ~100 words
            </div>
            <h3 className="text-green-700 mb-4">Theories & Perspectives</h3>
            <p>
              Emergent literacy theories (Clay) emphasise that literacy develops through meaningful interactions and shared texts. Vygotsky's social mediation highlights dialogic reading and caregiver scaffolding. Bruner's spiral curriculum and narrative construction show how stories help children organise experience. Phonological awareness research supports play-based rhyming, segmenting and blending activities. Sociocultural literacy approaches advocate for authentic writing opportunities (lists, labels, messages) and culturally relevant texts. Multiliteracies theory supports multimodal texts (audio, visual, digital) as legitimate literacy practices.
            </p>
          </div>

          <div className="card card-hover border-t-4 border-green-500">
            <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
              ~100 words
            </div>
            <h3 className="text-green-700 mb-4">Resources & Digital Tech</h3>
            <p>
              Books (board, picture, predictable text), puppets for story retelling, letter manipulatives, magnetic letters, print-rich labels and environmental print. Writing materials (clipboards, pencils, whiteboards), drawing supplies, and listening centres for recorded stories. Digital apps for interactive stories, audio recorders for children to record retellings, and simple publishing tools to create class books. Include home-language resources and dual-language stories for multilingual contexts. Provide comfortable reading spaces, accessible book displays and routine times for shared reading and storytelling.
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
                <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-t-xl p-6 border-b border-gray-200">
                  <h3 className="text-green-800 text-xl font-semibold flex items-center gap-3 mb-2">
                    <FiUsers />
                    {group.label}
                  </h3>
                  <div className="text-green-700 text-sm opacity-80">{group.ageGroup}</div>
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
            Educational videos demonstrating language and literacy activities for early childhood development.
          </p>
                                        <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-4 shadow-sm border">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Phonics Song - Learn to Read</h3>
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/oVtzNpzuvoA"
                  title="Learn with Ms Rachel - Phonics Song - Learn to Read"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">4 Stages to Developing Early Literacy</h3>
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/v3evqVRXnok"
                  title="4 Stages to Developing Early Literacy in Children"
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
          title="Language & Literacy Curriculum Transcript"
          content={transcriptContent}
          pageTitle="Language & Literacy"
          wordCount={500}
        />
      </div>
    </div>
  );
};

export default LanguageLiteracy;
