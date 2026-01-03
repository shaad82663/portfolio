import React from 'react';
import { content } from '../data/content';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const Experience = () => {
    const { experience } = content;

    return (
        <div className="flex flex-col h-full">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-8 flex items-center gap-3"
            >
                Work History
            </motion.h2>

            <div className="space-y-8">
                {experience.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative"
                    >
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
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
