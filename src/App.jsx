import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Creations from './pages/Creations';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/corsi" element={<Courses />} />
                        <Route path="/creazioni" element={<Creations />} />
                        <Route path="/chi-sono" element={<About />} />
                        <Route path="/contatti" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
