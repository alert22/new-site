import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/courses';

import heroImage from '../assets/hero_flowers.jpg';
import welcomeLeft from '../assets/welcome_left.jpg';
import welcomeRight from '../assets/welcome_right.jpg';

const Home = () => {
    const featuredCourses = courses.slice(0, 3);

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative flex items-center justify-center pt-32 pb-16 overflow-hidden bg-primary-50">
                <div className="absolute top-0 left-0 right-0 h-[85%] z-0 opacity-20">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-300 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 -left-24 w-72 h-72 bg-gold-300 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
                            Arte Floreale Handmade
                        </span>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 leading-tight mb-4">
                            Crea la Magia con i <span className="text-primary-600">Fiori Giganti</span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                            Scopri l'arte di realizzare fiori giganti spettacolari. Video corsi passo-passo per trasformare la tua passione in capolavori unici.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/corsi" className="btn-primary">
                                Scopri i Corsi
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link to="/creazioni" className="btn-secondary">
                                Vedi Creazioni
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <img
                            src={heroImage}
                            alt="Fiori Giganti"
                            className="rounded-3xl shadow-2xl relative z-10 w-full max-w-md mx-auto transform rotate-3 hover:rotate-0 transition-transform duration-500"
                        />
                        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg z-20 flex items-center space-x-3 animate-bounce-slow">
                            <div className="bg-primary-100 p-2 rounded-full">
                                <Star className="h-6 w-6 text-primary-600" />
                            </div>
                            <div>
                                <p className="font-bold text-gray-900">100% Handmade</p>
                                <p className="text-xs text-gray-500">Qualità Artigianale</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-primary-50 rounded-3xl p-8 md:p-12 shadow-sm border border-primary-100">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            {/* Left Image - Desktop only */}
                            <motion.div
                                className="hidden lg:block lg:col-span-3"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <div className="relative">
                                    <img
                                        src={welcomeLeft}
                                        alt="Fiori giganti in vetrina"
                                        className="rounded-2xl shadow-lg w-full h-auto object-cover transform -rotate-3 hover:rotate-0 transition-transform duration-300"
                                    />
                                    <p className="text-xs text-gray-500 mt-2 text-center italic">Allestimento evento privato per FENDI</p>
                                </div>
                            </motion.div>

                            {/* Center Content */}
                            <div className="lg:col-span-6 text-center">
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                                    Benvenuti da Olghet Flowers
                                </h2>
                                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                    Il vostro punto di riferimento per <strong>fiori giganti in Italia</strong>. Creiamo splendide e uniche composizioni floreali di dimensioni straordinarie, perfette per eventi, vetrine e spazi speciali.
                                </p>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    Realizzati a mano con materiali di alta qualità come <strong>carta crespa, organza e gomma eva (fommy)</strong>, i nostri fiori combinano estetica e durata. Le creazioni in gomma eva sono ideali anche per esterni, resistenti agli agenti atmosferici.
                                    <br /><br />
                                    Che sia un tulipano gigante o una rosa imponente, trasformiamo la vostra visione in una decorazione unica. Spediamo in tutta Italia!
                                </p>

                                {/* Mobile Images Gallery */}
                                <div className="lg:hidden mb-8 flex gap-4 overflow-x-auto pb-4 -mx-4 px-4">
                                    <div className="flex-shrink-0 w-64">
                                        <img
                                            src={welcomeLeft}
                                            alt="Allestimento evento FENDI"
                                            className="rounded-2xl shadow-lg w-full h-auto object-cover transform -rotate-2"
                                        />
                                        <p className="text-xs text-gray-500 mt-2 text-center italic">Allestimento evento privato per FENDI</p>
                                    </div>
                                    <div className="flex-shrink-0 w-64">
                                        <img
                                            src={welcomeRight}
                                            alt="Vetrina Yamamay Milano"
                                            className="rounded-2xl shadow-lg w-full h-auto object-cover transform rotate-2"
                                        />
                                        <p className="text-xs text-gray-500 mt-2 text-center italic">Vetrina Yamamay di Milano</p>
                                    </div>
                                </div>

                                <Link to="/contatti" className="inline-flex items-center btn-primary">
                                    Richiedi un Preventivo Gratuito
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </div>

                            {/* Right Image - Desktop only */}
                            <motion.div
                                className="hidden lg:block lg:col-span-3"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <div className="relative">
                                    <img
                                        src={welcomeRight}
                                        alt="Composizione floreale gigante"
                                        className="rounded-2xl shadow-lg w-full h-auto object-cover transform rotate-3 hover:rotate-0 transition-transform duration-300"
                                    />
                                    <p className="text-xs text-gray-500 mt-2 text-center italic">Vetrina Yamamay di Milano</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Courses */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">I Corsi Più Richiesti</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Inizia il tuo viaggio creativo con i nostri corsi best-seller. Impara le tecniche fondamentali e avanzate.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featuredCourses.map((course) => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/corsi" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                            Vedi tutti i corsi <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-primary-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pattern-dots"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-serif font-bold mb-6">Perché Scegliere i Nostri Corsi?</h2>
                            <div className="space-y-8">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-white/10 p-3 rounded-lg flex-shrink-0">
                                        <PlayCircle className="h-6 w-6 text-primary-200" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Video Tutorial Dettagliati</h3>
                                        <p className="text-primary-100">Spiegazioni passo dopo passo, chiare e semplici da seguire, adatte anche ai principianti.</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="bg-white/10 p-3 rounded-lg flex-shrink-0">
                                        <Star className="h-6 w-6 text-primary-200" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Tecniche Professionali</h3>
                                        <p className="text-primary-100">Impara i segreti del mestiere da Olga Korniychuk, esperta nel settore dei fiori giganti.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/ad6s8Ezl5GI"
                                    title="Video Corso Gratuito"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                            <p className="text-center mt-4 text-primary-200 text-sm">Sul nostro canale YouTube troverete anche dei video corsi gratuiti</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
