import { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import profilePic from '../../assets/imagepic.jpeg';
import ResumeModal from '../ResumeModal';

const Hero = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <section className='min-h-screen flex items-center justify-center pt-20 px-6 cursor-pointer'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20'>

        <div className='w-full md:w-1/1 flex flex-col items-center md:items-start text-center md:text-left space-y-6'>
          <div className='space-y-2'>
            <p className="text-blue-400 font-medium tracking-wide text-lg animate-fade-in">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Rushabh <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Wagh</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300">
              MERN Stack Developer
            </h2>

          </div>

          <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
            I build exceptional digital experiences that are fast, accessible, and visually stunning. Passionate about creating software that solves real-world problems.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
            <a href="#projects" className="cursor-pointer px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105">
              View Projects
            </a>
            <button
              onClick={() => setShowResume(true)}
              className="cursor-pointer px-8 py-3 bg-transparent border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white/5"
            >
              Resume
            </button>
          </div>

          <div className='flex gap-6 mt-4'>
            <SocialLink href="https://github.com/wrexrus" icon={<Github size={24} />} />
            <SocialLink href="https://www.linkedin.com/in/rushabh-wagh-125/" icon={<Linkedin size={24} />} />
            <SocialLink href="mailto:rushabhwagh125@gmail.com" icon={<Mail size={24} />} />
          </div>
        </div>

        {/* Image Content */}
        <div className='w-full md:w-1/2 flex justify-center sticky top-20'>
          <div className='relative w-72 h-72 md:w-96 md:h-96 group'>
            <div className='absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500'></div>
            <img
              className="relative w-full h-full object-cover rounded-full border-4 border-white/10 shadow-2xl z-10"
              src={profilePic}
              alt="Rushabh Wagh"
            />
          </div>
        </div>

      </div>

      <ResumeModal isOpen={showResume} onClose={() => setShowResume(false)} />
    </section>
  )
}

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    className='p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 border border-white/5 hover:border-transparent'
  >
    {icon}
  </a>
)

export default Hero
