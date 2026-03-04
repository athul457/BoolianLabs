import { useParams, Navigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import Lottie from 'lottie-react';
import SEO from '../components/SEO';
import { services } from '../data/servicesData';
import CTA from '../components/CTA';

const ServiceDetailsPage = () => {
  const { id } = useParams();
  const service = services.find(s => s.slug === id);
  const [openAccordion, setOpenAccordion] = useState(null);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="pt-20 md:pt-28 pb-16 min-h-screen bg-slate-50 dark:bg-[#0a0f16] transition-colors duration-500 overflow-hidden relative">
      <SEO 
        title={`${service.title} - Boolean Technologies`} 
        description={service.description}
      />

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[0%] right-[10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute top-[40%] left-[-10%] w-[30%] h-[40%] rounded-full bg-emerald-500/10 blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back Button */}
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
        >
            <Link to="/services" className="inline-flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group">
              <div className="mr-2 p-1.5 rounded-full bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 group-hover:border-blue-200 dark:group-hover:border-blue-800 transition-all">
                <ArrowLeft className="w-4 h-4" />
              </div>
              Back to Services
            </Link>
        </motion.div>

        {/* Header Hero */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 text-blue-600 dark:text-blue-400 font-medium text-xs mb-6 tracking-wide uppercase">
              Service Overview
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-tight tracking-tight">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-light">
              {service.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center items-center h-64 md:h-80"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-emerald-500/20 rounded-full blur-3xl transform opacity-50 dark:opacity-30"></div>
             <Lottie 
                animationData={service.animation}
                className="w-full h-full max-w-[300px] drop-shadow-2xl relative z-10"
              />
          </motion.div>
        </div>

        <motion.div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent mb-16" />

        {/* Dropdown Menus (Accordion) */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8"
          >
            Capabilities Included
          </motion.h2>

          <div className="space-y-4">
            {service.subServices && service.subServices.map((sub, index) => {
              const isOpen = openAccordion === index;
              return (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={index}
                  className={`bg-white dark:bg-[#111824] border ${isOpen ? 'border-blue-500/50 dark:border-blue-500/50 shadow-md' : 'border-gray-200 dark:border-gray-800 shadow-sm hover:border-gray-300 dark:hover:border-gray-700'} rounded-2xl overflow-hidden transition-all duration-300`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-5 flex items-center justify-between focus:outline-none"
                  >
                    <div className="flex items-center text-left">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 transition-colors ${isOpen ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-600' : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400'}`}>
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <span className={`text-lg font-semibold transition-colors ${isOpen ? 'text-blue-600 dark:text-blue-400' : 'text-gray-900 dark:text-white'}`}>
                        {sub.title}
                      </span>
                    </div>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-500' : ''}`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0 ml-14">
                           {sub.image && (
                             <div className="mb-6 rounded-xl overflow-hidden relative h-48 sm:h-64 w-full shadow-md border border-gray-100 dark:border-gray-800">
                               <img src={sub.image} alt={sub.title} className="w-full h-full object-cover" />
                               {sub.tags && (
                                 <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                                   {sub.tags.map((tag, tIdx) => (
                                     <span key={tIdx} className="px-3 py-1 bg-black/60 backdrop-blur-md text-white/90 text-[10px] md:text-xs font-medium rounded-full border border-white/20 tracking-wide uppercase">
                                       {tag}
                                     </span>
                                   ))}
                                 </div>
                               )}
                             </div>
                           )}
                           <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                             {sub.description}
                           </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
      <CTA />
    </div>
  );
};

export default ServiceDetailsPage;
