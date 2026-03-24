import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { sendChatMessage } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', role: 'model', text: 'Bienvenido a Estudio Jurídico Córdova. ¿En qué podemos asesorarle hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
        const history = messages.map(m => ({
            role: m.role === 'model' ? 'model' : 'user',
            parts: [{ text: m.text }]
        }));

        const responseText = await sendChatMessage(userMsg.text, history);

        const aiMsg: ChatMessage = {
            id: (Date.now() + 1).toString(),
            role: 'model',
            text: responseText
        };
        setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
        setMessages(prev => [...prev, {
            id: (Date.now() + 1).toString(),
            role: 'model',
            text: 'Disculpe, por favor contáctenos directamente a nuestros teléfonos.',
            isError: true
        }]);
    } finally {
        setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-cinematic-900 border border-white/10 shadow-2xl flex flex-col overflow-hidden animate-fade-in-up origin-bottom-right">
          
          {/* Header */}
          <div className="bg-cinematic-800 p-4 border-b border-white/10 flex justify-between items-center">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-none border border-gold-500/30 bg-gold-500/10 text-gold-500 flex items-center justify-center">
                    <Bot size={18} />
                </div>
                <div>
                    <h4 className="text-cream-100 font-serif text-sm">Asistente Virtual</h4>
                    <p className="text-white/40 text-[10px] uppercase tracking-wider">Estudio Córdova</p>
                </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-gold-500 transition-colors">
              <X size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-cinematic-900 scrollbar-thin scrollbar-thumb-cinematic-700">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] p-4 text-sm font-light leading-relaxed border ${
                    msg.role === 'user' 
                      ? 'bg-gold-500 text-cinematic-900 border-gold-500' 
                      : 'bg-cinematic-800 text-cream-100 border-white/5'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-cinematic-800 border border-white/5 p-4 flex items-center gap-2">
                   <div className="w-1 h-1 bg-gold-500 rounded-full animate-pulse"></div>
                   <div className="w-1 h-1 bg-gold-500 rounded-full animate-pulse delay-75"></div>
                   <div className="w-1 h-1 bg-gold-500 rounded-full animate-pulse delay-150"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-cinematic-800 border-t border-white/5">
            <div className="flex items-center gap-2 bg-cinematic-900 border border-white/10 px-3 py-3 focus-within:border-gold-500 transition-colors">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Escriba su consulta..."
                className="flex-1 bg-transparent text-sm text-cream-100 focus:outline-none placeholder-white/30 font-light"
                disabled={isLoading}
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="text-gold-500 hover:text-gold-400 disabled:opacity-50 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gold-500 flex items-center justify-center text-cinematic-900 hover:bg-cream-100 transition-all duration-300 shadow-lg shadow-gold-500/10 group"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} className="group-hover:scale-110 transition-transform" />}
      </button>
    </div>
  );
};

export default ChatWidget;
