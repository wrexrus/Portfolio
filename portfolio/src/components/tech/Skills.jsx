import React from 'react'
import { Code2, Database, Terminal, Wrench, Layout, Server, Plug, RefreshCw } from 'lucide-react'

// Helper to get generic or specific icons
const getSkillIcon = (name) => {
    const devIconMap = {
        'React': 'react/react-original.svg',
        'TypeScript': 'typescript/typescript-original.svg',
        'Next.js': 'nextjs/nextjs-original.svg',
        'Tailwind CSS': 'tailwindcss/tailwindcss-original.svg',
        'JavaScript': 'javascript/javascript-original.svg',
        'HTML/CSS': 'html5/html5-original.svg',
        'Node.js': 'nodejs/nodejs-original.svg',
        'Express.js': 'express/express-original.svg',
        'Python': 'python/python-original.svg',
        'GraphQL': 'graphql/graphql-plain.svg',
        'MongoDB': 'mongodb/mongodb-original.svg',
        'PostgreSQL': 'postgresql/postgresql-original.svg',
        'MySQL': 'mysql/mysql-original.svg',
        'Redis': 'redis/redis-original.svg',
        'Firebase': 'firebase/firebase-plain.svg',
        'Prisma': 'prisma/prisma-original.svg',
        'Git': 'git/git-original.svg',
        'Docker': 'docker/docker-original.svg',
        'AWS': 'amazonwebservices/amazonwebservices-original-wordmark.svg',
        'Vercel': 'vercel/vercel-original.svg',
        'Linux': 'linux/linux-original.svg',
    }

    const iconPath = devIconMap[name]

    if (iconPath) {
        return {
            type: 'image',
            src: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconPath}`
        }
    }

    // Fallback Lucide icons
    const lucideMap = {
        'REST APIs': Server,
        'WebSockets': Plug,
        'CI/CD': RefreshCw,
    }

    return {
        type: 'component',
        src: lucideMap[name] || Layout // Default icon
    }
}

const SkillPill = ({ skill }) => {
    const { type, src: IconSrc } = getSkillIcon(skill)

    return (
        <div className='group relative flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-blue-500/50 hover:scale-105 transition-all duration-300 cursor-default shadow-sm hover:shadow-blue-500/20'>
            <div className='w-0 overflow-hidden group-hover:w-6 transition-[width] duration-300 ease-out flex-shrink-0'>
                {type === 'image' ? (
                    <img src={IconSrc} alt={skill} className='w-5 h-5 object-contain' />
                ) : (
                    <IconSrc className='w-5 h-5 text-blue-400' />
                )}
            </div>
            <span className='text-sm font-medium text-gray-300 group-hover:text-white whitespace-nowrap transition-colors'>{skill}</span>
        </div>
    )
}

const SkillCategory = ({ title, icon: Icon, skills }) => {
    return (
        <div className='bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 shadow-lg backdrop-blur-sm h-full group'>
            <div className='flex items-center gap-4 mb-8'>
                <div className='p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-colors shadow-inner'>
                    <Icon className='w-6 h-6 text-blue-400 group-hover:text-purple-400 transition-colors' />
                </div>
                <h3 className='text-xl font-bold text-white tracking-wide'>{title}</h3>
            </div>

            <div className='flex flex-wrap gap-3'>
                {skills.map((skill, index) => (
                    <SkillPill key={index} skill={skill} />
                ))}
            </div>
        </div>
    )
}

const Skills = () => {
    const categories = [
        {
            title: "Frontend",
            icon: Code2,
            skills: ["React", "Tailwind CSS", "JavaScript", "HTML/CSS"]
        },
        {
            title: "Backend",
            icon: Terminal,
            skills: ["Node.js", "Express.js", "REST APIs",]
        },
        {
            title: "Databases",
            icon: Database,
            skills: ["MongoDB", "MySQL"]
        },
        {
            title: "Tools & DevOps",
            icon: Wrench,
            skills: ["Git", "Vercel","Render","MongoDB Atlas"]
        }
    ]

    return (
        <div className='w-full py-20 text-white'>
            <div className='max-w-7xl mx-auto px-6'>

                {/* Section Header */}
                <div className='flex flex-col items-center mb-16 text-center'>
                    <h2 className='text-sm uppercase tracking-widest text-blue-500 font-semibold mb-2'>What I Use</h2>
                    <h1 className='text-4xl md:text-5xl font-bold mb-4'>
                        <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600'>
                            Skills & Technologies
                        </span>
                    </h1>
                    <div className='w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full'></div>
                </div>

                {/* Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {categories.map((category, index) => (
                        <SkillCategory key={index} {...category} />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Skills
