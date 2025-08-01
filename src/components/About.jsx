import React from 'react'

const About = () => {
 const skills = [
  { name: 'React.js', icon: '⚛️', level: 80 },
  { name: 'Tailwind CSS', icon: '🎨', level: 80 },
  { name: 'JavaScript (ES6+)', icon: '🟨', level: 80 },
  { name: 'Node.js & Express', icon: '⚡', level: 70 },
  { name: 'MongoDB', icon: '🗄️', level: 75 },
  { name: 'DSA (Java)', icon: '🧠', level: 75 },
  { name: 'Git & GitHub', icon: '🔧', level: 80 }
]


  const stats = [
  { number: '6+', label: 'Personal Projects' },
  { number: '2', label: 'Internships Completed' },
  { number: '2', label: 'Hackathon Participated' },
  { number: '150+', label: 'DSA Problems Solved' },
  { number: '100%', label: 'Learning Commitment' }
]


  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">About Me</h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
  I’m a passionate full stack developer who loves building real-world apps that are not only functional, and  useful. From frontend UI to backend logic, I enjoy making things that people want to use.
</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="animate-slide-up">
            <div className="glass-effect rounded-3xl p-8">
              <h3 className="text-3xl font-bold mb-6">My Journey</h3>
             <p className="text-gray-300 leading-relaxed mb-6">
                I'm currently learning DSA and improving my problem-solving skills. Alongside that, I'm working on full stack projects to build real-world applications and strengthen my development skills.
            </p>

              <p className="text-gray-300 leading-relaxed mb-8">
                I’m not coding, I enjoy trying out new tools, improving my skills, or just helping others in the dev community.
            </p>

              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="skill-card glass-effect rounded-2xl p-6 text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <div className="font-semibold mb-3">{skill.name}</div>
                <div className="bg-gray-700 rounded-full h-2 mb-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-400">{skill.level}%</div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  )
}

export default About
