import React from 'react';
import { content } from '../data/content';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const Experience = () => {
    const { experience } = content;

    return (
        <section id="experience" className="py-24 bg-background relative">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl font-bold mb-16 text-center"
                >
                    Work History
                </motion.h2>

                <div className="max-w-4xl mx-auto relative">
                    {/* Center Line for Desktop */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/50 to-transparent" />

                    {experience.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative flex flex-col md:flex-row gap-8 mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_10px_rgba(124,58,237,0.5)] z-10 mt-1.5" />

                            {/* Content Card */}
                            <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                                <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors shadow-lg backdrop-blur-sm group">
                                    <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{item.role}</h3>
                                            <p className="text-primary/80 font-medium">{item.company}</p>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded">
                                            <Calendar size={12} />
                                            {item.period}
                                        </div>
                                    </div>

                                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                        {item.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {item.tags?.map((tag, i) => (
                                            <span key={i} className="text-xs px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Empty Space for Grid alignment */}
                            <div className="hidden md:block md:w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
