import React from 'react';
import { FiClock, FiPlay, FiTarget, FiUsers } from 'react-icons/fi';
import CollapsibleTranscript from '../components/CollapsibleTranscript';

const DramaPuppetry = () => {
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
    <p>Drama and puppetry provide powerful tools for developing imagination, emotional literacy, and social communication skills in young children. Through role-play, storytelling, and puppet interactions, children explore different perspectives, rehearse social scenarios, and develop narrative understanding. These activities strengthen language development through vocabulary expansion, sentence construction, and dialogue practice. Drama experiences support emotional development by providing safe spaces to explore feelings and practice empathy. Puppetry offers particular benefits for shy children, allowing them to express ideas through an intermediary character.</p>

    <h4>Theoretical Foundations</h4>
    <p>Vygotsky's zone of proximal development theory supports drama as a context where children can achieve beyond their independent capacity through adult scaffolding and peer interaction. Bruner's narrative construction theory emphasizes storytelling as fundamental to human cognition and meaning-making. Drama therapy research demonstrates the emotional regulation benefits of symbolic play and character embodiment. Process drama frameworks provide structured approaches to dramatic learning, emphasizing reflection and meaning-making. Sociocultural theories highlight drama as a multimodal learning space integrating language, movement, and symbolic thinking.</p>

    <h4>Resources and Digital Technology</h4>
    <p>Basic materials include simple puppets (sock, stick, finger puppets), fabric scraps, masks, props, costume pieces, and cardboard boxes for puppet theaters. Storytelling cards and picture books provide narrative prompts. Recording devices and cameras enable children to review and reflect on performances. Digital tools include simple video editing apps, digital storytelling platforms, and green-screen technology for older children. Ensure safe performance spaces with adequate room for movement and accessible storage for materials and props.</p>

    <h4>Developmental Progression</h4>
    <p>Learning experiences progress from simple puppet interactions for infants through guided role-play for toddlers, character development and simple performances for preschoolers, to complex script writing and theatrical productions for early primary students. Each stage builds upon previous skills while introducing new challenges appropriate to cognitive, language, and social development. Assessment focuses on creative expression, collaborative skills, communication abilities, and emotional understanding.</p>

    <h4>Integration Across Curriculum</h4>
    <p>Drama and puppetry naturally integrate with literacy (storytelling, vocabulary development, character analysis), social studies (community helpers, historical events, cultural traditions), and emotional learning (empathy, perspective-taking, conflict resolution). This interdisciplinary approach reinforces learning while providing authentic opportunities for creative expression and social skill development through collaborative performance experiences.</p>
  `;

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-violet-400 to-violet-600 text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-30"></div>
        <div className="container-custom relative z-10">
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
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="card card-hover border-t-4 border-purple-500">
            <div className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
              ~100 words
            </div>
            <h3 className="text-purple-700 mb-4 flex items-center gap-2">
              <FiPlay />
              Importance
            </h3>
            <p>
              Drama and puppetry provide powerful tools for developing imagination, emotional literacy, and social communication skills in young children. Through role-play, storytelling, and puppet interactions, children explore different perspectives, rehearse social scenarios, and develop narrative understanding. These activities strengthen language development through vocabulary expansion, sentence construction, and dialogue practice. Drama experiences support emotional development by providing safe spaces to explore feelings and practice empathy. Puppetry offers particular benefits for shy children, allowing them to express ideas through an intermediary character.
            </p>
          </div>

          <div className="card card-hover border-t-4 border-purple-500">
            <div className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
              ~100 words
            </div>
            <h3 className="text-purple-700 mb-4">Theories & Perspectives</h3>
            <p>
              Vygotsky's zone of proximal development theory supports drama as a context where children can achieve beyond their independent capacity through adult scaffolding and peer interaction. Bruner's narrative construction theory emphasizes storytelling as fundamental to human cognition and meaning-making. Drama therapy research demonstrates the emotional regulation benefits of symbolic play and character embodiment. Process drama frameworks provide structured approaches to dramatic learning, emphasizing reflection and meaning-making. Sociocultural theories highlight drama as a multimodal learning space integrating language, movement, and symbolic thinking.
            </p>
          </div>

          <div className="card card-hover border-t-4 border-purple-500">
            <div className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
              ~100 words
            </div>
            <h3 className="text-purple-700 mb-4">Resources & Digital Tech</h3>
            <p>
              Basic materials include simple puppets (sock, stick, finger puppets), fabric scraps, masks, props, costume pieces, and cardboard boxes for puppet theaters. Storytelling cards and picture books provide narrative prompts. Recording devices and cameras enable children to review and reflect on performances. Digital tools include simple video editing apps, digital storytelling platforms, and green-screen technology for older children. Ensure safe performance spaces with adequate room for movement and accessible storage for materials and props.
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
            Educational videos demonstrating drama and puppetry activities for early childhood development.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-4 shadow-sm border">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Teaching with Puppets for Beginners</h3>
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/Dkt9mH8GUMw"
                  title="Teaching with Puppets for Beginners"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Googly-Eyed Puppets Performance</h3>
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/b1_jwkpcUQw"
                  title="Googly-Eyed Puppets: Performing Katy and the Gecko"
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
