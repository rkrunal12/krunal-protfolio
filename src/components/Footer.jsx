import React from 'react';
import { Github, Linkedin, Mail, Phone, Heart, Globe, ArrowUpRight, Sparkles } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative pt-32 pb-12 overflow-hidden border-t border-white/5">
            {/* Background decoration */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-primary-900/10 to-transparent -z-10 opacity-30"></div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    <div className="col-span-1 lg:col-span-2">
                        {/* Brand Logo consistent with Navbar */}
                        <a href="#home" className="group relative flex items-center gap-3 mb-8">
                            <div className="relative w-12 h-12 flex items-center justify-center">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-purple-600 rounded-xl rotate-6 group-hover:rotate-12 transition-all duration-500 shadow-xl shadow-primary-600/20"></div>
                                <div className="absolute inset-0 bg-dark-bg/80 backdrop-blur-sm rounded-xl border border-white/10 transition-all duration-500"></div>
                                <span className="relative text-2xl font-black text-white tracking-tighter">KR</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-black tracking-tight text-white uppercase">Rathod</span>
                                <span className="text-[10px] font-bold tracking-[0.3em] text-primary-400 uppercase">Software Engineer</span>
                            </div>
                        </a>

                        <p className="text-gray-400 max-w-sm mb-10 leading-relaxed text-lg font-medium">
                            Architecting <span className="text-white">superior digital experiences</span> where performance meets high-end aesthetics.
                        </p>

                        <div className="flex gap-4">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 hover:bg-primary-500 rounded-2xl transition-all duration-500 text-gray-400 hover:text-white group border border-white/5 shadow-lg shadow-black/20">
                                <Github size={24} className="group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 hover:bg-primary-500 rounded-2xl transition-all duration-500 text-gray-400 hover:text-white group border border-white/5 shadow-lg shadow-black/20">
                                <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="mailto:contact@krunal.dev" className="p-4 bg-white/5 hover:bg-primary-500 rounded-2xl transition-all duration-500 text-gray-400 hover:text-white group border border-white/5 shadow-lg shadow-black/20">
                                <Mail size={24} className="group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-[10px]">Platform</h4>
                        <ul className="space-y-4">
                            {['About', 'Experience', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-primary-400 transition-colors font-bold flex items-center gap-2 group">
                                        <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-primary-500 transition-colors"></div>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-[10px]">Contact Detail</h4>
                        <ul className="space-y-6">
                            <li className="flex flex-col gap-1">
                                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Phone</span>
                                <span className="text-white font-black text-lg tracking-tight">+91 76002 21292</span>
                            </li>
                            <li className="flex flex-col gap-1">
                                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Locale</span>
                                <span className="text-white font-black text-lg tracking-tight">Gujarat, India</span>
                            </li>
                            <li>
                                <a href="#contact" className="mt-4 flex items-center justify-center p-4 bg-primary-600/10 border border-primary-500/20 rounded-2xl text-primary-400 font-black text-xs uppercase tracking-widest hover:bg-primary-500 hover:text-white transition-all duration-500 group">
                                    Let's Talk <ArrowUpRight size={16} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-6 text-[10px] font-black tracking-widest text-gray-500 uppercase">
                        <span>© {currentYear} Krunal Rathod</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-white/5"></div>
                        <span>All Rights Reserved</span>
                    </div>

                    <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-gray-500 uppercase">
                        Made with <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" /> using <span className="text-white">React & Tailwind</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
