import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Star, Binary } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="py-32 px-6 relative overflow-hidden">
            <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[120px] -z-10 animate-pulse"></div>

            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        Academic <span className="text-gradient">Foundation</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="section-subtitle"
                    >
                        The theoretical groundwork that fuels my practical engineering.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass-card p-1 md:p-1.5 bg-gradient-to-br from-primary-500/20 via-transparent to-purple-500/20"
                >
                    <div className="bg-dark-bg/90 backdrop-blur-2xl rounded-[1.9rem] p-8 md:p-12 relative overflow-hidden">
                        {/* Interactive Background Element */}
                        <div className="absolute -top-10 -right-10 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-700 rotate-12">
                            <Binary size={300} strokeWidth={1} />
                        </div>

                        <div className="flex flex-col lg:flex-row gap-12 items-start relative z-10">
                            <div className="relative group">
                                <div className="p-8 bg-gradient-to-tr from-primary-600 to-purple-600 rounded-[2.5rem] text-white shadow-2xl shadow-primary-600/20 transform group-hover:rotate-6 transition-transform duration-500">
                                    <GraduationCap size={56} strokeWidth={1.5} />
                                </div>
                                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                                    <Star size={20} className="text-yellow-400 fill-yellow-400" />
                                </div>
                            </div>

                            <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-4 mb-6">
                                    <span className="px-4 py-1.5 bg-primary-500/10 border border-primary-500/20 rounded-full text-[10px] font-black tracking-widest text-primary-400 uppercase">
                                        Diploma Program
                                    </span>
                                    <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-black tracking-widest text-gray-400 uppercase">
                                        2022 - 2025
                                    </span>
                                </div>

                                <h3 className="text-4xl md:text-5xl font-black mb-4 text-white tracking-tight leading-tight">
                                    Diploma In Information Technology
                                </h3>
                                <p className="text-xl md:text-2xl text-primary-400 mb-8 font-extrabold tracking-tight">
                                    Dr. S. & S. S. Ghandhi College of Engineering and Technology
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="glass-card p-8 bg-white/[0.02]">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="p-2.5 bg-primary-500/10 rounded-xl text-primary-400">
                                                <Award size={24} />
                                            </div>
                                            <span className="text-sm font-black uppercase tracking-[0.15em] text-white/40">Core Fundamentals</span>
                                        </div>
                                        <p className="text-gray-400 text-sm leading-relaxed font-bold">
                                            Proficient in <span className="text-white">Data Structures & Algorithms (DSA)</span>,
                                            <span className="text-white">Object-Oriented Programming (OOP)</span>, and
                                            <span className="text-white">Software Engineering Principles</span>.
                                        </p>
                                    </div>

                                    <div className="glass-card p-8 bg-white/[0.02]">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="p-2.5 bg-purple-500/10 rounded-xl text-purple-400">
                                                <BookOpen size={24} />
                                            </div>
                                            <span className="text-sm font-black uppercase tracking-[0.15em] text-white/40">Systems & Security</span>
                                        </div>
                                        <p className="text-gray-400 text-sm leading-relaxed font-bold">
                                            Skilled in <span className="text-white">Database Management (SQL)</span>,
                                            <span className="text-white">Computer Networks</span>, and
                                            <span className="text-white">Network Security</span>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
