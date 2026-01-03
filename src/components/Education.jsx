import React from 'react';
import { content } from '../data/content';
import { motion } from 'framer-motion'; // Ensure framer-motion is installed
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
    const { education } = content;

    if (!education) return null;

    return (
        <div className="flex flex-col h-full">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-8 flex items-center gap-3"
            >
                <GraduationCap className="text-primary" /> Education
            </motion.h2>

            <div className="space-y-8 h-full">
                {education.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative h-full"
                    >
                        <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors shadow-lg backdrop-blur-sm group h-full">
                            <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{item.degree}</h3>
                                    <p className="text-primary/80 font-medium">{item.institution}</p>
                                </div>
                                <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded">
                                    <Calendar size={12} />
                                    {item.period}
                                </div>
                            </div>

                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Education;
