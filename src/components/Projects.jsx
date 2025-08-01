import { useState } from 'react'
import {  Github, Eye, FolderGit2 } from 'lucide-react'

const Projects = () => {
  const [filter, setFilter] = useState('all')
const projects = [
    {
      id: 1,
      title: 'Smart Study Assistant',
      description: 'An AI-powered platform that generates quizzes, flashcards, and tracks progress from notes or PDFs.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Cloudinary', 'OpenAI API'],
      category: 'fullstack',
      image: 'gradient-to-br from-indigo-500 to-purple-600',
      demoUrl: '#',
      githubUrl: 'https://github.com/Payal-gurunani/smartStudy',
      featured: true
    },
    {
      id: 2,
      title: 'Smart Expense',
      description: 'A full-stack expense management app with budgets, monthly summaries, pie charts, and CRUD features.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT Auth'],
      category: 'fullstack',
      image: 'gradient-to-br from-orange-500 to-red-500',
      demoUrl: 'https://smart-expenses-two.vercel.app',
      githubUrl: 'https://github.com/Payal-gurunani/Smart-Expenses',
      featured: true
    },

    {
      id: 3,
      title: 'Finance Tracker',
      description: 'A responsive UI for tracking personal finances, built to visualize monthly expenses and insights.',
      technologies: ['React', 'Recharts', 'Tailwind CSS'],
      category: 'frontend',
      image: 'gradient-to-br from-green-500 to-blue-500',
      demoUrl: 'https://finance-tracker-nu-two.vercel.app/',
      githubUrl: 'https://github.com/Payal-gurunani/Finance-tracker',
      featured: false
    },
    {
      id: 4,
      title: 'Password Generator',
      description: 'A simple tool to generate secure passwords with various strength and character options.',
      technologies: ['React', 'Tailwind CSS'],
      category: 'frontend',
      image: 'gradient-to-br from-purple-500 to-pink-500',
      demoUrl: 'https://password-generator-weld-eight-39.vercel.app/',
      githubUrl: 'https://github.com/Payal-gurunani/passwordGenerator',
      featured: false
    },
    {
      id: 5,
      title: 'Resume Builder',
      description: 'A customizable resume builder with live preview, multiple templates, and export-to-PDF feature.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'html2canvas', 'jsPDF'],
      category: 'frontend',
      image: 'gradient-to-br from-blue-500 to-purple-600',
      demoUrl: 'https://resume-builder-sandy-one.vercel.app',
      githubUrl: 'https://github.com/Payal-gurunani/Resume-Builder',
      featured: true
    },
    {
      id: 6,
      title: 'Contact Manager API',
      description: 'A backend-only project built to learn RESTful APIs, including CRUD operations, auth, and validation.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT Auth'],
      category: 'backend',
      image: 'gradient-to-br from-gray-600 to-gray-800',
      githubUrl: 'https://github.com/Payal-gurunani/contact-manager/tree/main/backContact',
      featured: false
    }
]
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
  ]

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter)

  return (
    <section id="projects" className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Projects</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A curated list of apps, tools, and platforms I've built using modern tech.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-5 py-2 rounded-full font-medium border transition-all duration-300 ${
                filter === category.id
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
               className={`project-card glass-effect rounded-3xl overflow-hidden p-4 group ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <FolderGit2 className="text-blue-400 w-6 h-6" />
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
              <p className="text-gray-400 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="text-xs bg-gray-700 px-3 py-1 rounded-full text-blue-300">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center mt-4">
                <div className="flex gap-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-400 hover:underline"
                    >
                      <Eye className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-300 hover:underline"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
