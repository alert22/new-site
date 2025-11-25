import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, ExternalLink, Sparkles } from 'lucide-react';

const Creations = () => {
    return (
        <div className="pt-24 pb-16 min-h-screen bg-gradient-to-b from-white to-primary-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
                            Le Nostre Creazioni
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Ogni fiore è realizzato interamente a mano con passione e cura dei dettagli.
                            Scopri le nostre ultime creazioni su Instagram!
                        </p>
                    </motion.div>
                </div>

                {/* Instagram CTA Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                >
                    <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-12 md:p-16 shadow-2xl overflow-hidden relative">
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold-300/20 rounded-full blur-3xl"></div>

                        <div className="relative z-10 text-center">
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                                className="inline-block mb-6"
                            >
                                <Instagram className="h-20 w-20 text-white mx-auto" />
                            </motion.div>

                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                                Seguici su Instagram
                            </h2>

                            <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
                                Scopri le nostre ultime creazioni, dietro le quinte e progetti speciali.
                                Aggiorniamo il feed ogni giorno con nuove ispirazioni floreali!
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <a
                                    href="https://www.instagram.com/olghet_flowers/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-8 py-4 bg-white text-primary-700 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                >
                                    <Instagram className="mr-2 h-6 w-6" />
                                    Vedi le Creazioni
                                    <ExternalLink className="ml-2 h-5 w-5" />
                                </a>

                                <a
                                    href="https://www.instagram.com/olghet_flowers/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 bg-white/10 text-white rounded-full font-semibold border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
                                >
                                    @olghet_flowers
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Features Section */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-center p-6 bg-white rounded-2xl shadow-sm"
                    >
                        <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Sparkles className="h-8 w-8 text-primary-600" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Sempre Aggiornato</h3>
                        <p className="text-gray-600 text-sm">
                            Nuove creazioni e progetti pubblicati regolarmente
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-center p-6 bg-white rounded-2xl shadow-sm"
                    >
                        <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Instagram className="h-8 w-8 text-primary-600" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Dietro le Quinte</h3>
                        <p className="text-gray-600 text-sm">
                            Scopri il processo creativo e i segreti del mestiere
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-center p-6 bg-white rounded-2xl shadow-sm"
                    >
                        <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <ExternalLink className="h-8 w-8 text-primary-600" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Progetti Speciali</h3>
                        <p className="text-gray-600 text-sm">
                            Eventi, collaborazioni e creazioni su misura
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Creations;
