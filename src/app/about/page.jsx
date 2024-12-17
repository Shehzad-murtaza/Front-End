'use client';

import React from 'react';

function AboutMe() {
    return (
        <section className="min-h-screen bg-gradient-to-br from-black via-blue-950 to-black text-white py-12 pt-24 relative overflow-hidden">
            {/* Background Gradient for an Enhanced Look */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 z-0"></div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 lg:px-20">
                {/* Section Title */}
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center text-blue-400">
                    About Me
                </h1>
                <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Image Placeholder */}
                    <div className="w-40 h-40 md:w-60 md:h-60 rounded-full bg-gradient-to-tl from-blue-700 to-blue-500 shadow-lg flex items-center justify-center">
                        <span className="text-5xl font-semibold">S</span>
                    </div>

                    {/* About Me Content */}
                    <div className="text-neutral-300 leading-relaxed text-lg md:text-xl">
                        <p className="mb-4">
                            Hi, I'm <span className="text-blue-400 font-semibold">Shehzad</span>, a passionate{' '}
                            <span className="text-blue-400 font-semibold">MERN Stack Developer</span> from{' '}
                            <span className="text-blue-400 font-semibold">Pakistan</span>. At the age of{' '}
                            <span className="text-blue-400 font-semibold">19</span>, I specialize in crafting
                            dynamic and responsive web applications using{' '}
                            <span className="text-blue-400">MongoDB, Express.js, React,</span> and{' '}
                            <span className="text-blue-400">Node.js</span>.
                        </p>
                        <p className="mb-4">
                            I believe in writing clean, maintainable code and building projects that not only work
                            seamlessly but also look modern and user-friendly. I enjoy solving challenging
                            problems and constantly learning new technologies to improve my development skills.
                        </p>
                        <p>
                            Outside of coding, I stay updated with the latest tech trends and contribute to open
                            source projects whenever possible. I'm currently on a journey to explore{' '}
                            <span className="text-blue-400 font-semibold">AI integrations</span> and cloud
                            deployments.
                        </p>
                    </div>
                </div>

                {/* WhatsApp Contact Button */}
                <div className="text-center mt-10">
                    <a
                        href="https://wa.me/923247611208" // WhatsApp link with your number
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition duration-300 text-white font-medium shadow-lg"
                    >
                        Get In Touch
                    </a>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;