import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-24 pb-16 min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Contattaci</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Hai domande sui corsi o vuoi richiedere una creazione personalizzata? Scrivici!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="bg-primary-50 rounded-3xl p-8 lg:p-12">
                        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">Informazioni di Contatto</h2>

                        <div className="space-y-8">
                            <div className="flex items-start space-x-4">
                                <div className="bg-white p-3 rounded-full shadow-sm">
                                    <Phone className="h-6 w-6 text-primary-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Telefono / WhatsApp</h3>
                                    <p className="text-gray-600">+39 320 2921978</p>
                                    <a href="https://wa.me/393202921978" target="_blank" rel="noopener noreferrer" className="text-primary-600 text-sm font-medium hover:underline mt-1 inline-block">
                                        Chatta su WhatsApp
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-white p-3 rounded-full shadow-sm">
                                    <Mail className="h-6 w-6 text-primary-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Email</h3>
                                    <p className="text-gray-600">olghetflowers@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-white p-3 rounded-full shadow-sm">
                                    <MapPin className="h-6 w-6 text-primary-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Dove Siamo</h3>
                                    <p className="text-gray-600">Spediamo le nostre creazioni in tutta Italia.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                                    placeholder="Il tuo nome"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                                    placeholder="tua@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Messaggio</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                                    placeholder="Come possiamo aiutarti?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full btn-primary"
                                onClick={(e) => e.preventDefault()} // Prevent actual submission for demo
                            >
                                <span>Invia Messaggio</span>
                                <Send className="ml-2 h-4 w-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
