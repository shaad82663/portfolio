import React, { useState } from 'react';
import { content } from '../data/content';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder, Info } from 'lucide-react';

const Projects = () => {
    const { projects } = content;
    const [flippedId, setFlippedId] = useState(null);

    const handleFlip = (id) => {
        setFlippedId(flippedId === id ? null : id);
    };

    return (
        <section id="projects" className="py-24 bg-background relative">
            {/* Background Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <span className="text-secondary font-mono mb-2 block">03. Portfolio</span>
                        <h2 className="text-4xl font-bold text-foreground">Featured Projects</h2>
                    </div>
                    <a href="#" className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                        View all projects <ArrowRight size={16} />
                    </a>
                </div>

                {/* Bento Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[500px]">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`group perspective-1000 ${index === 0 ? 'lg:col-span-2' : ''}`}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                animate={{ rotateY: flippedId === project.id ? 180 : 0 }}
                                className="relative w-full h-full text-left transform-style-3d"
                            >
                                {/* Front Face */}
                                <div
                                    className={`absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden bg-card border border-border shadow-xl hover:border-primary/50 transition-colors cursor-pointer ${flippedId === project.id ? 'pointer-events-none -z-10' : 'z-10'}`}
                                    onClick={() => handleFlip(project.id)}
                                >
                                    <div className="absolute inset-0">
                                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />
                                        <img
                                            src={project.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform scale-100 transition-transform duration-700"
                                        />
                                    </div>

                                    {/* Visit Button (Front) */}
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="absolute top-4 left-4 z-30 bg-background/50 backdrop-blur-md p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:bg-background/80 transition-all shadow-lg hover:scale-110"
                                            onClick={(e) => e.stopPropagation()}
                                            title="Visit Project"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    )}

                                    {/* Click Hint */}
                                    <div className="absolute top-4 right-4 z-30 bg-background/50 backdrop-blur-md p-2 rounded-full border border-border text-muted-foreground group-hover:text-foreground transition-colors">
                                        <Info size={20} />
                                    </div>

                                    <div className="relative z-20 h-full flex flex-col justify-end p-8">
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech.slice(0, 4).map((t, i) => (
                                                <span key={i} className="text-xs px-3 py-1 rounded-full bg-background/40 backdrop-blur-md text-foreground border border-border">
                                                    {t}
                                                </span>
                                            ))}
                                            {project.tech.length > 4 && (
                                                <span className="text-xs px-3 py-1 rounded-full bg-background/40 backdrop-blur-md text-foreground border border-border">
                                                    +{project.tech.length - 4}
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2 text-foreground">{project.title}</h3>
                                        <p className="text-muted-foreground mb-2 line-clamp-2">{project.description}</p>
                                        <p className="text-xs text-secondary font-mono mt-2 flex items-center gap-1">
                                            Tap card for details <ArrowRight size={12} />
                                        </p>
                                    </div>
                                </div>

                                {/* Back Face */}
                                <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl overflow-hidden bg-card border border-border p-8 flex flex-col shadow-xl cursor-default ${flippedId === project.id ? 'z-10 pointer-events-auto' : '-z-10 pointer-events-none'}`}>
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-2xl font-bold text-primary">{project.title}</h3>
                                        <button className="text-muted-foreground hover:text-foreground" onClick={() => handleFlip(project.id)}>
                                            Close
                                        </button>
                                    </div>

                                    <div
                                        className="flex-grow overflow-y-auto pr-2 custom-scrollbar"
                                        onTouchStart={(e) => e.stopPropagation()}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <ul className="space-y-3">
                                            {project.details && project.details.map((detail, i) => (
                                                <li key={i} className="text-sm text-muted-foreground flex gap-2">
                                                    <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                                    <span className="leading-relaxed">{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-6 pt-6 border-t border-border flex gap-4">
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 text-foreground transition-colors text-sm font-medium">
                                                <Github size={18} /> GitHub
                                            </a>
                                        )}
                                        {project.link && (
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-colors text-sm font-medium">
                                                <ExternalLink size={18} /> Visit Project
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>



                <div className="mt-8 text-center md:hidden">
                    <a href="#" className="inline-flex items-center gap-2 text-sm text-secondary hover:text-foreground transition-colors">
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
