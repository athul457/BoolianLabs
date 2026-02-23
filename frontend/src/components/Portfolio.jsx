import { useRef, useState, useEffect } from 'react';
import { portfolio } from '../data/portfolioData';
import { ExternalLink, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const sectionRef = useRef(null);
  
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll functionality
  useEffect(() => {
    let intervalId;

    if (!isPaused) {
      intervalId = setInterval(() => {
        const nextIndex = (activeIndex + 1) % portfolio.length;
        scrollToSlide(nextIndex);
      }, 5000); // Scroll every 5 seconds
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [activeIndex, isPaused]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
        const handleScroll = () => {
            const firstChild = container.firstElementChild;
            if (!firstChild) return;
            
            // Calculate item width including gap (32px = 2rem)
            const itemWidth = firstChild.clientWidth;
            const gap = 32;
            const scrollPos = container.scrollLeft;
            
            const index = Math.round(scrollPos / (itemWidth + gap));
            // Only update active index if it's different to avoid loop issues
            if (index !== activeIndex) {
               setActiveIndex(index);
            }
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [activeIndex]);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const firstChild = container.firstElementChild;
      const scrollAmount = firstChild ? firstChild.clientWidth + 32 : 400;
      
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollToSlide = (index) => {
    const container = scrollContainerRef.current;
    if (container) {
        const firstChild = container.firstElementChild;
        const scrollAmount = firstChild ? firstChild.clientWidth + 32 : 0;
        
        container.scrollTo({
            left: index * scrollAmount,
            behavior: 'smooth'
        });
        setActiveIndex(index);
    }
  };

  return (
    <section ref={sectionRef} className="relative bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-12 md:py-16 lg:py-20 overflow-hidden transition-colors duration-300" id="portfolio">
      {/* Removed Dynamic Background */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-16 gap-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-100 dark:border-blue-900 bg-blue-50/50 dark:bg-blue-900/30 backdrop-blur-sm mb-6 text-sm font-medium text-blue-600 dark:text-blue-400">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 mr-2 animate-pulse"></span>
                Our Work
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-gray-900 dark:text-white">
              <span className="text-blue-600 dark:text-blue-400">Selected Projects</span>
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
              We build digital experiences that drive growth, engagement, and results for forward-thinking brands.
            </p>
          </div>
          
    
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-8 pb-12 scroll-smooth scrollbar-hide snap-x snap-mandatory perspective-1000 px-2"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {portfolio.map((project, index) => (
            <div 
              key={project.id} 
              className="w-[400px] flex-shrink-0 snap-center group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-[2rem] overflow-hidden border border-gray-200 dark:border-gray-700 shadow-xl transition-all h-full flex flex-col">
                <div className="relative overflow-hidden h-64 p-3">
                   <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative shadow-md">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      loading="lazy"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                        {project.liveLink && (
                        <a 
                            href={project.liveLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-white/90 backdrop-blur-sm text-gray-900 px-6 py-2 rounded-full font-bold text-sm flex items-center hover:bg-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-lg"
                        >
                            Visit Site <ExternalLink className="ml-2 h-3 w-3" />
                        </a>
                        )}
                    </div>
                   </div>
                </div>
                
                <div className="p-8 pt-4 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="mb-4">
                        <span className="px-3 py-1 rounded-full bg-blue-100/50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
                            {project.category}
                        </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                        {project.description}
                    </p>
                  </div>
                  
                  {/* <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold group/link cursor-pointer">
                    <span className="mr-2">View Case Study</span>
                    <ArrowRight className="h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Pagination Line */}
        <div className="text-center mb-10 md:mb-20">
            <div className="flex space-x-2 inline-flex">
                {portfolio.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollToSlide(index)}
                        className={`transition-all duration-300 rounded-full h-2 ${
                            index === activeIndex 
                            ? 'w-10 bg-blue-600' 
                            : 'w-2 bg-gray-300 hover:bg-blue-400'
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

export default Portfolio;
