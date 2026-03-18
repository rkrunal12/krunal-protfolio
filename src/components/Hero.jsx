import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowRight, MousePointer2, Sparkles, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Background Blobs with Morphing */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary-600/20 rounded-full blur-[120px] animate-morph"></div>
            <div className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] bg-purple-600/20 rounded-full blur-[140px] animate-morph" style={{ animationDelay: '-4s' }}></div>

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium tracking-wider uppercase text-primary-400 bg-primary-400/10 rounded-2xl border border-primary-400/20 backdrop-blur-md">
                        <Sparkles size={16} />
                        Available for new opportunities
                    </div>

                    <h1 className="text-5xl md:text-7xl xl:text-8xl font-black mb-8 leading-[1.1] tracking-tight text-white">
                        Krunal <span className="text-gradient">Rathod</span>
                    </h1>

                    <p className="max-w-2xl text-lg md:text-2xl text-gray-400 mb-12 leading-relaxed">
                        A dedicated <span className="text-white font-semibold">Flutter Developer</span> specializing in engineering high-performance,
                        reactive mobile applications. Expertise in complex <span className="text-white font-semibold">State Management</span>,
                        <span className="text-white font-semibold">REST API integration</span>, and delivering seamless digital experiences.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <a href="krunal-resume.pdf" download className="btn-primary group">
                            <span className="flex items-center gap-3">
                                Download Resume
                                <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
                            </span>
                        </a>
                        <a href="https://github.com/rkrunal12" target="_blank" rel="noopener noreferrer" className="btn-secondary group">
                            <span className="flex items-center gap-3">
                                GitHub
                                <Github size={20} className="group-hover:rotate-12 transition-transform" />
                            </span>
                        </a>
                        <a href="#projects" className="btn-secondary group border-white/5 hover:border-primary-500/30">
                            <span className="flex items-center gap-3">
                                Projects
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>
                    </div>
                </motion.div>
            </div>

        </section>
    );
};

export default Hero;
