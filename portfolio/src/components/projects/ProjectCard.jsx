import React from 'react'
import { Github, ExternalLink } from 'lucide-react'

const ProjectCard = ({ title, description, image, tags, links }) => {
    return (
        <div className='group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-purple-500/30 hover:shadow-purple-500/20'>

            {/* Image Container */}
            <div className='relative h-48 w-full overflow-hidden'>
                <img
                    src={image}
                    alt={title}
                    className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4'>
                    {links.github && (
                        <a href={links.github} target="_blank" rel="noopener noreferrer" className='p-2 bg-white/10 rounded-full hover:bg-purple-600 text-white transition-colors backdrop-blur-md'>
                            <Github size={20} />
                        </a>
                    )}
                    {links.demo && (
                        <a href={links.demo} target="_blank" rel="noopener noreferrer" className='p-2 bg-white/10 rounded-full hover:bg-blue-600 text-white transition-colors backdrop-blur-md'>
                            <ExternalLink size={20} />
                        </a>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className='p-6'>
                <h3 className='text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors'>{title}</h3>
                <p className='text-gray-400 text-sm mb-4 line-clamp-3'>{description}</p>

                {/* Tags */}
                <div className='flex flex-wrap gap-2'>
                    {tags.map((tag, index) => (
                        <span key={index} className='text-xs font-medium px-2 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20'>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
