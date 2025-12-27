import React from 'react'
import Cards from './Cards'
import { Code2, Globe, Zap, Terminal } from 'lucide-react'

const About = () => {
  return (
    <div className='w-full py-20 bg-transparent text-white'>
      <div className='max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16'>
        {/* Text Section */}
        <div className='w-full md:w-1/2'>
          <h2 className='text-sm uppercase tracking-widest text-purple-500 font-semibold mb-2'>Introduction</h2>
          <h1 className='text-4xl md:text-5xl font-bold mb-6'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600'>
              About Me
            </span>
          </h1>
          <p className='text-gray-300 text-lg leading-relaxed mb-8'>
            I am a final year Btech undergraduate student at Vellore Institute of Technology. I am a passionate developer with a strong foundation in web development. Having a keen interest in creating innovative and user-friendly web applications and quite a quick learner and always eager to pick up new skills. I am also a team player and enjoy working in a collaborative environment. I am also a quick learner and always eager to pick up new skills. 
            <p className='mt-7'>Keeping hands on experience in open-source completed Hacktoberfest 2024 and 2025.</p>
          </p>
          <div className='flex gap-4'>
            <a href="#contact" className='px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25 cursor-pointer'>
              Contact Me
            </a>
          </div>
        </div>

        {/* Cards Section */}
        <div className='w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-5'>
          <Cards
            icon={Code2}
            heading="Clean Code"
            body="Writing maintainable, scalable code with best practises"
          />
          <Cards
            icon={Globe}
            heading="Modern Design"
            body="Creating beautiful, responsive, and user-friendly web interfaces."
          />
          <Cards
            icon={Zap}
            heading="Fast Performance"
            body="Optimizing applications for speed, efficiency and SEO."
          />
          <Cards
            icon={Terminal}
            heading="Problem Solver"
            body="Analyzing functional requirements and developing efficient solutions."
          />
        </div>
      </div>
    </div>
  )
}

export default About
