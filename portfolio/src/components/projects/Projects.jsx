import React from 'react'
import ProjectCard from './ProjectCard'
import projectImg from '../../assets/opoy7.jpg' 

const Projects = () => {
    const projects = [
        {
            title: "Time Complexity Analyzer",
            description: "A Web App which helps beginners to understand time complexity of algorithms. It helps u learn and understand time complexity of algorithms by helping u to practice on different topics and helps u to analyze time complexity of code and algorithms. ",
            image: projectImg,
            tags: ["React", "Node.js", "MongoDB", "Tailwind"],
            links: {
                github: "https://github.com/wrexrus/tscAnalyzer.git",
                demo: "https://tscanalyzerrw.vercel.app/"
            }
        },
        {
            title: "Blood Bank Locator",
            description: "Service that helps u instantly locate and find nearby blood banks in a city, so that no user needs to manually search and waste their time.The search is based on city which filters out banks in seconds",
            image: projectImg,
            tags: ["Python", "Flask", "Pandas"],
            links: {
                github: "https://github.com/wrexrus/locate-blood-banks.git",
                demo: "https://locate-blood-banks-1.onrender.com/"
            }
        },
        {
            title: "Diabetes Prediction Model",
            description: "Developed a ML pipeline which helps a user based on few fields that he/she is having diabetes or not",
            image: projectImg,
            tags: ["ML", "KNN", "XGBoost", "SVM"],
            links: {
                github: "https://github.com/wrexrus/diabetes-model.git",
                demo: "#"
            }
        }
    ]

    return (
        <div className='w-full py-20 bg-transparent text-white'>
            <div className='max-w-7xl mx-auto px-6'>

                {/* Section Header */}
                <div className='flex flex-col items-center mb-16 text-center'>
                    <h2 className='text-sm uppercase tracking-widest text-blue-500 font-semibold mb-2'>My Work</h2>
                    <h1 className='text-4xl md:text-5xl font-bold mb-4'>
                        <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600'>
                            Featured Projects
                        </span>
                    </h1>
                    <div className='w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full'></div>
                </div>

                {/* Projects Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>

                {/* View All Button */}
                <div className='mt-16 flex justify-center'>
                    <a href="https://github.com/wrexrus?tab=repositories" className='px-8 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white font-medium transition-all duration-300 hover:scale-105 backdrop-blur-sm'>
                        View All Projects
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Projects
