import React from 'react';
import { content } from '../data/content';
import { motion } from 'framer-motion'; // Ensure framer-motion is installed
import { GraduationCap } from 'lucide-react';

const Education = () => {
    const { education } = content;

    if (!education) return null;

    return (
        <section id="education" className="py-24 bg-background relative">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl font-bold mb-16 text-center"
                >
                    Education
                </motion.h2>

                <div className="max-w-4xl mx-auto relative">
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/50 to-transparent" />

                    {education.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative flex flex-col md:flex-row gap-8 mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_10px_rgba(124,58,237,0.5)] z-10 mt-1.5" />

                            <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                                <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors shadow-lg backdrop-blur-sm group">
                                    <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{item.degree}</h3>
                                            <p className="text-primary/80 font-medium">{item.institution}</p>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded">
                                            <GraduationCap size={12} />
                                            {item.period}
                                        </div>
                                    </div>

                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                            <div className="hidden md:block md:w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
