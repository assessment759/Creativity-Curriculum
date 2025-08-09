import React from 'react';
import { FiClock, FiEdit3, FiTarget, FiUsers } from 'react-icons/fi';
import CollapsibleTranscript from '../components/CollapsibleTranscript';

const Art = () => {
  const learningExperiences = [
    {
      ageGroup: '0-2 years',
      label: 'Infants & Toddlers',
      experiences: [
        {
          title: 'Scribble & Respond',
          description: 'Caregiver provides chunky crayons and large paper; imitates infant marks, names gestures, and scaffolds scribbling into early symbolic lines and social interaction.',
          duration: '10-15 min',
          groupSize: 'Individual'
        },
        {
          title: 'Texture Trays',
          description: 'Tactile trays with rice, fabric scraps and finger paint support sensory exploration; adult models rubbing, patting and simple shapes to encourage grasp and hand control.',
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
          title: 'Glue-stick Collage',
          description: 'Toddlers tear paper and stick to pre-drawn shapes, practising bilateral hand use and decision making; teacher narrates choices to build vocabulary.',
          duration: '20-25 min',
          groupSize: 'Small group (3-4)'
        },
        {
          title: 'Stamp & Sort',
          description: 'Children press stamps to make repeated patterns, then sort by shape or colour, linking mark-making to early categorisation and patterning.',
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
          title: 'Story Picture Sequence',
          description: 'Children draw three panels of a story, tell it to peers and make a collaborative book, fostering narrative structure and symbolic progression.',
          duration: '30-40 min',
          groupSize: 'Small group (4-6)'
        },
        {
          title: 'Clay Story Characters',
          description: 'Small groups sculpt characters then role-play scenes; encourages fine motor control, planning and cooperative storytelling.',
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
          title: 'Architectural Collage',
          description: 'Students design a local building using mixed media, measure parts, and explain choices — integrating art, geometry and community studies.',
          duration: '60-90 min',
          groupSize: 'Pairs/Small group'
        },
        {
          title: 'Stop-motion Animation',
          description: 'Teams storyboard a short sequence, create characters and produce a stop-motion clip using tablets, blending art, sequencing and digital literacy.',
          duration: '90-120 min',
          groupSize: 'Small group (3-4)'
        }
      ]
    }
  ];

  const transcriptContent = `
    <h4>Art in Early Childhood Education</h4>
    <p>Art enables children to explore representation, sensory experience and symbolic thinking while strengthening fine motor control, visual discrimination and emotional expression. Through drawing, painting, collage and sculpture, children develop confidence to make choices, solve visual problems and express ideas that may not yet be verbalised. Art experiences support identity, cultural expression and storytelling, and provide low-risk opportunities for experimentation — testing cause/effect with materials, transforming recycled objects or combining textures. Early art practice supports cross-curricular links (literacy through drawing stories; maths through pattern and symmetry) and provides rich assessment evidence of development over time.</p>

    <h4>Theoretical Foundations</h4>
    <p>Constructivist views (Piaget) position art as a means for constructing meaning; Vygotsky highlights social scaffolding where adult prompts and shared reflection extend children's symbolic thinking. Reggio Emilia emphasises the environment as the "third teacher", provocation and documentation. Dewey's experiential learning supports process over product — valuing exploration and reflection. Gardner's multiple intelligences validates visual-spatial expression. Process-oriented art pedagogy and sociocultural approaches guide teachers to offer open-ended provocations, intentional materials selection, and reflective documentation that link artmaking to communicative and cognitive goals.</p>

    <h4>Resources and Digital Technology</h4>
    <p>Open-ended materials: paints, brushes, collage papers, clay, glue, recycled boxes, fabrics and mark-making tools. Sensory media (sand, water, textured paint) and safe tools (scissors, staplers) for older groups. Digital tools: simple drawing apps, stop-motion apps for sequential art, tablets for digital collage and cameras for documentation. Display and documentation materials (clipboards, photo frames, reflective journals) enable ongoing assessment. Prioritise non-toxic supplies, easy clean areas, aprons and accessible storage so children can independently select and return materials.</p>

    <h4>Developmental Progression</h4>
    <p>Learning experiences progress from basic sensory exploration for infants through guided mark-making for toddlers, symbolic representation for preschoolers, to complex multimedia projects for early primary students. Each stage builds upon previous skills while introducing new challenges appropriate to cognitive and physical development. Assessment focuses on process, creativity, and individual growth rather than product comparison.</p>

    <h4>Integration Across Curriculum</h4>
    <p>Art naturally integrates with literacy (visual storytelling), mathematics (patterns, shapes, measurement), science (color mixing, material properties), and social studies (cultural expression, community art). This interdisciplinary approach reinforces learning while providing multiple entry points for diverse learners to demonstrate understanding and creativity.</p>
  `;

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-pink-400 to-pink-600 text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-30"></div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="flex items-center justify-center gap-4 text-5xl font-bold mb-6 text-white">
              <FiEdit3 size={48} />
              Art
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Visual expression, creativity, and fine motor development through drawing, painting, and sculpture
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom section-padding">
        {/* Three Core Sections */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="card card-hover border-t-4 border-pink-500">
            <div className="inline-block bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
              ~100 words
            </div>
            <h3 className="text-pink-700 mb-4 flex items-center gap-2">
              <FiEdit3 />
              Importance
            </h3>
            <p>
              Art enables children to explore representation, sensory experience and symbolic thinking while
              strengthening fine motor control, visual discrimination and emotional expression. Through drawing,
              painting, collage and sculpture, children develop confidence to make choices, solve visual problems
              and express ideas that may not yet be verbalised. Art experiences support identity, cultural
              expression and storytelling, and provide low-risk opportunities for experimentation — testing
              cause/effect with materials, transforming recycled objects or combining textures.
            </p>
          </div>

          <div className="card card-hover border-t-4 border-pink-500">
            <div className="inline-block bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
              ~100 words
            </div>
            <h3 className="text-pink-700 mb-4">Theories & Perspectives</h3>
            <p>
              Constructivist views (Piaget) position art as a means for constructing meaning; Vygotsky highlights
              social scaffolding where adult prompts and shared reflection extend children's symbolic thinking.
              Reggio Emilia emphasises the environment as the "third teacher", provocation and documentation.
              Dewey's experiential learning supports process over product — valuing exploration and reflection.
              Gardner's multiple intelligences validates visual-spatial expression. Process-oriented art pedagogy
              and sociocultural approaches guide teachers to offer open-ended provocations.
            </p>
          </div>

          <div className="card card-hover border-t-4 border-pink-500">
            <div className="inline-block bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
              ~100 words
            </div>
            <h3 className="text-pink-700 mb-4">Resources & Digital Tech</h3>
            <p>
              Open-ended materials: paints, brushes, collage papers, clay, glue, recycled boxes, fabrics and
              mark-making tools. Sensory media (sand, water, textured paint) and safe tools (scissors, staplers)
              for older groups. Digital tools: simple drawing apps, stop-motion apps for sequential art, tablets
              for digital collage and cameras for documentation. Display and documentation materials (clipboards,
              photo frames, reflective journals) enable ongoing assessment. Prioritise non-toxic supplies, easy
              clean areas, aprons and accessible storage.
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
                <div className="bg-gradient-to-r from-pink-100 to-pink-200 rounded-t-xl p-6 border-b border-gray-200">
                  <h3 className="text-pink-800 text-xl font-semibold flex items-center gap-3 mb-2">
                    <FiUsers />
                    {group.label}
                  </h3>
                  <div className="text-pink-700 text-sm opacity-80">{group.ageGroup}</div>
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
            Educational videos demonstrating art activities and techniques for early childhood development.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-4 shadow-sm border">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Famous Art and Artists for Kids</h3>
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/IldjU2v0EBw"
                  title="Famous Art and Artists for Kids"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">First Day of Kindergarten Art</h3>
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/sWjT0zCjw0s"
                  title="A Winning Lesson for the First Day of Kindergarten Art"
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
          title="Art Curriculum Transcript"
          content={transcriptContent}
          pageTitle="Art"
          wordCount={500}
        />
      </div>
    </div>
  );
};

export default Art;
