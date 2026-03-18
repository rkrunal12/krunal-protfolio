import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Database, Code2, Rocket, ArrowUpRight, Monitor } from 'lucide-react';

const ProjectCard = ({ title, category, description, icon: Icon, links, tags, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="glass-card group flex flex-col h-full border-white/5 hover:border-primary-500/30 overflow-hidden"
    >
        {/* Project Image Placeholder / Header */}
        <div className="relative h-48 overflow-hidden bg-white/5">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-purple-600/20 group-hover:scale-110 transition-transform duration-700"></div>
            <div className="absolute inset-0 flex items-center justify-center text-primary-400 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700">
                <Icon size={64} strokeWidth={1} />
            </div>

            {/* Category Badge */}
            <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-dark-bg/60 backdrop-blur-md rounded-full text-[10px] font-black tracking-widest text-primary-400 border border-white/5 uppercase">
                    {category}
                </span>
            </div>
        </div>

        <div className="p-8 flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-black text-white group-hover:text-primary-400 transition-colors uppercase tracking-tight">
                    {title}
                </h3>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                {description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                {tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-bold text-gray-500 border border-white/5 px-2 py-0.5 rounded-md uppercase tracking-wider">
                        {tag}
                    </span>
                ))}
            </div>

            {/* <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex gap-4">
                    {links.github && (
                        <a href={links.github} className="text-gray-400 hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                    )}
                    {links.live && (
                        <a href={links.live} className="text-gray-400 hover:text-white transition-colors">
                            <ExternalLink size={20} />
                        </a>
                    )}
                </div>
                <a href="#" className="flex items-center gap-1.5 text-xs font-black text-white hover:text-primary-400 transition-colors uppercase tracking-widest group/link">
                    Case Study <ArrowUpRight size={14} className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                </a>
            </div> */}
        </div>
    </motion.div>
);

const Projects = () => {
    const projects = [
        {
            title: "Feedback System",
            category: "Cross-Platform",
            description: "A sophisticated feedback engine engineered for scalability, supporting 10+ customizable input types and featuring an automated sentiment analysis pipeline for real-time customer insights.",
            icon: Monitor,
            tags: ["Flutter", "REST API"],
            links: { github: "#", live: "#" }
        },
        {
            title: "Expense Tracker",
            category: "Mobile",
            description: "A robust financial management suite delivering 100% offline reliability through Drift/SQLite, complemented by background synchronization to Firebase for seamless cross-device data persistence.",
            icon: Database,
            tags: ["Flutter", "Drift", "SQLite", "Firebase Auth"],
            links: { github: "#", live: "#" }
        },
        {
            title: "E-commerce Fashion App",
            category: "Mobile",
            description: "A scalable Android marketplace built on modular architecture principles, optimizing performance and user conversion through streamlined checkout flows and real-time inventory synchronization.",
            icon: Smartphone,
            tags: ["Android", "Java", "REST API", "Firebase"],
            links: { github: "#", live: "#" }
        },
        {
            title: "Refer & Earn",
            category: "Cross-Platform",
            description: "An automated referral growth engine enabling businesses to launch reward-based marketing campaigns, driving user acquisition and customer loyalty through a seamless digital ecosystem.",
            icon: Smartphone,
            tags: ["Flutter", "REST API"],
            links: { github: "#", live: "#" }
        },
        {
            title: "Foodchow POS Offline",
            category: "Cross-Platform",
            description: "A mission-critical Point of Sale (POS) solution optimized for high-volume restaurant operations, featuring high-speed offline order management and robust data reconciliation protocols.",
            icon: Smartphone,
            tags: ["Flutter", "Drift", "SQLite", "State Management"],
            links: { github: "#", live: "#" }
        }

    ];

    return (
        <section id="projects" className="py-32 px-6 relative">
            <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-[150px] -z-10 animate-pulse"></div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, scale: 1 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        Featured <span className="text-gradient">Creations</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="section-subtitle"
                    >
                        Turning complex problems into elegant digital solutions through code.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((proj, idx) => (
                        <ProjectCard key={idx} {...proj} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
