import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Particles from '../components/Particles';
import { motion } from 'framer-motion';
import { Award, Users, Globe, TrendingUp } from 'lucide-react';
import SEO from '../components/SEO';
import MeetOurTeam from '../components/MeetOurTeam';

const AboutPage = () => {
  const values = [
    {
      id: "01",
      title: "Excellence",
      description: "We guarantee the highest standards in every project, ensuring we consistently deliver the outcomes you envision."
    },
    {
      id: "02",
      title: "Accountability",
      description: "At Boolean Technologies, we take immense pride in our craft, dedicating ourselves fully to achieving your strategic objectives."
    },
    {
      id: "03",
      title: "Client-Centricity",
      description: "Your success is our top priority. Every member of our team is deeply invested in providing you with unparalleled service."
    },
    {
      id: "04",
      title: "Transparency",
      description: "Transparency is at the heart of our operations. You can depend on our ethical approach and unwavering dedication to quality."
    }
  ];

  return (
    <div className="pt-16 md:pt-20 bg-slate-50 dark:bg-[#0a0f16] transition-colors duration-500 overflow-hidden relative">
      <SEO 
        title="About Us - Boolean Technologies" 
        description="Learn about our mission, vision, and the team driving your digital success."
      />

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[30%] h-[40%] rounded-full bg-emerald-500/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full bg-purple-600/10 blur-[150px]" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden z-10">
         <div className="absolute inset-0 z-0 pointer-events-none opacity-50 dark:opacity-30">
             <Particles
                particleColors={['#3b82f6', '#10b981', '#8b5cf6']}
                particleCount={100}
                particleSpread={20}
                speed={0.15}
             />
         </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <div className="text-left flex flex-col items-start pt-8 lg:pt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 text-blue-600 dark:text-blue-400 font-medium text-sm mb-8 shadow-sm backdrop-blur-md"
              >
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                About Us
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight leading-[1.1]"
              >
                We turn ideas into <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-400 drop-shadow-sm">
                  engaging experiences
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                className="text-lg md:text-xl text-gray-600 dark:text-gray-300/90 leading-relaxed font-light"
              >
                Boolean Technologies empowers businesses worldwide through innovative digital solutions. Rooted in India and operating globally, we deliver tailored strategies that align with your unique technological goals. Our focus is to help organizations scale, modernize, and evolve — transforming bold ideas into measurable success. We are the catalyst behind exceptional digital experiences.
              </motion.p>
            </div>

            <motion.div
                 initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                 animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                 transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                 className="relative perspective-1000 mt-8 lg:mt-0"
            >
                 {/* Glass background effect */}
                 <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-[2.5rem] blur-2xl transform -rotate-3 opacity-50 dark:opacity-30"></div>
                 <div className="absolute inset-0 bg-white/40 dark:bg-white/5 backdrop-blur-3xl rounded-[2rem] border border-white/50 dark:border-white/10 shadow-2xl transform rotate-2"></div>
                 
                 <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                    alt="Team working together" 
                    className="relative rounded-[2rem] shadow-2xl z-10 w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                 />
            </motion.div>
          </div>
        </div>
      </section>

       {/* Story Section */}
       <section className="py-24 relative z-10 border-t border-gray-200/50 dark:border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="relative z-10"
                >
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-emerald-400 mb-8 rounded-full"></div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 text-gray-900 dark:text-white leading-tight tracking-tight">
                        Global Web Design <br className="hidden lg:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-300 dark:from-gray-400 dark:to-gray-600">
                          & Development Experts
                        </span>
                    </h2>
                </motion.div>
                
                <motion.div
                     initial={{ opacity: 0, x: 50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true, margin: "-100px" }}
                     transition={{ duration: 0.7 }}
                     className="space-y-6 text-lg text-gray-600 dark:text-gray-300/90 font-light lg:pt-12"
                >
                    <p className="leading-relaxed">
                        Boolean Technologies is a forward-thinking digital agency delivering innovative web design and development solutions to businesses worldwide. Rooted in India and operating globally, we craft strategic, scalable digital experiences that help brands grow, compete, and lead in the modern marketplace.
                    </p>
                  
                    <p className="leading-relaxed">
                        Our strength lies in combining creativity, technology, and performance-driven strategies. With a passionate team of skilled professionals, we build high-impact websites and digital solutions designed to elevate your brand, accelerate growth, and generate measurable results. Your success is our benchmark, and innovation is at the core of everything we create.
                    </p>
                </motion.div>
            </div>
        </div>
       </section>

       {/* Values Section */}
       <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-100 dark:border-emerald-800/50 text-emerald-600 dark:text-emerald-400 font-medium text-sm mb-6 shadow-sm backdrop-blur-md"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Our Core Values
                </motion.div>
                
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight"
                >
                  Rules to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Live By</span>
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-gray-600 dark:text-gray-300/80 font-light"
                >
                  The foundational principles that guide our actions and decisions every day.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {values.map((value, index) => (
                    <motion.div
                        key={value.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="group relative bg-white dark:bg-[#111824] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 overflow-hidden h-full flex flex-col z-10"
                    >
                        {/* Hover Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Decorative Top Line */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                        <div className="relative z-10 flex flex-col h-full">
                          <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gray-200 to-gray-50 dark:from-gray-800 dark:to-gray-900 mb-6 inline-block select-none transition-transform duration-500 group-hover:scale-110 origin-left">
                              {value.id}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                            {value.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light flex-grow">
                              {value.description}
                          </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
       </section>

      <WhyChooseUs />
      <MeetOurTeam />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default AboutPage;
