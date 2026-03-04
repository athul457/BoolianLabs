import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Search, Smartphone, TrendingUp, Users, Award, Globe } from 'lucide-react';
import Particles from './Particles';

import { motion } from 'framer-motion';
import WhatsAppIcon from './WhatsAppIcon';


const TypingText = ({ text, className }) => {
  // Split text into letters
  const letters = Array.from(text);
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      style={{ overflow: "hidden", display: "inline-block" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index} style={{ display: "inline-block" }}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

const Hero = () => {
  return (
    <section 
      className="relative bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-48 pb-16 lg:py-32 overflow-hidden transition-colors duration-300 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-white/80 dark:from-slate-900/95 dark:to-slate-900/85 z-0 pointer-events-none transition-colors duration-300"></div>

      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <Particles
              className="absolute inset-0 z-0"
              particleColors={['#2563eb', '#16a34a', '#0d9488']} // Blue, Green, Teal
              particleCount={120}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={150}
              moveParticlesOnHover={true}
              alphaParticles={true}
              disableRotation={false}
          />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: Content */}
          <motion.div 
            className="flex-1 text-left pl-[2px] lg:pl-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-green-100 dark:border-green-900 bg-green-50/50 dark:bg-green-900/30 backdrop-blur-sm mb-6 text-xs md:text-sm font-medium text-green-600 dark:text-green-400">
                <span className="flex h-2 w-2 rounded-full bg-green-600 dark:bg-green-400 mr-2 animate-pulse"></span>
                Boolean Technologies
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight text-gray-900 dark:text-white">
              Transform your <br className="hidden lg:block"/>
              <TypingText text="digital presence" className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-500 to-green-500 animate-gradient-x" />
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              We design and develop premium websites that capture attention and convert visitors into loyal customers.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-start gap-4 mb-12">
              <Link
                to="/contact"
                className="group relative px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-full font-bold text-base md:text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all overflow-hidden hover:brightness-110 flex items-center justify-center sm:justify-start"
              >
                  <span className="relative z-10 flex items-center justify-center">
                    Get a Quote <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
              </Link>
              <Link
                to="/portfolio"
                className="px-6 py-3 md:px-8 md:py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-full font-bold text-base md:text-lg hover:border-green-500 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 transition-all shadow-sm hover:shadow-md flex items-center justify-center sm:justify-start"
              >
                View Work
              </Link>
            </div>

            {/* Trust Metrics */}
            <motion.div 
                className="flex items-center justify-center lg:justify-start space-x-4 md:space-x-8 border-t border-gray-100 dark:border-gray-800 pt-6 md:pt-8 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
               <motion.div whileHover={{ scale: 1.05 }} className="cursor-default text-center">
                   <p className="text-xl md:text-3xl font-bold text-gray-900 dark:!text-white">50+</p>
                   <p className="text-[10px] md:text-sm text-gray-500 dark:!text-gray-300 font-medium whitespace-nowrap">Projects Done</p>
               </motion.div>
               <div className="h-8 md:h-10 w-px bg-gray-200 dark:bg-gray-700"></div>
               <motion.div whileHover={{ scale: 1.05 }} className="cursor-default text-center">
                   <p className="text-xl md:text-3xl font-bold text-gray-900 dark:!text-white">100%</p>
                   <p className="text-[10px] md:text-sm text-gray-500 dark:!text-gray-300 font-medium whitespace-nowrap">Satisfaction</p>
               </motion.div>
                <div className="h-8 md:h-10 w-px bg-gray-200 dark:bg-gray-700"></div>
               <motion.a 
                   href="https://wa.me/917676074209"
                   target="_blank"
                   rel="noopener noreferrer"
                   whileHover={{ scale: 1.05 }} 
                   className="cursor-pointer block text-center group"
               >
                   <div className="flex items-center justify-center gap-1 md:gap-2">
                       <p className="text-xl md:text-3xl font-bold text-green-600 dark:!text-white group-hover:text-green-600 dark:group-hover:!text-green-400 transition-colors">24/7</p>
                       <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-8 md:h-8 text-green-500 dark:text-green-400">
                           <path d="M12.0004 2c-5.5228 0-10 4.47715-10 10 0 1.7913.48316 3.4727 1.32896 4.9358l-1.32896 4.8624 4.97637-1.3259c1.4251.7981 3.0673 1.2577 4.8236 1.2577 5.5229 0 10-4.4772 10-10 0-5.52285-4.4771-10-10-10zm0 1.66667c4.6019 0 8.3333 3.73145 8.3333 8.33333 0 4.6019-3.7314 8.3333-8.3333 8.3333-1.4589 0-2.8256-.3767-4.0175-1.034l-.2869-.1581-2.97235.792.80996-2.9067-.16807-.2918c-.73273-1.2721-1.15181-2.7303-1.15181-4.2847 0-4.60188 3.73143-8.33333 8.33337-8.33333zm4.5826 11.23333c-.1933.5433-.9908 1.05-1.6041 1.0967-.4067.0308-.8717.0608-2.6175-.6575-1.9617-.8067-3.2375-2.8134-3.3375-2.9467-.1.135-.8025 1.0667-.8025 2.0308 0 .8575.4375 1.6708 1.0825 2.0075.0975.05.2125.0808.3333.0808.3842 0 .5842-.2625.7534-.51 0 0 .1516-.24.2691-.4541.1175-.2134.25-.4442.1159-.6934-.1342-.2491-.5642-.6475-.7834-.8458-.2191-.1983-.4375-.2391-.6558-.0408-.2183.1975-.4658.4683-.6658.7458-.2.2775-.4075.525-.2383.8725.17.3475.76.6242 1.3417.8283 2.6641.9325 3.3225.86 3.9116.8042.8725-.0825 1.3117-.79 1.5434-1.2309.2316-.4408.2458-.8575.1741-.9891-.0717-.1309-.2658-.205-0.5592-.3509z" />
                       </svg>
                   </div>
                   <p className="text-[10px] md:text-sm text-gray-500 dark:!text-gray-300 font-medium group-hover:text-green-600 dark:group-hover:!text-green-400 transition-colors whitespace-nowrap">Chat Support</p>
               </motion.a>
            </motion.div>
          </motion.div>


          {/* Right Column: 3D Lottie Animation */}
          <motion.div 
            className="hidden lg:flex flex-1 w-full justify-center items-center perspective-1000"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-lg lg:max-w-none transform transition-transform duration-700 hover:scale-105">
               {/* Decorative glow behind 3D object */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/30 blur-[100px] rounded-full pointer-events-none"></div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-teal-500/20 blur-[80px] rounded-full pointer-events-none"></div>
               
               {/* Removed Lottie Animation */}

               {/* Floating WhatsApp element */}
               {/* <motion.a 
                href="https://wa.me/917676074209"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-10 -right-6 md:top-20 md:-right-8 transition-all duration-300 z-50 cursor-pointer flex flex-col items-center justify-center hover:scale-110 drop-shadow-2xl group"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               >
                 <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-bold px-3 py-1.5 rounded-lg pointer-events-none shadow-xl">
                   Chat with us
                   <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-white rotate-45"></div>
                 </div>
                 <div className="rounded-full overflow-hidden flex items-center justify-center border-2 border-white/20 shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                   <WhatsAppIcon className="w-12 h-12 md:w-16 md:h-16" />
                 </div>
               </motion.a> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

