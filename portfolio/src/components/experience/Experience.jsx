import React, { useState } from 'react'
import { GraduationCap, Briefcase, User, Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react'

const TimelineItem = ({ year, title, subtitle, description, isLeft }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='relative pl-8 sm:pl-0 py-2 group'>
            {/* Timeline Line (Mobile: Left, Desktop: Center) - We will use a simpler 2-column approach as per request */}

            <div
                onClick={() => setIsOpen(!isOpen)}
                className={`
           relative bg-white/5 border border-white/10 rounded-xl p-6 cursor-pointer 
           hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300
           shadow-lg backdrop-blur-sm
           ${isOpen ? 'border-blue-500/50 bg-white/10' : ''}
        `}
            >
                <div className='flex justify-between items-start gap-4'>
                    <div className='flex-1'>
                        <div className='flex items-center gap-3 mb-2 text-blue-400 text-sm font-medium'>
                            <Calendar size={14} />
                            <span>{year}</span>
                        </div>
                        <h3 className='text-xl font-bold text-white group-hover:text-blue-400 transition-colors'>{title}</h3>
                        <p className='text-gray-400 text-base font-medium mt-1'>{subtitle}</p>
                    </div>
                    <div className={`text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-400' : ''}`}>
                        <ChevronDown size={20} />
                    </div>
                </div>

                <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className='overflow-hidden'>
                        <div className='h-[1px] w-full bg-white/10 mb-4'></div>
                        <p className='text-gray-400 leading-relaxed text-sm'>
                            {description}
                        </p>
                    </div>
                </div>
            </div>

            {/* Timeline Dot */}
            <div className='absolute left-[-9px] top-8 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#0a0a0a] shadow-[0_0_10px_rgba(59,130,246,0.5)] z-10 hidden sm:block'></div>
        </div>
    )
}

const Experience = () => {
    const education = [
        {
            year: "2022 - Present",
            title: "Bachelor of Technology",
            subtitle: "Vellore Institute of Technology",
            description: "Specializing in Computer Science and Engineering. Focusing on Data Structures, Algorithms, and Web Technologies. Active member of technical clubs and open source contributor."
        },
        {
            year: "2019 - 2021",
            title: "Higher Secondary Education",
            subtitle: "Army Public School Dighi",
            description: "Completed with distinction in Physics, Chemistry, and Mathematics. Organized school-level coding competitions."
        }
    ]

    const experience = [
        {
            year: "Jan 2025 - Mar 2025",
            title: "Frontend Developer Intern",
            subtitle: "Elite Tech Intern",
            description: "Developing scalable web applications using the MERN stack. Collaborating with cross-functional teams to deliver high-quality features."
        },
        {
            year: "2024 - 2025",
            title: "Open Source Contributor",
            subtitle: "Hacktoberfest & GSSOC",
            description: "Actively contributed to various open-source projects. Fixed bugs, improved documentation, and implemented new features for community-driven tools."
        }
    ]

    return (
        <div className='w-full py-20 text-white'>
            <div className='max-w-7xl mx-auto px-6'>

                {/* Section Header */}
                <div className='flex flex-col items-center mb-16 text-center'>
                    <h2 className='text-sm uppercase tracking-widest text-blue-500 font-semibold mb-2'>My Journey</h2>
                    <h1 className='text-4xl md:text-5xl font-bold mb-4'>
                        <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600'>
                            Experience & Education
                        </span>
                    </h1>
                    <div className='w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full'></div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20'>

                    {/* Education Column */}
                    <div>
                        <div className='flex items-center gap-3 mb-8'>
                            <div className='p-3 bg-blue-500/10 rounded-lg text-blue-400'>
                                <GraduationCap size={24} />
                            </div>
                            <h2 className='text-2xl font-bold text-white'>Education</h2>
                        </div>
                        <div className='space-y-8 pl-2 border-l-2 border-white/5'>
                            {education.map((item, index) => (
                                <TimelineItem key={index} {...item} />
                            ))}
                        </div>
                    </div>

                    {/* Experience Column */}
                    <div>
                        <div className='flex items-center gap-3 mb-8'>
                            <div className='p-3 bg-purple-500/10 rounded-lg text-purple-400'>
                                <Briefcase size={24} />
                            </div>
                            <h2 className='text-2xl font-bold text-white'>Experience</h2>
                        </div>
                        <div className='space-y-8 pl-2 border-l-2 border-white/5'>
                            {experience.map((item, index) => (
                                <TimelineItem key={index} {...item} />
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Experience
