import React from 'react';
import { content } from '../data/content';
import { motion } from 'framer-motion';

const About = () => {
    const { profile, skills } = content;

    return (
        <section id="about" className="py-24 bg-background relative overflow-hidden">
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

            {/* Infinite Marquee */}
            <div className="relative w-full overflow-hidden py-10 border-y border-white/5 bg-white/5 backdrop-blur-sm">
                <div className="flex animate-marquee whitespace-nowrap gap-16 min-w-full items-center">
                    {/* Double the list for seamless loop */}
                    {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
                        <div key={index} className="flex items-center gap-3 group opacity-50 hover:opacity-100 transition-opacity cursor-default">
                            <img src={skill.icon} alt={skill.name} className="w-12 h-12 grayscale group-hover:grayscale-0 transition-all duration-300" />
                            <span className="text-xl font-bold text-white/50 group-hover:text-white transition-colors">{skill.name}</span>
                        </div>
                    ))}
                </div>

                {/* Fade masks */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
            </div>

            <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    );
};

export default About;
