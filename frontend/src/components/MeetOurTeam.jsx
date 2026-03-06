import { motion } from 'framer-motion';
import { Linkedin, ChevronLeft, ChevronRight, Globe } from 'lucide-react';
import { teamMembers } from '../data/meetTeam';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Keyboard, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const MeetOurTeam = () => {
  return (
    <section className="py-24 relative z-10 bg-white dark:bg-[#0a0f16]">
      <style>
        {`
          .team-swiper {
            padding-bottom: 5rem !important; /* Gap for scrollbar and arrows */
          }
          .team-swiper .swiper-pagination {
            bottom: 0 !important;
          }
          .team-swiper .swiper-pagination-bullet {
            background-color: #9ca3af;
            opacity: 0.5;
            transition: all 0.3s ease;
            width: 10px;
            height: 10px;
          }
          .team-swiper .swiper-pagination-bullet-active {
            background-color: #3b82f6;
            opacity: 1;
            width: 24px;
            border-radius: 9999px;
          }
          .dark .team-swiper .swiper-pagination-bullet {
            background-color: #4b5563;
          }
          .dark .team-swiper .swiper-pagination-bullet-active {
            background-color: #3b82f6;
          }
        `}
      </style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 text-blue-600 dark:text-blue-400 font-medium text-sm mb-6 shadow-sm backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Our Team
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight"
          >
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Team</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300/80 font-light"
          >
            A passionate team of innovators, creators, and strategists dedicated to your digital success.
          </motion.p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination, Keyboard, Navigation]}
            spaceBetween={32}
            slidesPerView={1}
            grabCursor={true}
            keyboard={{ enabled: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
              el: '.team-pagination',
            }}
            navigation={{
              nextEl: '.team-next',
              prevEl: '.team-prev',
            }}
            className="pb-16 px-2 team-swiper relative"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index} className="h-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
                  className="group relative max-w-[370px] sm:max-w-none mx-auto bg-white dark:bg-[#111824] rounded-2xl sm:rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800 overflow-hidden flex flex-col h-full"
                >
                  {/* Hover Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  
                  <div className="w-full h-64 sm:h-56 relative overflow-hidden bg-gray-50 dark:bg-gray-800/50 select-none">
                    {member.image ? (
                      <img src={member.image} alt={member.name} draggable={false} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-gray-800 dark:to-gray-900 group-hover:scale-105 transition-transform duration-700 select-none">
                        <span className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-indigo-600 opacity-20 uppercase">
                          {member.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    
                    {/* Social/Portfolio Links Overlay */}
                    <div className="absolute top-4 right-4 z-20 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 transform md:translate-y-2 md:group-hover:translate-y-0 flex flex-col gap-2">
                      {member.linkedin && (
                        <a 
                          href={member.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-colors duration-300 shadow-xl"
                        >
                          <Linkedin size={20} className="sm:w-[22px] sm:h-[22px]" />
                        </a>
                      )}
                      
                      {member.portfolio && (
                        <a 
                          href={member.portfolio} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md text-pink-600 dark:text-pink-400 hover:bg-pink-600 hover:text-white dark:hover:bg-pink-500 dark:hover:text-white transition-colors duration-300 shadow-xl"
                          title="View Portfolio"
                        >
                          <Globe size={20} className="sm:w-[22px] sm:h-[22px]" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-grow relative z-10 bg-white dark:bg-[#111824] border-t border-gray-100 dark:border-gray-800/50">
                    {/* Decorative Line */}
                    <div className="w-10 sm:w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-4 sm:mb-6 transform origin-left transition-transform duration-500 group-hover:scale-x-150"></div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium text-xs sm:text-sm md:text-base mb-2 sm:mb-3 line-clamp-1">
                      {member.role}
                    </p>
                    {member.description && (
                      <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm line-clamp-3 mb-4">
                        {member.description}
                      </p>
                    )}

                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Controls Container */}
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between z-20 px-4 h-12 pointer-events-none">
            {/* Centered Pagination */}
            <div className="team-pagination absolute left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-auto" />
            
            {/* Right-aligned Navigation Arrows */}
            <div className="flex items-center gap-3 ml-auto pointer-events-auto">
              <button className="team-prev w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111824] text-gray-600 dark:text-gray-300 flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 dark:hover:border-blue-800/50 transition-all duration-300 shadow-sm focus:outline-none">
                <ChevronLeft size={20} />
              </button>
              
              <button className="team-next w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111824] text-gray-600 dark:text-gray-300 flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 dark:hover:border-blue-800/50 transition-all duration-300 shadow-sm focus:outline-none">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
