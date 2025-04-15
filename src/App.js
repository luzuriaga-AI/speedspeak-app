import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AuthPage from './pages/AuthPage';
import BuyCourse from './pages/BuyCourse';
import UserDashboard from './pages/UserDashboard';
import Checkout from './pages/Checkout';
import Lesson from './pages/Lesson';
import AchievementsPage from './pages/AchievementsPage';
import VideosPage from './pages/VideosPage';
import ExamsPage from './pages/ExamsPage';
import AffiliatePage from './pages/AffiliatePage';
import AffiliateLanding from './pages/AffiliateLanding'; // ✅ Importar AffiliateLanding

const App = () => {
  return (
    <Router> {/* ✅ Necesario para que funcionen bien las rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/buy" element={<BuyCourse />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/lesson/:id" element={<Lesson />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/videos" element={<VideosPage />} />
        <Route path="/exams" element={<ExamsPage />} />
        <Route path="/affiliate" element={<AffiliatePage />} />
        <Route path="/afiliado" element={<AffiliateLanding />} /> {/* ✅ Aquí está la ruta del link */}
      </Routes>
    </Router>
  );
};

export default App;