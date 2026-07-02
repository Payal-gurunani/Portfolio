import { useState } from 'react'
import { Github, Eye, FolderGit2 } from 'lucide-react'
import { desc, g, title } from 'framer-motion/client'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const projects = [
    {
      id: 1,
      title: "ViralForge AI",
      description: "A full-stack AI content generation platform built with Next.js and FastAPI, leveraging DSPy and LLMs to automate content creation and optimize prompts for high-quality, context-aware outputs. Features JWT-based authentication, scalable API architecture, and real-time user interaction.",
      technologies: ['Next.js', 'React', 'FastAPI', 'DSPy', 'MongoDB', 'JWT', 'Tailwind CSS', 'Axios'],
      image: 'gradient-to-br from-gray-600 to-gray-800',
      category: ['fullstack', 'AI'],
      demoUrl: "https://viral-forge-ai-rose.vercel.app/",
      githubUrl: 'https://github.com/Payal-gurunani/ViralForge_AI',
      featured: true
    },
    {
      id: 2,
      title: "NeoBot",
      description: "An AI chatbot built with React for the frontend  utilizing OpenAI's GPT-3.5-turbo model to provide intelligent responses.",
      technologies: ['React', 'OpenRouter API'],
      image: 'gradient-to-br from-gray-600 to-gray-800',
      category: ['frontend', 'AI'],
      demoUrl: "https://neo-bot-ten.vercel.app/",
      githubUrl: 'https://github.com/Payal-gurunani/NeoBot',
      featured: false

    },
    {
      id: 3,
      title: ' Study Partner',
      description: 'An AI-powered platform that generates quizzes, flashcards, and tracks progress from notes or PDFs.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Cloudinary', 'OpenAI API'],
      category: ['fullstack', 'AI'],
      image: 'gradient-to-br from-indigo-500 to-purple-600',
      demoUrl: 'https://study-partner-psi.vercel.app/',
      githubUrl: 'https://github.com/Payal-gurunani/Study-Partner',
      featured: true
    },
    {
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
      title: 'Contact Manager API',
      description: 'A backend-only project built to learn RESTful APIs, including CRUD operations, auth, and validation.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT Auth'],
      category: 'backend',
      image: 'gradient-to-br from-gray-600 to-gray-800',
      githubUrl: 'https://github.com/Payal-gurunani/contact-manager/tree/main/backContact',
      featured: false
    },
    
  ]
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'AI', name: 'AI' },

  ]

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project =>
      Array.isArray(project.category)
        ? project.category.includes(filter)
        : project.category === filter
    );

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
              className={`px-5 py-2 rounded-full font-medium border transition-all duration-300 ${filter === category.id
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
                      Live
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
        {/* More Projects */}
<div className="mt-16">
  <div className="rounded-3xl border border-gray-700 bg-gray-800/40 p-8 text-center">
    <Github className="w-14 h-14 mx-auto text-blue-400 mb-4" />

    <h3 className="text-2xl font-bold mb-3">
      Explore More Projects
    </h3>

    <p className="text-gray-400 max-w-2xl mx-auto mb-6">
      These are some of my featured projects. You can find many more
      React, MERN Stack, AI, backend, and practice projects on my
      GitHub profile.
    </p>

    <a
      href="https://github.com/Payal-gurunani?tab=repositories"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
    >
      <Github className="w-5 h-5" />
      View All GitHub Repositories
    </a>
  </div>
</div>
      </div>
    </section>
  )
}

export default Projects
