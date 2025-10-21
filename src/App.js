import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PropertyDetails from './pages/PropertyDetails';
import LeaseYourProperty from './pages/LeaseYourProperty';
import ExpansionAreas from './pages/ExpansionAreas';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/haruki-villa" element={<PropertyDetails />} />
            <Route path="/lease-your-property" element={<LeaseYourProperty />} />
            <Route path="/expansion-areas" element={<ExpansionAreas />} />
            <Route path="/collaborate" element={<LeaseYourProperty />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
