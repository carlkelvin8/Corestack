'use client';

import { useState, useRef, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const quickPrompts = [
  'What services do you offer?',
  'Tell me about your team',
  'What projects have you done?',
  'How can I start a project?',
];

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: '👋 Hi! I\'m CoreStack AI. Ask me anything about our services, team, projects, or process.' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  async function sendMessage(content: string) {
    if (!content.trim() || loading) return;

    const userMsg: Message = { role: 'user', content: content.trim() };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updated }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
    } catch {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I hit an error. Please email corestacktechnologiesph@gmail.com for help.'
      }]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  }

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 ${
          isOpen
            ? 'bg-surface-variant text-on-surface-variant rotate-90'
            : 'bg-primary text-on-primary'
        }`}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        <span className="material-symbols-outlined text-[28px]">
          {isOpen ? 'close' : 'smart_toy'}
        </span>
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-32px)] rounded-2xl shadow-2xl border border-outline-variant/30 flex flex-col transition-all duration-300 origin-bottom-right ${
          isOpen
            ? 'opacity-100 scale-100 pointer-events-auto'
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
        style={{
          height: '520px',
          backgroundColor: 'var(--color-surface)',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-outline-variant/20 rounded-t-2xl" style={{ backgroundColor: 'var(--color-primary)' }}>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-on-primary/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]" style={{ color: 'var(--color-on-primary)' }}>smart_toy</span>
            </div>
            <div>
              <div className="font-semibold text-sm" style={{ color: 'var(--color-on-primary)' }}>CoreStack AI</div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-success-green animate-pulse"></span>
                <span className="text-[10px]" style={{ color: 'var(--color-on-primary)' }}>Online</span>
              </div>
            </div>
          </div>
          <button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-on-primary/20 transition-colors"
            aria-label="Toggle theme"
            style={{ color: 'var(--color-on-primary)' }}
          >
            <span className="material-symbols-outlined text-[18px]">
              {theme === 'light' ? 'dark_mode' : 'light_mode'}
            </span>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'rounded-br-md'
                    : 'rounded-bl-md'
                }`}
                style={{
                  backgroundColor: msg.role === 'user' ? 'var(--color-primary)' : 'var(--color-surface-container)',
                  color: msg.role === 'user' ? 'var(--color-on-primary)' : 'var(--color-on-surface)',
                }}
              >
                {msg.content.split('\n').map((line, j) => (
                  <span key={j}>
                    {line}
                    {j < msg.content.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="rounded-2xl rounded-bl-md px-4 py-3 flex items-center gap-1" style={{ backgroundColor: 'var(--color-surface-container)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-bounce" style={{ animationDelay: '0ms' }}></span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-bounce" style={{ animationDelay: '150ms' }}></span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-bounce" style={{ animationDelay: '300ms' }}></span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Prompts */}
        {messages.length === 1 && (
          <div className="px-4 pb-2 flex flex-wrap gap-1.5">
            {quickPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => sendMessage(prompt)}
                className="text-[11px] px-2.5 py-1 rounded-full border transition-colors hover:bg-primary/10"
                style={{
                  borderColor: 'var(--color-outline-variant)',
                  color: 'var(--color-on-surface-variant)',
                }}
              >
                {prompt}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="p-3 border-t border-outline-variant/20">
          <div className="flex items-center gap-2 rounded-xl px-3 py-1" style={{ backgroundColor: 'var(--color-surface-container)' }}>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about CoreStack..."
              className="flex-1 bg-transparent text-sm py-2 outline-none"
              style={{ color: 'var(--color-on-surface)' }}
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={!input.trim() || loading}
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors disabled:opacity-40"
              style={{ backgroundColor: input.trim() ? 'var(--color-primary)' : 'transparent', color: input.trim() ? 'var(--color-on-primary)' : 'var(--color-on-surface-variant)' }}
            >
              <span className="material-symbols-outlined text-[18px]">send</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
