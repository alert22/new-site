import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Phone, Mail, MapPin, Flower2 } from 'lucide-react';

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
                                <span className="text-gray-600">Spedizioni in tutta Italia</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-serif font-bold text-lg mb-4 text-gray-900">Seguici</h3>
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/olghet_flowers/" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full shadow-sm hover:shadow-md hover:text-primary-600 transition-all">
                                <Instagram className="h-6 w-6" />
                            </a>
                            {/* Add more social icons if needed */}
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
