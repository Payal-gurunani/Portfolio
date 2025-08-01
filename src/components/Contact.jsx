import { Mail, Github, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'gurunanipayal@gmail.com',
      desc: 'Feel free to reach out',
      color: 'bg-blue-600',
      type: 'email'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      url: 'https://github.com/Payal-gurunani',
      name: 'GitHub'
    },
    {
      icon: Linkedin,
      url: 'https://linkedin.com/in/payal-gurunani-019103264',
      name: 'LinkedIn'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <section id="contact" className="min-h-screen px-4 py-16 flex items-center">
        <div className="max-w-4xl mx-auto w-full">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-4">Let’s Connect</h2>
            <p className="text-gray-400">
              I'd love to hear from you — whether it’s a project, a collaboration, or just a hello!
            </p>
          </div>

          {/* Contact Info */}
          <div className="mb-12 space-y-6">
            {contactInfo.map((info, i) => (
              <div key={i} className="flex items-start space-x-4">
                <div className={`w-12 h-12 ${info.color} rounded-full flex items-center justify-center`}>
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">{info.title}</h4>

                  {info.type === 'email' ? (
                    <a
                      href={`mailto:${info.content}`}
                      className="text-blue-400 hover:underline block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-blue-400">{info.content}</p>
                  )}

                  <p className="text-sm text-gray-400">{info.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 justify-center">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full glass-effect hover:bg-white/10 transition"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5 text-gray-400 hover:text-blue-400 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Contact
