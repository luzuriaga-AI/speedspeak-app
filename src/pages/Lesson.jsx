import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import lessonsData from '../data/lessons.json';
import { db, storage, auth } from '../firebaseConfig';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll
} from 'firebase/storage';
import { onAuthStateChanged } from 'firebase/auth';

const Lesson = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lesson, setLesson] = useState(null);
  const [completed, setCompleted] = useState(false);
  const [materialFile, setMaterialFile] = useState(null);
  const [materialURLs, setMaterialURLs] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const found = lessonsData.find((l) => l.id === parseInt(id));
    setLesson(found);

    const stored = JSON.parse(localStorage.getItem('completedLessons') || '[]');
    if (stored.includes(parseInt(id))) {
      setCompleted(true);
    }

    onAuthStateChanged(auth, (user) => {
      if (user?.email === 'unaimendiburuvigue@gmail.com') {
        setIsAdmin(true);
      }
    });

    fetchMaterials();
  }, [id]);

  const fetchMaterials = async () => {
    const folderRef = ref(storage, `lesson-materials/${id}`);
    try {
      const files = await listAll(folderRef);
      const urls = await Promise.all(files.items.map((item) => getDownloadURL(item)));
      setMaterialURLs(urls);
    } catch (error) {
      console.error('Error al obtener los materiales:', error);
    }
  };

  const handleToggle = () => {
    const stored = JSON.parse(localStorage.getItem('completedLessons') || '[]');
    let updated;

    if (completed) {
      updated = stored.filter((lid) => lid !== parseInt(id));
    } else {
      updated = [...stored, parseInt(id)];
    }

    localStorage.setItem('completedLessons', JSON.stringify(updated));
    setCompleted(!completed);
  };

  const handleUpload = async () => {
    if (!materialFile) return;

    console.log('⏫ Subiendo archivo:', materialFile.name);

    const fileRef = ref(storage, `lesson-materials/${id}/${materialFile.name}`);
    try {
      await uploadBytes(fileRef, materialFile);
      console.log('✅ Archivo subido con éxito');
      fetchMaterials();
      setMaterialFile(null);
    } catch (error) {
      console.error('❌ Error subiendo el archivo:', error);
    }
  };

  if (!lesson) return <div className="p-6">Lección no encontrada</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <button
        onClick={() => navigate('/dashboard')}
        className="mb-6 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-full"
      >
        ← Volver al Dashboard
      </button>

      <h1 className="text-3xl font-bold mb-4">{lesson.title}</h1>

      {/* Mostrar materiales subidos */}
      {materialURLs.length > 0 ? (
        <div className="mb-8 space-y-4">
          <h2 className="text-xl font-semibold">Material de la lección:</h2>
          {materialURLs.map((url, idx) => (
            <iframe
              key={idx}
              src={url}
              title={`material-${idx}`}
              className="w-full h-96 border rounded-lg"
            ></iframe>
          ))}
        </div>
      ) : (
        <p className="text-gray-700 mb-8">No hay materiales disponibles todavía.</p>
      )}

      {/* Botón admin para subir archivos */}
      {isAdmin && (
        <div className="mb-8">
          <input
            type="file"
            onChange={(e) => setMaterialFile(e.target.files[0])}
            className="mb-2"
          />
          <button
            onClick={handleUpload}
            className="bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-lg"
          >
            Subir Material
          </button>
        </div>
      )}

      <button
        onClick={handleToggle}
        className={`w-full text-white py-3 rounded-lg text-lg font-semibold transition ${
          completed ? 'bg-green-600 hover:bg-green-500' : 'bg-blue-600 hover:bg-blue-500'
        }`}
      >
        {completed ? '✅ Lección Completada' : 'Marcar Lección como Completada'}
      </button>
    </div>
  );
};

export default Lesson;