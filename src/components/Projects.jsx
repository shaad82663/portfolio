import React from 'react';
import { content } from '../data/content';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';

const Projects = () => {
    const { projects } = content;

    return (
        <section id="projects" className="py-24 bg-background relative">
            {/* Background Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <span className="text-secondary font-mono mb-2 block">03. Portfolio</span>
                        <h2 className="text-4xl font-bold">Featured Projects</h2>
                    </div>
                    <a href="#" className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors">
                        View all projects <ArrowRight size={16} />
                    </a>
                </div>

                {/* Bento Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative rounded-2xl overflow-hidden bg-card border border-white/5 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl ${index === 0 ? 'lg:col-span-2' : ''
                                }`}
                        >
                            {/* Image / Gradient Background */}
                            <div className="absolute inset-0">
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                                <img
                                    src={project.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            {/* Content */}
                            <div className="relative z-20 h-full flex flex-col justify-end p-8">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="flex gap-2 mb-4">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/10">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                                    <p className="text-gray-300 mb-6 line-clamp-2">{project.description}</p>

                                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <a href={project.link} className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"><Github size={20} /></a>
                                        <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"><ExternalLink size={20} /></a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <a href="#" className="inline-flex items-center gap-2 text-sm text-secondary hover:text-white transition-colors">
                        View all projects <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

const ArrowRight = ({ size }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
)

export default Projects;
