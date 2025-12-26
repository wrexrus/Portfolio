import React from 'react'

const Cards = ({ heading, body, icon: Icon }) => {
  return (
    <div className='group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-purple-500/30 hover:scale-[1.02] transition-all duration-300 shadow-lg backdrop-blur-sm h-full'>
      {Icon && (
        <div className='w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors'>
          <Icon className='w-6 h-6 text-purple-400 group-hover:text-purple-300' />
        </div>
      )}
      <h2 className='text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors'>{heading}</h2>
      <p className='text-gray-400 text-sm leading-relaxed'>{body}</p>
    </div>
  )
}

export default Cards
