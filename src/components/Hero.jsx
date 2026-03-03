import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowRight, MousePointer2, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Background Blobs with Morphing */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary-600/20 rounded-full blur-[120px] animate-morph"></div>
            <div className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] bg-purple-600/20 rounded-full blur-[140px] animate-morph" style={{ animationDelay: '-4s' }}></div>

            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium tracking-wider uppercase text-primary-400 bg-primary-400/10 rounded-2xl border border-primary-400/20 backdrop-blur-md">
                        <Sparkles size={16} />
                        Available for new opportunities
                    </div>

                    <h1 className="text-5xl md:text-7xl xl:text-8xl font-black mb-8 leading-[1.1] tracking-tight text-white">
                        Krunal <br />
                        <span className="text-gradient">Rathod</span>
                    </h1>

                    <p className="max-w-xl text-lg md:text-2xl text-gray-400 mb-12 leading-relaxed">
                        <span className="text-white font-semibold">Flutter Developer</span> with 6 months of experience architecting reactive apps.
                        Specialized in <span className="text-white font-semibold">State Management</span>, <span className="text-white font-semibold">REST APIs</span>, and
                        high-performance <span className="text-white font-semibold">Mobile Solutions</span>.
                    </p>

                    <div className="flex flex-wrap items-center gap-6">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-primary group">
                            <span className="flex items-center gap-3">
                                View My GitHub
                                <Github size={22} className="group-hover:rotate-12 transition-transform" />
                            </span>
                        </a>
                        <a href="#projects" className="btn-secondary group">
                            <span className="flex items-center gap-3">
                                Explore Projects
                                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>
                    </div>
                </motion.div>

                {/* Interactive Visual Element */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative hidden lg:block"
                >
                    <div className="relative w-[400px] h-[400px] mx-auto">
                        {/* Main Glass Shape */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-[3rem] backdrop-blur-2xl border border-white/10 animate-morph shadow-2xl overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 to-transparent"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/10 group-hover:text-white/20 transition-colors duration-700">
                                <MousePointer2 size={120} strokeWidth={1} />
                            </div>
                        </div>

                        {/* Floating Cards */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -right-10 glass-card p-6 border-primary-500/30"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white">
                                    <Sparkles size={20} />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-400">Skills</div>
                                    <div className="text-sm font-bold">Flutter Expert</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-10 -left-10 glass-card p-6 border-purple-500/30"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white">
                                    <Github size={20} />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-400">Projects</div>
                                    <div className="text-sm font-bold">12+ Completed</div>
                                </div>
                            </div>
                        </motion.div> */}
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-2"
                >
                    <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
                        <div className="w-1.5 h-2.5 bg-primary-400 rounded-full"></div>
                    </div>
                    <span className="text-[10px] font-bold tracking-widest text-white/30 uppercase">Scroll</span>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
