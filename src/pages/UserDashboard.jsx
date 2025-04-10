import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import lessonsData from '../data/lessons.json';
import SpeedSpeakBot from '../components/SpeedSpeakBot';
import { auth, db } from '../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const UserDashboard = () => {
  const [lessons, setLessons] = useState([]);
  const [completedLessons, setCompletedLessons] = useState(() => {
    const saved = localStorage.getItem('completedLessons');
    return saved ? JSON.parse(saved) : [];
  });
  const [language, setLanguage] = useState(null);
  const [level, setLevel] = useState(null);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLessons(lessonsData);

    const storedLang = localStorage.getItem('selectedLang');
    const storedLevel = localStorage.getItem('selectedLevel');
    if (storedLang && storedLevel) {
      const parsedLang = JSON.parse(storedLang);
      setLanguage(parsedLang);
      setLevel(storedLevel);
    }

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserId(user.uid);
        const userDoc = await getDoc(doc(db, 'alumnos', user.uid));
        if (userDoc.exists()) {
          const data = userDoc.data();
          if (data.completedLessons) {
            setCompletedLessons(data.completedLessons);
          }
        }
      }
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('completedLessons', JSON.stringify(completedLessons));
    if (userId) {
      setDoc(doc(db, 'alumnos', userId), { completedLessons }, { merge: true });
    }
  }, [completedLessons, userId]);

  const getProgress = () => {
    return lessons.length > 0
      ? Math.round((completedLessons.length / lessons.length) * 100)
      : 0;
  };

  const renderSection = (title, items) => (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {items.map((lesson) => (
          <button
            key={lesson.id}
            onClick={() => navigate(`/lesson/${lesson.id}`)}
            className={`py-4 px-6 rounded-lg border text-base font-medium transition-all duration-200 ${
              completedLessons.includes(lesson.id)
                ? 'bg-green-400 text-white'
                : 'bg-white hover:bg-gray-100'
            }`}
          >
            {lesson.title}
          </button>
        ))}
      </div>
    </div>
  );

  const progress = getProgress();

  return (
    <div className="p-6 relative">
      {/* Encabezado con idioma y nivel */}
      <div className="mb-4">
        <h1 className="text-4xl md:text-5xl font-bold flex items-center gap-2">
          {language?.flagUrl && (
            <img src={language.flagUrl} alt={language.name} className="w-8 h-8 rounded-full" />
          )}
          {language?.name || 'Idioma'} <span className="text-gray-500">- Level {level || 'Nivel'}</span>
        </h1>
      </div>

      {/* Barra de progreso */}
      <div className="w-full h-6 bg-gray-200 rounded-full mb-4 overflow-hidden">
        <div
          className="h-full bg-green-500 transition-all duration-500 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Botones de funcionalidades */}
      <div className="flex flex-wrap gap-3 mb-6">
        <button
          onClick={() => navigate('/achievements')}
          className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 px-5 rounded-full transition"
        >
          🏆 Logros
        </button>
        <button
          onClick={() => navigate('/videos')}
          className="bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-5 rounded-full transition"
        >
          🎥 Vídeos
        </button>
        <button
          onClick={() => navigate('/exams')}
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-5 rounded-full transition"
        >
          📘 Exámenes
        </button>
        <button
          onClick={() => navigate('/affiliate')}
          className="bg-purple-600 hover:bg-purple-500 text-white font-semibold py-2 px-5 rounded-full transition text-center"
        >
          🔗 Link de Afiliado
        </button>
      </div>

      {/* Lecciones */}
      <h2 className="text-2xl font-semibold mt-16 mb-4">Tus Lecciones</h2>

      {renderSection(
        'Técnicas de Memorización (Días 1–3)',
        lessons.filter((l) => l.type === 'memoria')
      )}
      {renderSection(
        'Vocabulario (Días 4–13)',
        lessons.filter((l) => l.type === 'vocabulario')
      )}
      {renderSection(
        'Gramática (Días 14–20)',
        lessons.filter((l) => l.type === 'gramática')
      )}
      {renderSection(
        'Speaking (Días 21–27)',
        lessons.filter((l) => l.type === 'speaking')
      )}
      {renderSection(
        'Business Vocabulary (Días 28–30)',
        lessons.filter((l) => l.type === 'business')
      )}
      {renderSection(
        'Examen Final y Título (Día 31)',
        lessons.filter((l) => l.type === 'examen')
      )}

      <div className="pb-24"></div>
      <SpeedSpeakBot />
    </div>
  );
};

export default UserDashboard;