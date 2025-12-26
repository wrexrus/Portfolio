import React from 'react'
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react'

const Contact = () => {
    return (
        <div className='w-full py-16 text-white'>
            <div className='max-w-6xl mx-auto px-6'>

                {/* Section Header */}
                <div className='flex flex-col items-center mb-10 text-center'>
                    <h2 className='text-sm uppercase tracking-widest text-blue-500 font-semibold mb-2'>Get In Touch</h2>
                    <h1 className='text-3xl md:text-4xl font-bold mb-4'>
                        <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600'>
                            Contact Me
                        </span>
                    </h1>
                    <p className='text-gray-400 max-w-xl text-base'>
                        Have a project in mind or want to collaborate? I'd love to hear from you.
                    </p>
                    <div className='w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-4'></div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>

                    {/* Left Column: Contact Info */}
                    <div className='space-y-6'>
                        <div>
                            <h2 className='text-2xl font-bold mb-2'>Let's Connect</h2>
                            <p className='text-gray-400 leading-relaxed text-sm'>
                                I'm currently open to new opportunities and interesting projects. Whether you have a question or just want to say hi, I'll do my best to get back to you!
                            </p>
                        </div>

                        <div className='space-y-4'>
                            <ContactInfoCard
                                icon={Mail}
                                label="Email"
                                value="hello@johndoe.dev"
                                link="mailto:hello@johndoe.dev"
                            />
                            <ContactInfoCard
                                icon={MapPin}
                                label="Location"
                                value="San Francisco, CA"
                            />
                            <ContactInfoCard
                                icon={Phone}
                                label="Phone"
                                value="+1 (555) 123-4567"
                                link="tel:+15551234567"
                            />
                        </div>

                        {/* Social Links */}
                        <div className='flex gap-4 pt-2'>
                            <SocialButton icon={Github} href="#" />
                            <SocialButton icon={Linkedin} href="#" />
                            <SocialButton icon={Twitter} href="#" />
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className='bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm shadow-xl'>
                        <form className='space-y-4'>
                            <div>
                                <label htmlFor="name" className='block text-sm font-medium text-gray-400 mb-1'>Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="John Doe"
                                    className='w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors text-white placeholder-gray-500 text-sm'
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className='block text-sm font-medium text-gray-400 mb-1'>Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="john@example.com"
                                    className='w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors text-white placeholder-gray-500 text-sm'
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className='block text-sm font-medium text-gray-400 mb-1'>Your Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    placeholder="Tell me about your project..."
                                    className='w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors text-white placeholder-gray-500 resize-none text-sm'
                                ></textarea>
                            </div>

                            <button className='w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-bold text-base text-white hover:opacity-90 transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 group'>
                                Send Message
                                <Send className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

const ContactInfoCard = ({ icon: Icon, label, value, link }) => {
    return (
        <a
            href={link || '#'}
            className={`flex items-center gap-4 p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 group ${!link ? 'pointer-events-none' : ''}`}
        >
            <div className='p-2 bg-blue-500/10 text-blue-400 rounded-lg group-hover:bg-blue-500/20 transition-colors'>
                <Icon size={20} />
            </div>
            <div>
                <h3 className='text-xs text-gray-400 font-medium'>{label}</h3>
                <p className='text-sm font-semibold text-white group-hover:text-blue-400 transition-colors'>{value}</p>
            </div>
        </a>
    )
}

const SocialButton = ({ icon: Icon, href }) => {
    return (
        <a
            href={href}
            className='p-3 bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-blue-500 hover:border-transparent hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300'
        >
            <Icon size={20} />
        </a>
    )
}

export default Contact
