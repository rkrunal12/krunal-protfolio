import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, ChevronRight } from 'lucide-react';

const ExperienceCard = ({ title, company, period, description, points, index }) => (
    <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="glass-card p-10 relative overflow-hidden group border-white/5"
    >
        {/* Decorative corner element */}
        <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.1] transition-opacity duration-500 scale-150 rotate-12">
            <Briefcase size={80} />
        </div>

        <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-6 relative z-10">
            <div className="flex gap-5">
                <div className="w-14 h-14 rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-400 shrink-0 group-hover:bg-primary-500 group-hover:text-white transition-all duration-500">
                    <Briefcase size={28} />
                </div>
                <div>
                    <h3 className="text-2xl font-black text-white tracking-tight mb-1">{title}</h3>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-500/10 rounded-full">
                        <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
                        <p className="text-primary-400 font-bold text-sm tracking-wide uppercase">{company}</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center text-sm font-bold text-gray-400 bg-white/5 px-5 py-2.5 rounded-xl border border-white/10 backdrop-blur-md self-start">
                <Calendar size={18} className="mr-2.5 text-primary-400" />
                {period}
            </div>
        </div>

        <p className="text-gray-400 mb-8 leading-relaxed text-lg font-medium">{description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 group/item">
                    <div className="mt-1 text-primary-500 group-hover/item:translate-x-1 transition-transform">
                        <CheckCircle2 size={18} />
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover/item:text-gray-200 transition-colors">{point}</p>
                </div>
            ))}
        </div>

        <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-between">
            <span className="text-xs font-black tracking-[0.2em] text-white/20 uppercase">Stage 0{index + 1}</span>
            <button className="flex items-center gap-2 text-primary-400 hover:text-white transition-colors font-bold text-xs uppercase tracking-widest group/btn">
                Role Details <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
        </div>
    </motion.div>
);

const Experience = () => {
    const experiences = [
        {
            title: "Flutter Intern",
            company: "Tenacious Techies",
            period: "August 2025 - February 2026",
            description: "Architected reactive apps with a focus on state management and backend integration.",
            points: [
                "Developed scalable mobile solutions using Dart SDK and Provider across 10+ screens.",
                "Engineered robust local persistence using Drift (SQL) and Hive with .NET backend integration.",
                "Translated 15+ high-fidelity mockups into responsive components and optimized app latency."
            ]
        },
        {
            title: "Android Developer Intern",
            company: "Stem Velly",
            period: "June 2024 - August 2024",
            description: "Built secure cloud-synced mobile ecosystems with robust error handling.",
            points: [
                "Implemented Firebase Authentication and real-time cloud-synced cart systems.",
                "Designed 12+ responsive UI screens and resolved critical logic errors for stability.",
                "Utilized Android profiling tools to ensure 100% stability for complex navigation features."
            ]
        }
    ];

    return (
        <section id="experience" className="py-32 px-6 relative overflow-hidden">
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px] -z-10"></div>

            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        Professional <span className="text-gradient">Trajectory</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="section-subtitle"
                    >
                        Mapping the evolution of my technical expertise through real-world impact.
                    </motion.p>
                </div>

                <div className="grid gap-10">
                    {experiences.map((exp, idx) => (
                        <ExperienceCard key={idx} {...exp} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
