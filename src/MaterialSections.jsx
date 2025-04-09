const MaterialSections = () => {
    const sections = [
      'Técnicas de Memorización (Días 1–3)',
      'Vocabulario (Días 4–13)',
      'Gramática (Días 14–20)',
      'Speaking (Días 21–27)',
      'Business Vocabulary (Días 28–30)',
      'Examen Final + Certificado (Día 31)',
    ];
  
    return (
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Materiales del curso</h2>
        <div className="space-y-4">
          {sections.map((section, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-xl">
              <h3 className="font-semibold">{section}</h3>
              <p className="text-sm text-gray-500">(Aquí irán los materiales que subas luego)</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default MaterialSections;