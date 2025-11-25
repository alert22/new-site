import React from 'react';
import { motion } from 'framer-motion';

const Creations = () => {
    // Placeholder data for gallery
    const images = [
        "https://images.unsplash.com/photo-1563241527-3004b7be025f?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1520763185298-1b434c919102?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1572454591674-2739f30d8c40?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1566927467984-6332be7377d0?q=80&w=800&auto=format&fit=crop",
    ];

    return (
        <div className="pt-24 pb-16 min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Le Nostre Creazioni</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Una galleria dei nostri lavori più belli. Ogni fiore è realizzato interamente a mano con passione e cura dei dettagli.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
                        >
                            <img
                                src={src}
                                alt={`Creazione ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Creations;
