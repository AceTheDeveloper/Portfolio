import React, { useState } from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';
import LMS from '../assets/img/lms.png'
import TBAB from '../assets/img/tbab.png'

function Projects() {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Learning Management System',
      description: 'Comprehensive LMS with course creation, user management, and progress tracking.',
      image: LMS,
      category: 'Full Stack',
      technologies: ['PHP', 'Bootstrap 5', 'MySQL'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'The Brew And Bowl',
      description: 'E-commerce site for a coffee shop and bowling alley with online ordering and reservations.',
      image: TBAB,
      category: 'Frontend',
      technologies: ['HTML 5', 'CSS 3', 'JavaScript'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'F1StackMind Website',
      description: 'Responsive website for a tech startup showcasing services, team, and contact info.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop',
      category: 'Frontend',
      technologies: ['HTML 5', 'Tailwind/CSS'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-down" data-aos-delay="200">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent works. Each project represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="zoom-in" data-aos-delay="400">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
                filter === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={600 + index * 200} // stagger cards
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded"
                      data-aos="zoom-in"
                      data-aos-delay={200 + index * 100}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12" data-aos="fade-up" data-aos-delay="1200">
            <Code className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">No projects found in this category.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="1400">
          <p className="text-lg text-gray-700 mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-800 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            <Github className="w-5 h-5" />
            Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
