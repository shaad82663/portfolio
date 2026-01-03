import React from 'react';
import { content } from '../data/content';
import { Mail, MapPin, Send, Phone } from 'lucide-react';

const Contact = () => {
    const { contact } = content;

    return (
        <section id="contact" className="py-24 bg-background border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                    <div>
                        <span className="text-accent font-mono text-sm mb-4 block">Let's Connect</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Ready to start your next project?
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8">
                            I am currently open for full-time backend engineering roles. If you have a project in mind or just want to say hi, feel free to reach out!
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Mail size={20} />
                                </div>
                                <span>{contact.email}</span>
                            </div>
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Phone size={20} />
                                </div>
                                <span>{contact.phone}</span>
                            </div>
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <MapPin size={20} />
                                </div>
                                <span>{contact.location}</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card border border-white/5 p-8 rounded-2xl shadow-2xl relative overflow-hidden group">
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-colors" />

                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-400">Name</label>
                                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-400">Email</label>
                                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-gray-400">Message</label>
                                <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="Hello..." />
                            </div>
                            <button className="w-full py-4 bg-primary rounded-lg font-bold text-white hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
