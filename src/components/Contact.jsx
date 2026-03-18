import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, User, AtSign } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;

        // Construct Gmail URL with prefilled fields
        const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
        const body = encodeURIComponent(message);

        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=krunalrathod278@gmail.com&su=${subject}&body=${body}`;

        // Open in a new tab
        window.open(gmailUrl, '_blank');
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-32 px-6 relative overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-900/10 rounded-full blur-[160px] -z-10 animate-pulse"></div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        Let's <span className="text-gradient">Connect</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="section-subtitle"
                    >
                        Have a project in mind or just want to say hi? I'm always open to discussing new opportunities.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="glass-card p-10 space-y-10 border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent">
                            <h3 className="text-3xl font-black text-white uppercase tracking-tight">Contact info</h3>

                            <div className="space-y-8">
                                <div className="flex items-center gap-6 group">
                                    <div className="w-16 h-16 rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all duration-500 shadow-lg shadow-primary-500/10">
                                        <Mail size={28} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase text-gray-500 tracking-[0.2em] mb-1">Email Me</p>
                                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=krunalrathod278@gmail.com" target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">krunalrathod278@gmail.com</a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 group">
                                    <div className="w-16 h-16 rounded-2xl bg-accent-500/10 flex items-center justify-center text-accent-400 group-hover:bg-accent-500 group-hover:text-white transition-all duration-500 shadow-lg shadow-accent-500/10">
                                        <Phone size={28} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase text-gray-500 tracking-[0.2em] mb-1">Call Me</p>
                                        <p className="text-xl font-bold text-white group-hover:text-accent-400 transition-colors">+91 76002 21292</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 group">
                                    <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500 shadow-lg shadow-indigo-500/10">
                                        <MapPin size={28} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase text-gray-500 tracking-[0.2em] mb-1">Location</p>
                                        <p className="text-xl font-bold text-white transition-colors">Surat, Gujarat, India</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-white/5">
                                <p className="text-gray-400 text-sm leading-relaxed font-medium italic">
                                    "I typically respond within 24 hours. Looking forward to hearing from you!"
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="glass-card p-10 space-y-6 border-white/5 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 text-primary-500/5 group-hover:opacity-10 transition-opacity">
                                <MessageSquare size={160} strokeWidth={1} />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest flex items-center gap-2">
                                        <User size={12} /> Your Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Krunal Rathod"
                                        className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary-500/50 transition-all duration-300 placeholder:text-gray-600"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest flex items-center gap-2">
                                        <AtSign size={12} /> Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="hello@example.com"
                                        className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary-500/50 transition-all duration-300 placeholder:text-gray-600"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2 relative z-10">
                                <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest flex items-center gap-2">
                                    <MessageSquare size={12} /> Your Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    placeholder="Tell me about your project..."
                                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary-500/50 transition-all duration-300 placeholder:text-gray-600 resize-none"
                                ></textarea>
                            </div>

                            <button type="submit" className="btn-primary w-full relative z-10 flex items-center justify-center gap-3">
                                <span className="uppercase tracking-[0.2em] text-xs font-black">Send Message</span>
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
