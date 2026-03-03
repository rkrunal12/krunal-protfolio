import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Server, Wrench, Layout, Database, Terminal, Code2, ShieldCheck } from 'lucide-react';

const SkillBadge = ({ name }) => (
    <motion.span
        whileHover={{ scale: 1.05, y: -2 }}
        className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-primary-500/10 hover:border-primary-500/30 transition-all duration-300 cursor-default"
    >
        {name}
    </motion.span>
);

const SkillCategory = ({ title, icon: Icon, skills, delay }) => (
    <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="glass-card p-8 group relative overflow-hidden"
    >
        <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 group-hover:scale-110 transform">
            <Icon size={120} />
        </div>

        <div className="flex items-center gap-4 mb-8 relative z-10">
            <div className="p-3.5 bg-primary-500/10 rounded-2xl text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all duration-500 shadow-lg shadow-primary-500/10">
                <Icon size={24} />
            </div>
            <h3 className="text-xl font-extrabold tracking-tight">{title}</h3>
        </div>

        <div className="flex flex-wrap gap-2.5 relative z-10">
            {skills.map((skill) => (
                <SkillBadge key={skill} name={skill} />
            ))}
        </div>
    </motion.div>
);

const Skills = () => {
    const categories = [
        {
            title: "Mobile Development",
            icon: Smartphone,
            skills: ["Flutter", "Android SDK", "Dart", "Provider", "Material Design 3"]
        },
        {
            title: "Database",
            icon: Database,
            skills: ["SQLite", "Drift", "Hive", "Relational Mapping"]
        },
        {
            title: "API & Tools",
            icon: Terminal,
            skills: ["REST APIs", "JSON", "Postman", "Git / GitHub", "Flutter DevTools"]
        },
        {
            title: "Architecture & Design",
            icon: Layout,
            skills: ["Clean Architecture", "Modular Design", "Responsive UI", "Figma", "Design Patterns"]
        }
    ];

    return (
        <section id="skills" className="py-32 px-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[120px] -z-10"></div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        Technical <span className="text-gradient">Arsenal</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="section-subtitle"
                    >
                        A comprehensive toolkit for building modern digital experiences across platforms.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat, idx) => (
                        <SkillCategory key={idx} {...cat} delay={idx * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
