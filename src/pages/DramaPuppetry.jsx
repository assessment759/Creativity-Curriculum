import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react';
import { FiClock, FiPlay, FiTarget, FiUsers } from 'react-icons/fi';
import CollapsibleTranscript from '../components/CollapsibleTranscript';

const DramaPuppetry = () => {
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
          title: 'Peekaboo Puppet Play',
          description: 'Caregiver uses puppet to hide and reveal, supporting object permanence, vocal turn-taking and cause-effect as infants respond with smiles and vocalisations.',
          duration: '10-15 min',
          groupSize: 'Individual'
        },
        {
          title: 'Emotion Puppets',
          description: 'Soft puppets show simple faces; adult models "happy/sad" puppet voices and labels feelings to build emotional vocabulary.',
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
          title: 'Dramatic Mini-scenes',
          description: 'Toddlers enact simple rituals (grocery shop) with props, practising role routines and language for everyday tasks.',
          duration: '15-20 min',
          groupSize: 'Small group (3-4)'
        },
        {
          title: 'Puppet Follow-the-leader',
          description: 'Children copy puppet movements and sounds, building imitation, gross motor control and shared attention.',
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
          title: 'Character Hot-seating',
          description: 'Children take turns answering questions in character to deepen perspective taking and narrative detail.',
          duration: '25-30 min',
          groupSize: 'Small group (4-6)'
        },
        {
          title: 'Story Theatre Creation',
          description: 'Small groups devise short scenes from picture books and use puppets to present, strengthening sequencing and cooperative planning.',
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
          title: 'Scripted Scene Writing',
          description: 'Students co-write short scripts, assign roles and rehearse, learning dialogue structure, pacing and stage directions.',
          duration: '45-60 min',
          groupSize: 'Small group (4-6)'
        },
        {
          title: 'Puppet Festival Project',
          description: 'Teams design puppets, build a mini-set and perform to peers or younger groups, integrating design, storytelling and audience awareness.',
          duration: '60-90 min',
          groupSize: 'Small group (4-6)'
        }
      ]
    }
  ];

  const transcriptContent = `
    <h4>Drama & Puppetry in Early Childhood Education</h4>
    <p>Drama and puppetry build imagination, emotional literacy and social communication. Acting, role play and puppetry allow children to try different perspectives, rehearse social scenarios and develop narrative skills. Such activities support language development (vocabulary, sentence building), nonverbal communication, turn-taking and empathy as children embody characters and negotiate roles. Drama is an ideal vehicle for literacy, social studies and community engagement — enabling deeper engagement with texts and social issues through active exploration and embodiment. Puppetry lowers performance pressure and allows shy children to express ideas through an intermediary.</p>

    <h4>Theoretical Foundations</h4>
    <p>Role-play maps to Vygotskian ideas of the zone of proximal development: adult scaffolding encourages children to achieve beyond independent capacity. Bruner's narrative construction theory sees storying as central to cognition; Drama therapy and socio-dramatic play research highlight emotional regulation and symbolic rehearsal. Process drama frameworks (O'Toole) and puppet theatre practices provide structured progression: warm-ups, role creation, rehearsal and reflection. Sociocultural and embodied cognition theories support drama as a multimodal space for integrating language, movement and thought.</p>

    <h4>Resources and Digital Technology</h4>
    <p>Materials: simple puppets (sock, stick, glove), fabric, masks, props, boxes for stages, and costumes. Puppetry kits and storytelling cards prompt scenarios. Recording devices and cameras let children review performances and reflect. Digital story creators, simple audio editors and green-screen apps can extend production. Ensure safe performance area and accessible props. Prepare prompts and scaffolded role cards for younger groups; for older children include script templates and basic stagecraft vocabulary.</p>

    <h4>Developmental Progression</h4>
    <p>Learning experiences progress from simple puppet interactions for infants through guided role-play for toddlers, character development for preschoolers, to complex theatrical productions for early primary students. Each stage builds upon previous skills while introducing new challenges appropriate to cognitive and social development. Assessment focuses on creative expression, collaboration, and communication skills.</p>

    <h4>Integration Across Curriculum</h4>
    <p>Drama and puppetry naturally integrate with literacy (storytelling, vocabulary), social studies (community roles, historical events), and emotional learning (empathy, perspective-taking). This interdisciplinary approach reinforces learning while providing opportunities for creative expression and social skill development through collaborative performance experiences.</p>
  `;

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-violet-400 to-violet-600 text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-30"></div>
        <div className="container-custom relative z-10" ref={headerRef}>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="flex items-center justify-center gap-4 text-5xl font-bold mb-6 text-white">
              <FiPlay size={48} />
              Drama & Puppetry
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Imagination, storytelling, and social communication through role-play and puppet theater
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
              <FiPlay />
              Importance
            </h3>
            <p>
              Drama and puppetry build imagination, emotional literacy and social communication. Acting, role play and puppetry allow children to try different perspectives, rehearse social scenarios and develop narrative skills. Such activities support language development (vocabulary, sentence building), nonverbal communication, turn-taking and empathy as children embody characters and negotiate roles. Drama is an ideal vehicle for literacy, social studies and community engagement — enabling deeper engagement with texts and social issues through active exploration and embodiment. Puppetry lowers performance pressure and allows shy children to express ideas through an intermediary.
            </p>
          </div>

          <div className="card card-hover border-t-4 border-purple-500">
            <div className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
              ~100 words
            </div>
            <h3 className="text-purple-700 mb-4">Theories & Perspectives</h3>
            <p>
              Role-play maps to Vygotskian ideas of the zone of proximal development: adult scaffolding encourages children to achieve beyond independent capacity. Bruner's narrative construction theory sees storying as central to cognition; Drama therapy and socio-dramatic play research highlight emotional regulation and symbolic rehearsal. Process drama frameworks (O'Toole) and puppet theatre practices provide structured progression: warm-ups, role creation, rehearsal and reflection. Sociocultural and embodied cognition theories support drama as a multimodal space for integrating language, movement and thought.
            </p>
          </div>

          <div className="card card-hover border-t-4 border-purple-500">
            <div className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
              ~100 words
            </div>
            <h3 className="text-purple-700 mb-4">Resources & Digital Tech</h3>
            <p>
              Materials: simple puppets (sock, stick, glove), fabric, masks, props, boxes for stages, and costumes. Puppetry kits and storytelling cards prompt scenarios. Recording devices and cameras let children review performances and reflect. Digital story creators, simple audio editors and green-screen apps can extend production. Ensure safe performance area and accessible props. Prepare prompts and scaffolded role cards for younger groups; for older children include script templates and basic stagecraft vocabulary.
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
            Video demonstrations of drama and puppetry learning experiences will be embedded here, showcasing developmentally
            appropriate activities across different age groups.
          </p>
          <div className="bg-gray-200 border-2 border-dashed border-gray-400 rounded-xl py-16 text-gray-600 italic">
            Video enactments from the Drama & Puppetry curriculum will be embedded here.
            <br />
            <small className="text-gray-500 not-italic">(Videos will be added during the recording phase of the assessment)</small>
          </div>
        </section>

        {/* Collapsible Transcript */}
        <CollapsibleTranscript
          title="Drama & Puppetry Curriculum Transcript"
          content={transcriptContent}
          pageTitle="Drama & Puppetry"
          wordCount={500}
        />
      </div>
    </div>
  );
};

export default DramaPuppetry;
