import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#home' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-8'}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Brand Logo */}
                <a href="#home" className="group relative flex items-center gap-2">
                    <div className="relative w-10 h-10 flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-purple-600 rounded-xl rotate-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg shadow-primary-600/20"></div>
                        <div className="absolute inset-0 bg-dark-bg/80 backdrop-blur-sm rounded-xl border border-white/10 group-hover:border-white/20 transition-all duration-500"></div>
                        <span className="relative text-xl font-black text-white tracking-tighter">KR</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-black tracking-widest text-white group-hover:text-primary-400 transition-colors uppercase">Rathod</span>
                        <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-primary-500 to-purple-500 transition-all duration-500"></div>
                    </div>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-10">
                    <div className="flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative text-sm font-semibold text-gray-400 hover:text-white transition-colors group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center space-x-5 border-l border-white/10 pl-8">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                            <Github size={20} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=krunalrathod278@gmail.com" target="_blank" rel="noopener noreferrer" className="ml-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-bold tracking-widest uppercase transition-all">
                            Let's Talk
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-4 right-4 mt-4 p-8 glass-card border border-white/10 shadow-2xl animate-in slide-in-from-top-4 duration-300">
                    <div className="flex flex-col space-y-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-xl font-bold text-gray-300 hover:text-primary-400 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                            <div className="flex gap-4">
                                <a href="https://github.com" className="p-2 bg-white/5 rounded-lg text-gray-400"><Github size={20} /></a>
                                <a href="https://linkedin.com" className="p-2 bg-white/5 rounded-lg text-gray-400"><Linkedin size={20} /></a>
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=krunalrathod278@gmail.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-lg text-gray-400"><Mail size={20} /></a>
                            </div>
                            <Sparkles className="text-primary-500 animate-pulse" />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
