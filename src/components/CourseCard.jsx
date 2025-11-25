import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CourseCard = ({ course }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
        >
            <div className="relative h-64 overflow-hidden">
                <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-primary-700 font-bold shadow-sm">
                    {course.price}
                </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow">
                    Impara a realizzare questo magnifico fiore gigante passo dopo passo con il nostro video corso dettagliato.
                </p>
                <a
                    href={course.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn-primary group"
                >
                    <span>Acquista Corso</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
        </motion.div>
    );
};

export default CourseCard;
