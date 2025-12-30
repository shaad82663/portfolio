import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { content } from '../data/content';

const Hero = () => {
    const { profile } = content;

    return (
        <section className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-background">
            {/* Background Blobs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 animate-blob" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 animate-blob animation-delay-2000" />

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-accent mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                        </span>
                        Available for work
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
                        Building the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-accent">
                            Digital Foundation
                        </span>
                    </h1>

                    <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
                        {profile.tagline} {profile.about.split('.')[0]}.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-12">
                        <a href="#projects" className="px-8 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(124,58,237,0.3)] flex items-center gap-2 group">
                            View Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href={profile.social.github} target="_blank" rel="noreferrer" className="px-8 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all font-medium">
                            GitHub
                        </a>
                    </div>

                    <div className="flex items-center gap-6">
                        <a href={profile.social.github} className="text-muted-foreground hover:text-white transition-colors"><Github size={24} /></a>
                        <a href={profile.social.linkedin} className="text-muted-foreground hover:text-white transition-colors"><Linkedin size={24} /></a>
                        <a href={profile.social.email} className="text-muted-foreground hover:text-white transition-colors"><Mail size={24} /></a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    {/* Glass Card Composition */}
                    <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                        {/* Main Code Window */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent backdrop-blur-md rounded-2xl border border-white/10 p-6 transform rotate-3 shadow-2xl">
                            <div className="flex gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <div className="space-y-2 font-mono text-sm text-gray-300 opacity-60">
                                <p><span className="text-purple-400">class</span> <span className="text-yellow-400">BackendEngineer</span>:</p>
                                <p className="pl-4"><span className="text-purple-400">def</span> <span className="text-blue-400">init</span>(self):</p>
                                <p className="pl-8">self.skills = [<span className="text-green-400">'Python'</span>, <span className="text-green-400">'Rust'</span>]</p>
                                <p className="pl-8">self.passion = <span className="text-green-400">'Scalability'</span></p>
                                <p className="pl-4"><span className="text-purple-400">def</span> <span className="text-blue-400">deploy</span>(self):</p>
                                <p className="pl-8"><span className="text-purple-400">return</span> <span className="text-green-400">"Production Ready"</span></p>
                            </div>
                        </div>

                        {/* Profile Card Floating */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-10 -left-10 bg-[#0a0f1c] p-4 rounded-xl border border-white/10 shadow-2xl flex items-center gap-4 w-64"
                        >
                            <img src={profile.avatar} alt="Profile" className="w-12 h-12 rounded-full object-cover" />
                            <div>
                                <h3 className="font-bold text-white text-sm">{profile.name}</h3>
                                <p className="text-xs text-muted-foreground">{profile.title}</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
