import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';

function AppContent() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />

          <Route
            path="*"
            element={
              <div className="flex flex-col items-center justify-center p-20">
                <h1 className="text-5xl font-heading font-extrabold text-primary-700 mb-4">
                  404
                </h1>
                <p className="text-xl-custom text-gray-600">
                  Stranica nije pronađena.
                </p>
              </div>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <React.Suspense
      fallback={
        <div className="flex justify-center items-center min-h-screen text-xl text-primary-500 bg-primary-50">
          Učitavanje prevoda...
        </div>
      }
    >
      <AppContent />
    </React.Suspense>
  );
}

export default App;
