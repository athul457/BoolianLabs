import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Lottie from 'lottie-react';
import whatsappAnimation from '../assets/lottie/whatsapp.json';

const WhatsAppChatButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // Hide on contact page
  if (location.pathname === '/contact') {
    return null;
  }

  // Show after a slight scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const phoneNumber = "918714180384"; // Replace with actual WhatsApp number (Added 91 country code for India structure)
  const message = "Hi, I would like to know more about your services!"; // Default message
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 flex items-center group cursor-pointer"
        >
          {/* Chat bubble tooltip */}
          <div className="mr-3 px-4 py-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm font-medium rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">
            Chat with us
            {/* Tooltip triangle */}
            <div className="absolute top-1/2 -right-2 -translate-y-1/2 border-[6px] border-transparent border-l-white dark:border-l-gray-800"></div>
          </div>

          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center hover:scale-110 transition-transform duration-300 relative rounded-full"
            aria-label="Chat with us on WhatsApp"
          >
            <Lottie 
              animationData={whatsappAnimation} 
              loop={true} 
              className="w-full h-full drop-shadow-2xl"
            />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppChatButton;
