'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const TeamModal = ({ isOpen, onClose, onTeamDataChange }) => {
  const handleFactChange = (fact) => {
    if (onTeamDataChange) {
      onTeamDataChange(fact);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-6 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            exit={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
            className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl border border-gray-200 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 bg-gray-100 hover:bg-gray-200 rounded-full shadow-sm"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={16} className="text-gray-600" />
            </motion.button>

            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Team Information
              </h2>
              <p className="text-gray-600 mb-6">
                Click "Team Info" tab in the main navigation to view creator details and fun facts.
              </p>
              <motion.button
                onClick={onClose}
                className="px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Got it!
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TeamModal;
