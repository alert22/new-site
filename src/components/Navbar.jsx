import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Flower2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Corsi', path: '/corsi' },
        { name: 'Creazioni', path: '/creazioni' },
        { name: 'Chi Sono', path: '/chi-sono' },
        { name: 'Contatti', path: '/contatti' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex items-center space-x-3 group">
                        <Flower2 className="h-10 w-10 text-primary-600 group-hover:text-primary-700 transition-colors" />
                        <span className={`text-3xl font-serif font-bold ${scrolled ? 'text-gray-900' : 'text-gray-900'}`}>
                            Olghet Flowers
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-lg font-medium transition-all duration-200 
                                    ${link.name === 'Corsi'
                                        ? 'bg-primary-600 text-white px-6 py-2.5 rounded-full hover:bg-primary-700 hover:shadow-lg transform hover:-translate-y-0.5'
                                        : location.pathname === link.path
                                            ? 'text-primary-600'
                                            : 'text-gray-700 hover:text-primary-600'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-primary-600 focus:outline-none p-2"
                        >
                            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 shadow-xl"
                    >
                        <div className="px-4 pt-4 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-4 py-3 rounded-xl text-lg font-medium transition-colors ${link.name === 'Corsi'
                                            ? 'bg-primary-600 text-white text-center mt-4'
                                            : location.pathname === link.path
                                                ? 'bg-primary-50 text-primary-600'
                                                : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
