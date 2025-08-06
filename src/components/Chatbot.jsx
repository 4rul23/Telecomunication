'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import {
  MessageCircle,
  Send,
  Bot,
  User,
  X,
  Signal,
  Antenna,
  Radio,
  Network
} from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      message: 'SYSTEM_INIT >> TelecomBot v1.0 ONLINE | Halo! Saya asisten virtual XII TEL SMK Telkom Makassar.',
      timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Bot responses
  const botResponses = {
    '5g': 'INFO_5G >> Teknologi 5G adalah generasi kelima jaringan seluler dengan kecepatan tinggi dan latensi rendah.',
    'mimo': 'INFO_MIMO >> Multiple Input Multiple Output menggunakan array antena untuk spatial multiplexing.',
    'beamforming': 'INFO_BEAMFORMING >> Teknik adaptive antenna yang mengarahkan sinyal RF ke lokasi spesifik.',
    'smk telkom': 'INFO_SCHOOL >> SMK Telkom Makassar - Pusat Excellence bidang Telekomunikasi & IT.',
    'xii tel': 'INFO_CLASS >> Kelas XII TEL - Spesialisasi Teknik Telekomunikasi.',
    'default': 'ERROR_404 >> Query tidak dikenali. Available topics: [5G, MIMO, Beamforming, SMK_Telkom, XII_TEL].'
  };

  const quickActions = [
    { icon: Signal, text: '5G_TECH', action: '5g' },
    { icon: Antenna, text: 'MIMO_SYS', action: 'mimo' },
    { icon: Radio, text: 'BEAMFORM', action: 'beamforming' },
    { icon: Network, text: 'XII_TEL', action: 'xii tel' }
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (messageText = inputMessage) => {
    if (!messageText.trim()) return;

    const newUserMessage = {
      id: Date.now(),
      type: 'user',
      message: messageText,
      timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const lowerMessage = messageText.toLowerCase();
      let response = botResponses.default;

      Object.keys(botResponses).forEach(key => {
        if (key !== 'default' && lowerMessage.includes(key)) {
          response = botResponses[key];
        }
      });

      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        message: response,
        timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickAction = (action) => {
    handleSendMessage(action);
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  return (
    <>
      {/* Floating Chat Button - Bottom Right */}
      <motion.button
        className={`fixed bottom-6 right-6 w-14 h-14 bg-black/80 hover:bg-black border border-blue-500/30 hover:border-blue-400 text-blue-400 hover:text-blue-300 backdrop-blur-sm shadow-lg z-50 flex items-center justify-center ${isOpen ? 'hidden' : 'block'}`}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
        }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleChatbot}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <motion.div
          animate={{
            rotate: [0, -5, 5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <MessageCircle size={20} />
        </motion.div>

        {/* Notification dot */}
        <motion.div
          className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-blue-500 border border-gray-900"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={toggleChatbot}
          >
            <motion.div
              className="bg-black/90 backdrop-blur-sm border border-blue-500/30 shadow-2xl overflow-hidden w-[600px] h-[450px] max-w-[85vw] max-h-[75vh]"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 400, damping: 35 }}
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-black border-b border-blue-500/20 p-3 flex items-center justify-between sticky top-0 z-10">
                <div className="flex items-center gap-3">
                  <motion.div
                    className="w-6 h-6 bg-gray-900 border border-blue-500/30 flex items-center justify-center"
                    animate={{
                      borderColor: ["rgba(59, 130, 246, 0.3)", "rgba(59, 130, 246, 0.6)", "rgba(59, 130, 246, 0.3)"]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Bot size={12} className="text-blue-400" />
                  </motion.div>
                  <div>
                    <div className="font-bold text-blue-300 text-xs uppercase tracking-wider">TELECOM_BOT.SYS</div>
                    <div className="text-xs text-blue-500/80 uppercase tracking-wider font-mono">ONLINE • XII TEL</div>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <motion.button
                    className="p-1.5 hover:bg-blue-600/20 border border-transparent hover:border-blue-500/30 transition-all duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleChatbot}
                  >
                    <X size={12} className="text-blue-400" />
                  </motion.button>
                </div>
              </div>

              {/* Chat Content */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="h-full flex flex-col"
              >
                {/* Messages Area */}
                <div className="flex-1 p-4 overflow-y-auto space-y-3">
                  {messages.map((msg) => (
                        <motion.div
                          key={msg.id}
                          initial={{ opacity: 0, y: 15, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ type: "spring", stiffness: 600, damping: 40 }}
                          className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`flex items-start gap-2 max-w-[75%] ${msg.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                            <div
                              className={`w-5 h-5 border flex items-center justify-center flex-shrink-0 ${
                                msg.type === 'user'
                                  ? 'bg-black border-blue-500/40'
                                  : 'bg-gray-900 border-blue-500/30'
                              }`}
                            >
                              {msg.type === 'user' ? (
                                <User size={10} className="text-blue-400" />
                              ) : (
                                <Bot size={10} className="text-blue-400" />
                              )}
                            </div>

                            <div
                              className={`px-3 py-2 border text-xs leading-relaxed ${
                                msg.type === 'user'
                                  ? 'bg-black border-blue-500/30 text-blue-300'
                                  : 'bg-gray-900/80 text-blue-200 border-blue-500/20'
                              }`}
                            >
                              <p>{msg.message}</p>
                              <div className={`text-xs mt-1 font-mono uppercase tracking-wider ${
                                msg.type === 'user' ? 'text-blue-500/60' : 'text-blue-400/60'
                              }`}>
                                {msg.timestamp}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}

                      {/* Typing Indicator */}
                      <AnimatePresence>
                        {isTyping && (
                          <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex justify-start"
                          >
                            <div className="flex items-start gap-2">
                              <div className="w-5 h-5 bg-gray-900 border border-blue-500/30 flex items-center justify-center">
                                <Bot size={10} className="text-blue-400" />
                              </div>
                              <div className="bg-gray-900/80 border border-blue-500/20 px-3 py-2">
                                <div className="flex space-x-1">
                                  <motion.div
                                    className="w-1.5 h-1.5 bg-blue-400"
                                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                                  />
                                  <motion.div
                                    className="w-1.5 h-1.5 bg-blue-400"
                                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                                  />
                                  <motion.div
                                    className="w-1.5 h-1.5 bg-blue-400"
                                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                                  />
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div ref={messagesEndRef} />
                    </div>

                    {/* Quick Actions */}
                    <div className="p-3 border-t border-blue-500/20 bg-black/60">
                      <div className="text-xs text-blue-400 mb-2 font-mono uppercase tracking-wider">QUICK_ACCESS:</div>
                      <div className="grid grid-cols-2 gap-1">
                        {quickActions.map((action, index) => (
                          <motion.button
                            key={index}
                            className="flex items-center gap-1.5 px-2 py-1.5 bg-gray-900/50 hover:bg-blue-600/20 border border-blue-500/20 hover:border-blue-500/40 text-xs text-blue-400 hover:text-blue-300 transition-all duration-200"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleQuickAction(action.action)}
                          >
                            <action.icon size={12} />
                            <span className="uppercase tracking-wider">{action.text}</span>
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    {/* Input Area */}
                    <div className="p-3 border-t border-blue-500/20 bg-black/60">
                      <div className="flex gap-2">
                        <input
                          ref={inputRef}
                          type="text"
                          value={inputMessage}
                          onChange={(e) => setInputMessage(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                          placeholder=">> TELEKOMUNIKASI QUERY..."
                          className="flex-1 px-2 py-1.5 bg-gray-900/60 border border-blue-500/30 text-xs text-blue-300 placeholder-blue-500/60 focus:outline-none focus:border-blue-500/60 transition-all duration-200 uppercase tracking-wider"
                          disabled={isTyping}
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        />
                        <button
                          onClick={() => handleSendMessage()}
                          disabled={!inputMessage.trim() || isTyping}
                          className="px-2 py-1.5 bg-black border border-blue-500/30 hover:border-blue-500/60 hover:bg-blue-600/20 disabled:bg-gray-900/50 disabled:border-gray-700 disabled:cursor-not-allowed text-blue-400 hover:text-blue-300 transition-all duration-200"
                        >
                          <Send size={12} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
