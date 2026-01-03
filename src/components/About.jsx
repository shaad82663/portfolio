import React, { useState } from 'react';
import { content } from '../data/content';
import { motion } from 'framer-motion';

const About = () => {
    const { profile, skills, projects, experience } = content;
    const [activeSkill, setActiveSkill] = useState(null);

    // Filter related work based on active skill
    const relatedProjects = activeSkill ? projects.filter(p => p.tech.some(t => t.toLowerCase() === activeSkill.name.toLowerCase() || (activeSkill.name === "AWS" && t.includes("AWS")))) : [];
    const relatedExperience = activeSkill ? experience.filter(e => e.tags.some(t => t.toLowerCase() === activeSkill.name.toLowerCase() || (activeSkill.name === "AWS" && t.includes("AWS")))) : [];

    const hasRelatedWork = relatedProjects.length > 0 || relatedExperience.length > 0;

    return (
        <section id="about" className="py-24 bg-background relative overflow-hidden min-h-[90vh]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto mb-20 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Pixel Perfect Engineering</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        {profile.about}
                    </p>
                </motion.div>
            </div>

            {/* Centered Hover Info Panel */}
            <div className="h-48 mb-6 flex items-center justify-center pointer-events-none relative z-20">
                {activeSkill ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        key={activeSkill.name}
                        className="bg-card/90 backdrop-blur-xl border border-primary/20 p-6 rounded-2xl shadow-[0_0_30px_rgba(124,58,237,0.2)] max-w-2xl w-full mx-4 text-center"
                    >
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <img src={activeSkill.icon} alt={activeSkill.name} className="w-8 h-8" />
                            <h3 className="text-xl font-bold text-foreground">{activeSkill.name}</h3>
                        </div>

                        {hasRelatedWork ? (
                            <div className="flex flex-wrap justify-center gap-6">
                                {relatedProjects.length > 0 && (
                                    <div className="flex flex-col items-center">
                                        <span className="text-xs text-muted-foreground uppercase tracking-widest mb-2 font-mono">Projects</span>
                                        <div className="flex flex-wrap justify-center gap-2">
                                            {relatedProjects.map(p => (
                                                <span key={p.id} className="text-sm bg-muted/50 border border-border px-3 py-1 rounded-full text-foreground">{p.title}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                {relatedExperience.length > 0 && (
                                    <div className="flex flex-col items-center">
                                        <span className="text-xs text-muted-foreground uppercase tracking-widest mb-2 font-mono">Experience</span>
                                        <div className="flex flex-wrap justify-center gap-2">
                                            {relatedExperience.map(e => (
                                                <span key={e.id} className="text-sm bg-muted/50 border border-border px-3 py-1 rounded-full text-foreground">{e.company}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <p className="text-muted-foreground italic text-sm">Validating expertise in this technology...</p>
                        )}
                    </motion.div>
                ) : (
                    <div className="text-center opacity-30">
                        {/* Placeholder to keep height */}
                    </div>
                )}
            </div>


            {/* Infinite Marquee */}
            <div className="relative w-full overflow-hidden py-10 border-y border-border bg-card/30 backdrop-blur-sm z-10">
                <div className="flex animate-marquee whitespace-nowrap gap-16 min-w-full items-center" >
                    {/* Double the list for seamless loop */}
                    {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
                        <div
                            key={index}
                            className="flex shrink-0 items-center gap-3 group transition-opacity cursor-pointer px-3 py-1.5 hover:bg-muted rounded-xl border border-transparent hover:border-border"
                            onMouseEnter={() => setActiveSkill(skill)}
                            onMouseLeave={() => setActiveSkill(null)}
                            style={{ opacity: activeSkill && activeSkill.name !== skill.name ? 0.3 : 1 }}
                        >
                            <img src={skill.icon} alt={skill.name} className="w-12 h-12 grayscale group-hover:grayscale-0 transition-all duration-300" />
                            <span className="text-xl font-bold text-muted-foreground group-hover:text-foreground transition-colors">{skill.name}</span>
                        </div>
                    ))}
                </div>

                {/* Fade masks */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            </div>

            <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 5s linear infinite; /* Speed increased from 40s to 25s */
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    );
};

export default About;
