import React, { useState } from 'react';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/courses';
import { Search } from 'lucide-react';

const Courses = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="pt-24 pb-16 min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">I Nostri Corsi</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                        Esplora la nostra collezione completa di video corsi. Dalle basi alle tecniche più avanzate.
                    </p>

                    <div className="max-w-md mx-auto relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <input
                            type="text"
                            placeholder="Cerca un corso..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all shadow-sm"
                        />
                    </div>
                </div>

                {filteredCourses.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredCourses.map((course) => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">Nessun corso trovato con questo nome.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Courses;
