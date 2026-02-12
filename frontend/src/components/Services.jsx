import { useState } from 'react';
import { services } from '../data/servicesData';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [showAll, setShowAll] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const displayedServices = showAll ? services : services.slice(0, 5);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden" id="services">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>
      
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-semibold text-sm tracking-wide uppercase"
            >
                Our Expertise
            </motion.div>
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight"
            >
                Digital Solutions for <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">Every Business Need</span>
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 leading-relaxed"
            >
                From custom websites to AI-driven marketing, we provide end-to-end services to help your brand grow in the digital landscape.
            </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          layout
        >
          <AnimatePresence>
            {displayedServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div 
                  key={service.title} // Ensure unique key for animations
                  className="group relative bg-white rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 border border-gray-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] overflow-hidden h-full flex flex-col"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  layout
                >
                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-green-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 flex-1 flex flex-col">
                      {/* Icon Container */}
                      <div className="mb-6 relative">
                          <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-green-500 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-blue-500/30">
                              <Icon className="h-7 w-7 text-gray-700 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                          </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                          {service.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-8 leading-relaxed flex-1">
                          {service.description}
                      </p>

                      <div className="pt-6 border-t border-gray-100 group-hover:border-blue-100/50 transition-colors">
                          <Link to="/contact" className="inline-flex items-center text-gray-900 font-semibold text-sm group-hover:text-blue-600 transition-colors group/link">
                              Learn more 
                              <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                          </Link>
                      </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          <motion.div 
            onClick={() => setShowAll(!showAll)}
            className="group relative bg-white rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 border border-dashed border-gray-300 hover:border-blue-300 shadow-sm hover:shadow-md cursor-pointer h-full flex flex-col items-center justify-center min-h-[300px]"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            layout
          >
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors ${showAll ? 'bg-red-50 group-hover:bg-red-100' : 'bg-blue-50 group-hover:bg-blue-100'}`}>
                {showAll ? (
                    <Minus className={`h-8 w-8 ${showAll ? 'text-red-500' : 'text-blue-600'}`} />
                ) : (
                    <Plus className="h-8 w-8 text-blue-600" />
                )}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{showAll ? 'Show Less' : 'View More'}</h3>
            <p className="text-gray-500 text-center text-sm">
                {showAll ? 'Collapse services list' : 'Discover all our premium services'}
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Services;
