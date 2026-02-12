import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Search, Smartphone, TrendingUp, Users, Award, Globe } from 'lucide-react';
import Particles from './Particles';

import { motion } from 'framer-motion';

const FloatingShape = ({ className, delay }) => (
  <motion.div
    className={`absolute rounded-full opacity-20 mix-blend-multiply filter blur-xl ${className}`}
    animate={{
      y: [0, -20, 0],
      x: [0, 10, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut",
    }}
  />
);

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
    <section className="relative bg-white text-gray-900 py-20 lg:py-32 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-200/40 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob" />
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-green-200/40 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] bg-teal-200/40 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob animation-delay-4000" />
          
          {/* Small Floating Shapes */}
          <FloatingShape className="w-24 h-24 bg-blue-300 top-20 left-[10%]" delay={0} />
          <FloatingShape className="w-32 h-32 bg-green-300 bottom-20 right-[10%]" delay={1} />
          <FloatingShape className="w-16 h-16 bg-cyan-300 top-1/2 left-[5%]" delay={2} />
          
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
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-green-100 bg-green-50/50 backdrop-blur-sm mb-6 text-sm font-medium text-green-600">
                <span className="flex h-2 w-2 rounded-full bg-green-600 mr-2 animate-pulse"></span>
                WebBloom
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight text-gray-900">
              Transform your <br className="hidden lg:block"/>
              <TypingText text="digital presence" className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-500 to-green-500 animate-gradient-x" />
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              We design and develop premium websites that capture attention and convert visitors into loyal customers.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-12">
              <Link
                to="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all overflow-hidden hover:brightness-110"
              >
                  <span className="relative z-10 flex items-center">
                    Get Started <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
              </Link>
              <Link
                to="/portfolio"
                className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-bold text-lg hover:border-green-500 hover:text-green-600 hover:bg-green-50 transition-all shadow-sm hover:shadow-md flex items-center justify-center lg:justify-start"
              >
                View Work
              </Link>
            </div>

            {/* Trust Metrics */}
            <motion.div 
                className="flex items-center justify-center lg:justify-start space-x-8 border-t border-gray-100 pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
               <motion.div whileHover={{ scale: 1.05 }} className="cursor-default">
                   <p className="text-3xl font-bold text-gray-900">50+</p>
                   <p className="text-sm text-gray-500 font-medium">Projects Done</p>
               </motion.div>
               <div className="h-10 w-px bg-gray-200"></div>
               <motion.div whileHover={{ scale: 1.05 }} className="cursor-default">
                   <p className="text-3xl font-bold text-gray-900">98%</p>
                   <p className="text-sm text-gray-500 font-medium">Satisfaction</p>
               </motion.div>
                <div className="h-10 w-px bg-gray-200"></div>
               <motion.a 
                   href="https://wa.me/918304968724"
                   target="_blank"
                   rel="noopener noreferrer"
                   whileHover={{ scale: 1.05 }} 
                   className="cursor-pointer block text-center group"
               >
                   <div className="flex items-center justify-center gap-2">
                       <p className="text-3xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">24/7</p>
                       <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-green-500">
                           <path d="M12.0004 2c-5.5228 0-10 4.47715-10 10 0 1.7913.48316 3.4727 1.32896 4.9358l-1.32896 4.8624 4.97637-1.3259c1.4251.7981 3.0673 1.2577 4.8236 1.2577 5.5229 0 10-4.4772 10-10 0-5.52285-4.4771-10-10-10zm0 1.66667c4.6019 0 8.3333 3.73145 8.3333 8.33333 0 4.6019-3.7314 8.3333-8.3333 8.3333-1.4589 0-2.8256-.3767-4.0175-1.034l-.2869-.1581-2.97235.792.80996-2.9067-.16807-.2918c-.73273-1.2721-1.15181-2.7303-1.15181-4.2847 0-4.60188 3.73143-8.33333 8.33337-8.33333zm4.5826 11.23333c-.1933.5433-.9908 1.05-1.6041 1.0967-.4067.0308-.8717.0608-2.6175-.6575-1.9617-.8067-3.2375-2.8134-3.3375-2.9467-.1.135-.8025 1.0667-.8025 2.0308 0 .8575.4375 1.6708 1.0825 2.0075.0975.05.2125.0808.3333.0808.3842 0 .5842-.2625.7534-.51 0 0 .1516-.24.2691-.4541.1175-.2134.25-.4442.1159-.6934-.1342-.2491-.5642-.6475-.7834-.8458-.2191-.1983-.4375-.2391-.6558-.0408-.2183.1975-.4658.4683-.6658.7458-.2.2775-.4075.525-.2383.8725.17.3475.76.6242 1.3417.8283 2.6641.9325 3.3225.86 3.9116.8042.8725-.0825 1.3117-.79 1.5434-1.2309.2316-.4408.2458-.8575.1741-.9891-.0717-.1309-.2658-.205-0.5592-.3509z" />
                       </svg>
                   </div>
                   <p className="text-sm text-gray-500 font-medium group-hover:text-green-600 transition-colors">Chat Support</p>
               </motion.a>
            </motion.div>
          </motion.div>


          {/* Right Column: Glassmorphism Stats */}
          <motion.div 
            className="flex-1 w-full max-w-lg lg:max-w-none perspective-1000"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative transform rotate-y-12 transition-transform duration-500 hover:rotate-y-0">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-green-200 opacity-70 blur-3xl rounded-full"></div>
              
              <div className="relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-[2rem] p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900">Premium Services</h3>
                        <p className="text-sm text-gray-500">All-in-One Solution</p>
                    </div>
                    <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Award className="h-4 w-4 mr-1" /> Top Quality
                    </div>
                </div>

                <motion.div 
                  className="space-y-6"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.15,
                        delayChildren: 0.4
                      }
                    }
                  }}
                >
                    <motion.div 
                      variants={{
                        hidden: { opacity: 0, x: 20 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                      }}
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.9)" }}
                      className="bg-white/50 p-4 rounded-xl flex items-center border border-white/60 shadow-sm transition-colors cursor-pointer"
                    >
                        <div className="bg-blue-100 p-3 rounded-lg mr-4">
                            <Globe className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Custom Development</p>
                            <p className="text-xl font-bold text-gray-900">Tailored to You</p>
                        </div>
                    </motion.div>

                    <motion.div 
                      variants={{
                        hidden: { opacity: 0, x: 20 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                      }}
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.9)" }}
                      className="bg-white/50 p-4 rounded-xl flex items-center border border-white/60 shadow-sm transition-colors cursor-pointer"
                    >
                         <div className="bg-teal-100 p-3 rounded-lg mr-4">
                            <Smartphone className="h-6 w-6 text-teal-600" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Mobile Responsive</p>
                            <p className="text-xl font-bold text-gray-900">Perfect on Any Device</p>
                        </div>
                    </motion.div>

                    <motion.div 
                      variants={{
                        hidden: { opacity: 0, x: 20 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                      }}
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.9)" }}
                      className="bg-white/50 p-4 rounded-xl flex items-center border border-white/60 shadow-sm transition-colors cursor-pointer"
                    >
                        <div className="bg-green-100 p-3 rounded-lg mr-4">
                            <Search className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">SEO Optimization</p>
                            <p className="text-xl font-bold text-gray-900">Rank Higher</p>
                        </div>
                    </motion.div>
                </motion.div>
              </div>

               {/* Floating elements */}
               <motion.a 
                href="https://wa.me/918304968724"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -top-6 -right-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 z-50 cursor-pointer flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               >
                 <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                     <path d="M12.0004 2c-5.5228 0-10 4.47715-10 10 0 1.7913.48316 3.4727 1.32896 4.9358l-1.32896 4.8624 4.97637-1.3259c1.4251.7981 3.0673 1.2577 4.8236 1.2577 5.5229 0 10-4.4772 10-10 0-5.52285-4.4771-10-10-10zm0 1.66667c4.6019 0 8.3333 3.73145 8.3333 8.33333 0 4.6019-3.7314 8.3333-8.3333 8.3333-1.4589 0-2.8256-.3767-4.0175-1.034l-.2869-.1581-2.97235.792.80996-2.9067-.16807-.2918c-.73273-1.2721-1.15181-2.7303-1.15181-4.2847 0-4.60188 3.73143-8.33333 8.33337-8.33333zm4.5826 11.23333c-.1933.5433-.9908 1.05-1.6041 1.0967-.4067.0308-.8717.0608-2.6175-.6575-1.9617-.8067-3.2375-2.8134-3.3375-2.9467-.1.135-.8025 1.0667-.8025 2.0308 0 .8575.4375 1.6708 1.0825 2.0075.0975.05.2125.0808.3333.0808.3842 0 .5842-.2625.7534-.51 0 0 .1516-.24.2691-.4541.1175-.2134.25-.4442.1159-.6934-.1342-.2491-.5642-.6475-.7834-.8458-.2191-.1983-.4375-.2391-.6558-.0408-.2183.1975-.4658.4683-.6658.7458-.2.2775-.4075.525-.2383.8725.17.3475.76.6242 1.3417.8283 2.6641.9325 3.3225.86 3.9116.8042.8725-.0825 1.3117-.79 1.5434-1.2309.2316-.4408.2458-.8575.1741-.9891-.0717-.1309-.2658-.205-0.5592-.3509z" />
                 </svg>
               </motion.a>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
