import React from 'react';
import { motion } from 'framer-motion';
import aboutmeimg from '../assets/fiorigigantidiolga.jpg'

const About = () => {
    return (
        <div className="pt-24 pb-16 min-h-screen bg-primary-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src={aboutmeimg}
                            alt="Fiori giganti di Olga"
                            className="rounded-3xl shadow-2xl w-full max-w-md mx-auto"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">Chi Sono</h1>
                        <h2 className="text-2xl text-primary-700 font-medium mb-6">Olga Korniychuk - Flower Artist</h2>

                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <p>
                                Benvenuti nel mio mondo colorato! Sono Olga, un'artista appassionata di fiori giganti.
                                Da anni mi dedico alla creazione di decorazioni floreali uniche, realizzate interamente a mano
                                utilizzando materiali come la gomma EVA, la carta crespa e l'organza.
                            </p>
                            <p>
                                Quella che è iniziata come una semplice curiosità si è trasformata in una vera e propria professione.
                                Amo sperimentare con forme, colori e texture per creare fiori che sembrano veri, ma con quel tocco
                                di magia che solo le dimensioni "giganti" possono dare.
                            </p>
                            <p>
                                Oltre a creare, la mia più grande gioia è insegnare. Attraverso i miei video corsi,
                                condivido tutte le mie tecniche e i miei segreti, permettendo a chiunque di avvicinarsi
                                a questa meravigliosa forma d'arte. Che tu voglia decorare la tua casa, allestire un evento
                                o avviare la tua attività, sono qui per guidarti passo dopo passo.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
