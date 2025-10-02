import React from 'react';
import { Code, Lightbulb, Rocket, Users } from 'lucide-react';

function About() {
  const skills = [
    {
      category: 'Frontend',
      technologies: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML/CSS', 'Bootstrap', 'Responsive Design', 'UI/UX Principles']
    },
    {
      category: 'Backend',
      technologies: ['Node.js', 'Express', 'Python', 'PHP', 'Authentication', 'Flask', 'Laravel', 'Java']
    },
    {
      category: 'Tools & Others',
      technologies: ['Git', 'VS Code', 'PostgreSQL', 'MySQL']
    }
  ];

  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, efficient, and well-documented code is my priority.'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description: 'I love tackling complex challenges and finding creative solutions.'
    },
    {
      icon: Rocket,
      title: 'Fast Learner',
      description: 'Always exploring new technologies and staying up-to-date with industry trends.'
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Collaborative mindset with strong communication and interpersonal skills.'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white" data-aos="fade-up">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-down" data-aos-delay="200">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know more about who I am, what I do, and what I'm passionate about
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Story */}
          <div data-aos="fade-right" data-aos-delay="400">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">My Story</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Hi! I'm Ace, a passionate full-stack developer with a love for creating 
                innovative web solutions. My journey into programming started with curiosity 
                and has evolved into a deep commitment to crafting exceptional digital experiences.
              </p>
              <p>
                I specialize in building modern, responsive web applications that not only look 
                great but also provide seamless user experiences. Whether it's a dynamic frontend 
                interface or a robust backend system, I enjoy every aspect of bringing ideas to life.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community. I believe 
                in continuous learning and pushing the boundaries of what's possible.
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div data-aos="fade-left" data-aos-delay="600">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">What I Bring</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg hover:shadow-lg transition-shadow duration-200"
                    data-aos="zoom-in"
                    data-aos-delay={800 + index * 150} // stagger effect
                  >
                    <Icon className="w-8 h-8 text-blue-600 mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div data-aos="fade-up" data-aos-delay="700">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition-all duration-200"
                data-aos="flip-left"
                data-aos-delay={1200 + index * 200} // stagger effect
              >
                <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skillGroup.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      data-aos="zoom-in"
                      data-aos-delay={1400 + techIndex * 50}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="1800">
          <p className="text-lg text-gray-700 mb-6">
            Interested in working together? Let's create something amazing!
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
