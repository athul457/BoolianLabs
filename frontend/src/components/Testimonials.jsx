import { useState, useRef, useEffect } from 'react';
import { Quote, Star } from 'lucide-react';
import Particles from './Particles';
import { motion } from 'framer-motion';

const Testimonials = () => {
  // Doubling the array so the auto-scroll is noticeable on desktop with 3 visible cards
  const testimonials = [
    {
      name: "Ubaid",
      role: "CEO of Kissa",
      content: "They built a stunning audiobook platform for us. Our sales increased by 40% in the first month using their custom payment integration.",
    },
    {
      name: "Aswin MS",
      role: "CTO of Templately",
      content: "The new mobile-friendly design is incredible. We've seen a huge jump in mobile traffic and our bounce rate dropped significantly.",
    },
{
  name: "Sirajudheen",
  role: "Biomedical Engineer at Warba",
  content: "Their ERP solution transformed our workflow. Automated reporting, better data visibility, and seamless process management improved our overall efficiency."
},
    {
      name: "Arjun R",
      role: "CFO Lumina Events",
      content: "The MVP they delivered exceeded our expectations. Clean code, great communication, and launched right on schedule.",
    },

    {
      name: "Muneef Hameed",
      role: "CEO of Functionary",
      content: "An amazing custom CRM solution that perfectly fit our school's needs. Replaced three different tools we were using before.",
    }
  ];

  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
        const scrollPosition = scrollRef.current.scrollLeft;
        // The width of one slide + gap. Assuming gap-6 (24px).
        const childNode = scrollRef.current.firstChild;
        const itemWidth = childNode ? childNode.offsetWidth + 24 : 0;
        if (itemWidth > 0) {
           const newIndex = Math.round(scrollPosition / itemWidth);
           setActiveIndex(newIndex);
        }
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollToTestimonial = (index) => {
    if (scrollRef.current) {
        const childNode = scrollRef.current.firstChild;
        const itemWidth = childNode ? childNode.offsetWidth + 24 : 0;
        scrollRef.current.scrollTo({
            left: index * itemWidth,
            behavior: 'smooth'
        });
        setActiveIndex(index);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (scrollRef.current) {
        const childNode = scrollRef.current.firstChild;
        const itemWidth = childNode ? childNode.offsetWidth + 24 : 0;
        const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        
        let nextIndex = activeIndex + 1;
        let nextScrollLeft = nextIndex * itemWidth;

        // If reaching the end, wrap back to start
        if (nextScrollLeft > maxScroll + (itemWidth / 2)) {
            nextIndex = 0;
            nextScrollLeft = 0;
        }

        scrollRef.current.scrollTo({
            left: nextScrollLeft,
            behavior: 'smooth'
        });
        setActiveIndex(nextIndex);
      }
    }, 4000); // 4 seconds auto-scroll delay

    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <section className="py-20 md:py-24 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles
            particleColors={['#2563eb', '#7c3aed', '#94a3b8']}
            particleCount={100}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={200}
            moveParticlesOnHover={true}
            alphaParticles={true}
            disableRotation={false}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Clients Say</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Trusted by fast-growing companies worldwide.
          </motion.p>
        </div>

        <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 pb-4 pt-4 px-4 -mx-4 md:px-0 md:mx-0 w-full"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="min-w-[85vw] md:min-w-[calc(50%-1.5rem)] lg:min-w-[calc(33.333%-1rem)] snap-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700/50 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 h-full"
            >
              <Quote className="h-6 w-6 text-blue-500 mb-4 opacity-40" />
              
              <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
              </div>

              <div className="relative w-full flex-grow mb-6">
                 {/* Invisible placeholder to maintain uniform 3-line height */}
                 <p className="text-sm md:text-base leading-relaxed italic opacity-0 pointer-events-none line-clamp-3">
                   "{testimonial.content}"
                 </p>
                 {/* Expanded text on hover */}
                 <div className="absolute top-0 left-0 w-full text-sm md:text-base text-gray-700 dark:text-gray-200 leading-relaxed italic line-clamp-3 group-hover:line-clamp-none transition-all duration-300 group-hover:bg-white dark:group-hover:bg-gray-800 group-hover:shadow-xl group-hover:p-4 group-hover:-top-4 group-hover:-left-4 group-hover:w-[calc(100%+2rem)] group-hover:z-50 rounded-xl">
                   "{testimonial.content}"
                 </div>
              </div>
              
              <div className="mt-auto">
                <h3 className="text-base font-bold text-gray-900 dark:text-white">{testimonial.name}</h3>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-medium mt-1">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dotted Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => {
                // Determine how many dots to show. On desktop where 3 show, maybe fewer dots, but native scrolling allows index up to N.
                return (
                <button
                    key={index}
                    onClick={() => scrollToTestimonial(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                        activeIndex === index 
                        ? 'w-6 bg-blue-600 dark:bg-blue-500' 
                        : 'w-2 bg-gray-300 dark:bg-gray-700 hover:bg-blue-400 dark:hover:bg-blue-600'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                />
            )})}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
