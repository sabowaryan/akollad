import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Carrieres from './pages/Carrieres';
import Investisseurs from './pages/Investisseurs';
import Presse from './pages/Presse';
import Confidentialite from './pages/Confidentialite';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/carrieres" element={<Layout><Carrieres /></Layout>} />
        <Route path="/investisseurs" element={<Layout><Investisseurs /></Layout>} />
        <Route path="/presse" element={<Layout><Presse /></Layout>} />
        <Route path="/confidentialite" element={<Layout><Confidentialite /></Layout>} />
        <Route path="/privacy-policy" element={<Layout><Confidentialite /></Layout>} />
        <Route path="/privacy" element={<Layout><PrivacyPolicy /></Layout>} />
        <Route path="/terms" element={<Layout><Terms /></Layout>} />
        <Route path="/conditions" element={<Layout><Terms /></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;
