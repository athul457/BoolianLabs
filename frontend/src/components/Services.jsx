import { services } from "../data/servicesData";
import { motion, useInView } from "framer-motion";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { useState, useRef } from "react";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
// For the glassmorphic background visuals and icons based on index
const bgColors = [
  "from-blue-500/30 to-purple-500/30",
  "from-emerald-500/30 to-teal-500/30",
  "from-orange-500/30 to-red-500/30",
  "from-pink-500/30 to-rose-500/30",
  "from-indigo-500/30 to-cyan-500/30",
  "from-yellow-500/30 to-amber-500/30",
];

const borderColors = [
  "group-hover:border-blue-500/50",
  "group-hover:border-emerald-500/50",
  "group-hover:border-orange-500/50",
  "group-hover:border-pink-500/50",
  "group-hover:border-indigo-500/50",
  "group-hover:border-yellow-500/50",
];

const iconColors = [
  "text-blue-600 dark:text-blue-400",
  "text-emerald-600 dark:text-emerald-400",
  "text-orange-600 dark:text-orange-400",
  "text-pink-600 dark:text-pink-400",
  "text-indigo-600 dark:text-indigo-400",
  "text-yellow-600 dark:text-yellow-400",
];

const ServiceRow = ({ service, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "400px 0px" });
  
  // Determine if image/icon is on Left (even) or Right (odd) on large screens
  const isEven = index % 2 === 0;
  const colorIndex = index % bgColors.length;
  
  return (
    <Link to={`/services/${service.slug}`} className="block h-full group focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-[2rem] relative z-10 cursor-pointer">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className={`relative h-full flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 lg:gap-16 items-center justify-between p-6 md:p-8 lg:p-12 w-full bg-white dark:bg-gray-800/60 rounded-[2rem] border border-gray-100 dark:border-gray-700/50 shadow-xl group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 overflow-hidden transform-gpu will-change-transform group-hover:-translate-y-2`}
      >
      {/* Glow effect behind the card internally */}
      <div className={`absolute top-1/2 ${isEven ? 'left-1/4' : 'right-1/4'} -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-tr ${bgColors[colorIndex]} blur-[100px] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none`} />

      {/* Visual Presentation Side */}
      <div className="w-full lg:w-[40%] flex justify-center items-center relative z-10">
        <motion.div
           whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
           transition={{ duration: 0.5 }}
           className="w-32 h-32 md:w-64 md:h-64 flex items-center justify-center transform-gpu"
        >
          {isInView ? (
            <Lottie 
              animationData={service.animation}
              loop={true}
              className="w-full h-full drop-shadow-2xl"
            />
          ) : null}
        </motion.div>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-[60%] flex flex-col justify-center space-y-4 lg:space-y-6 relative z-10">
        <div>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-gray-800 text-[10px] lg:text-xs font-bold text-blue-600 dark:text-blue-400 mb-4 uppercase tracking-widest border border-blue-100 dark:border-gray-700/80">
            Service 0{index + 1}
          </div>
          <h3 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 lg:mb-4 leading-tight font-outfit">
            {service.title}
          </h3>
          <p className="text-sm md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Deliverables List (Shows all) */}
        {service.subServices && (
          <div className="mt-auto pt-5 lg:pt-6 border-t border-gray-100 dark:border-gray-700/50">
            <h4 className="text-[11px] lg:text-sm font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">Key Deliverables</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
              {service.subServices.map((sub, i) => (
                <div key={i} className="flex items-start">
                  <CheckCircle2 className={`w-4 h-4 lg:w-6 lg:h-6 ${iconColors[colorIndex]} mr-2.5 flex-shrink-0 mt-0.5`} strokeWidth={2.5}/>
                  <span className="text-[13px] lg:text-base text-gray-700 dark:text-gray-300 font-medium leading-tight">{sub.title}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Explore Button (Desktop only for cleanliness) */}
        <div className="hidden lg:flex mt-6 items-center font-semibold text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          <span className="mr-2">Explore Service</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </motion.div>
  </Link>
  );
};

const Services = () => {
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setMobileActiveIndex(index);
    }
  };

  const scrollToSlide = (index) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * scrollRef.current.clientWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 md:py-32 bg-white dark:bg-gray-900 relative transition-colors duration-300 overflow-hidden" id="services">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02] dark:opacity-[0.04] pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Huge Premium Header */}
        <div className="text-center mb-16 lg:mb-24 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-100 dark:border-blue-900 bg-blue-50/50 dark:bg-blue-900/20 backdrop-blur-sm mb-6"
          >
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Our Expertise</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 lg:mb-8 font-outfit tracking-tight leading-tight"
          >
            Capabilities that <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Scale</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto"
          >
            We transform ambitious ideas into digital reality through structured, scalable technology and pristine design architectures.
          </motion.p>
        </div>

        {/* Desktop Zig-Zag Rows & Mobile Carousel */}
        <div className="relative">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex lg:block overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory lg:snap-none scrollbar-hide lg:space-y-48 pb-4 -mx-4 px-4 lg:mx-0 lg:px-0 lg:pb-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service, index) => (
               <div key={index} className="w-full lg:w-auto snap-center px-4 lg:px-0 flex-shrink-0 lg:flex-shrink self-stretch flex items-stretch">
                 <ServiceRow service={service} index={index} />
               </div>
            ))}
          </div>

          {/* Dotted Indicators for Mobile */}
          <div className="lg:hidden flex justify-center mt-8 space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  mobileActiveIndex === index 
                    ? "w-8 bg-blue-600" 
                    : "w-2 bg-gray-300 dark:bg-gray-700"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
