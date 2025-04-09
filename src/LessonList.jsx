const LessonList = () => {
    const lessons = [
      ...Array.from({ length: 3 }, (_, i) => `Técnica de memorización ${i + 1}`),
      ...Array.from({ length: 10 }, (_, i) => `Vocabulario ${i + 1}`),
      ...Array.from({ length: 7 }, (_, i) => `Gramática ${i + 1}`),
      ...Array.from({ length: 7 }, (_, i) => `Speaking ${i + 1}`),
      ...Array.from({ length: 3 }, (_, i) => `Business Vocabulary ${i + 1}`),
      'Examen final y certificado'
    ];
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {lessons.map((lesson, index) => (
          <div key={index} className="p-4 bg-white shadow rounded-xl">
            {lesson}
          </div>
        ))}
      </div>
    );
  };
  
  export default LessonList;