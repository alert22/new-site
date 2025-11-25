import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Phone, Mail, MapPin, Flower2, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary-50 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center space-x-2 mb-4">
                            <Flower2 className="h-8 w-8 text-primary-600" />
                            <span className="text-2xl font-serif font-bold text-gray-900">Olghet Flowers</span>
                        </Link>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Creiamo fiori giganti unici e insegniamo l'arte di realizzarli. Trasforma i tuoi eventi e spazi con la magia dei fiori handmade.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-serif font-bold text-lg mb-4 text-gray-900">Link Rapidi</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-gray-600 hover:text-primary-600 transition-colors">Home</Link></li>
                            <li><Link to="/corsi" className="text-gray-600 hover:text-primary-600 transition-colors">Corsi Online</Link></li>
                            <li><Link to="/creazioni" className="text-gray-600 hover:text-primary-600 transition-colors">Le Nostre Creazioni</Link></li>
                            <li><Link to="/chi-sono" className="text-gray-600 hover:text-primary-600 transition-colors">Chi Sono</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-serif font-bold text-lg mb-4 text-gray-900">Contatti</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                                <Phone className="h-5 w-5 text-primary-600 mt-0.5" />
                                <span className="text-gray-600">+39 320 2921978</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Mail className="h-5 w-5 text-primary-600 mt-0.5" />
                                <span className="text-gray-600">olghetflowers@gmail.com</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-primary-600 mt-0.5" />
                                <span className="text-gray-600">Spedizioni in tutta Italia e UE</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-serif font-bold text-lg mb-4 text-gray-900">Seguici</h3>
                        <div className="flex flex-wrap gap-3">
                            <a href="https://www.instagram.com/olghet_flowers/" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full shadow-sm hover:shadow-md hover:text-primary-600 transition-all" aria-label="Instagram">
                                <Instagram className="h-6 w-6" />
                            </a>
                            <a href="https://www.facebook.com/olghetflowers" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full shadow-sm hover:shadow-md hover:text-primary-600 transition-all" aria-label="Facebook">
                                <Facebook className="h-6 w-6" />
                            </a>
                            <a href="https://www.tiktok.com/@fiorigiganti_olghet" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full shadow-sm hover:shadow-md hover:text-primary-600 transition-all" aria-label="TikTok">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                </svg>
                            </a>
                            <a href="https://www.youtube.com/channel/UCsgFql8yTJ7OfYpiuF9r49Q" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full shadow-sm hover:shadow-md hover:text-primary-600 transition-all" aria-label="YouTube">
                                <Youtube className="h-6 w-6" />
                            </a>
                            <a href="https://it.pinterest.com/olghetflowers/" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full shadow-sm hover:shadow-md hover:text-primary-600 transition-all" aria-label="Pinterest">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 0a12 12 0 0 0-4.37 23.17c-.1-.85-.17-2.15 0-3.08l1.24-5.27s-.32-.63-.32-1.57c0-1.47.85-2.57 1.91-2.57.9 0 1.34.68 1.34 1.49 0 .91-.58 2.27-.88 3.53-.25 1.06.53 1.92 1.58 1.92 1.9 0 3.36-2 3.36-4.89 0-2.56-1.84-4.35-4.46-4.35-3.04 0-4.82 2.28-4.82 4.64 0 .92.35 1.9.79 2.43a.3.3 0 0 1 .07.29l-.29 1.2c-.05.18-.16.22-.37.13-1.33-.62-2.16-2.56-2.16-4.13 0-3.36 2.44-6.45 7.04-6.45 3.7 0 6.57 2.64 6.57 6.16 0 3.68-2.32 6.64-5.54 6.64-1.08 0-2.1-.56-2.45-1.22l-.67 2.55c-.24.93-.89 2.09-1.33 2.8A12 12 0 1 0 12 0z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-primary-200 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Olghet Flowers di Olga Korniychuk. P.IVA 03130420643. Tutti i diritti riservati.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
