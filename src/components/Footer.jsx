import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 bg-black border-t border-white/10">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Mohd Shadab. Built with <span className="text-primary">React</span> & <span className="text-secondary">Tailwind</span>.
                </p>

                <div className="flex gap-6">
                    <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy</a>
                    <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
