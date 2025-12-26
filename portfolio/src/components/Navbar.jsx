import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
        {/* Logo */}
        <a href="#" className='ml-20 text-3xl font-bold tracking-tighter bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300'>
          RW
        </a>

        <div className='hidden md:flex gap-8 text-base font-medium'>
            {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className='relative text-gray-300 hover:text-white transition-colors duration-300 group'
              >
                {item}
                <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full'></span>
              </a>
            ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
