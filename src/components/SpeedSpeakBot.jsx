import React, { useState } from 'react';

const SpeedSpeakBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: 'bot',
      text: '¡Hola! Soy SpeedSpeak-AI 🧬. ¿En qué idioma quieres practicar hoy?'
    }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { from: 'user', text: input };
    const fakeReply = {
      from: 'bot',
      text: 'Pronto responderé con inteligencia real. Por ahora soy una demo simpática 🧬💬'
    };

    setMessages((prev) => [...prev, userMessage, fakeReply]);
    setInput('');
  };

  return (
    <>
      {!open && (
        <div className="fixed bottom-4 left-4 right-4 max-w-5xl mx-auto bg-black text-white px-6 py-3 rounded-xl flex justify-between items-center z-50 shadow-lg">
          <span className="font-semibold text-sm md:text-base">
            SpeedSpeak-AI 🧬 ¿Quieres practicar ahora?
          </span>
          <button
            onClick={() => setOpen(true)}
            className="bg-white text-black px-4 py-1.5 rounded-md font-semibold hover:bg-gray-200 text-sm transition"
          >
            Chatear
          </button>
        </div>
      )}

      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-80 h-96 bg-white rounded-xl shadow-lg flex flex-col overflow-hidden border border-gray-300">
          <div className="bg-blue-600 text-white p-3 font-bold flex justify-between items-center">
            SpeedSpeak-AI 🧬
            <button onClick={() => setOpen(false)}>✖️</button>
          </div>
          <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg ${
                  msg.from === 'bot'
                    ? 'bg-blue-100 text-left'
                    : 'bg-green-100 text-right ml-auto'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="p-2 border-t flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border border-gray-300 px-2 py-1 rounded text-sm outline-none"
              placeholder="Escribe algo..."
            />
            <button
              onClick={handleSend}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm transition"
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SpeedSpeakBot;