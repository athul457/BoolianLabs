import Blog from '../components/Blog';
import CTA from '../components/CTA';
import Testimonials from '../components/Testimonials';
import Particles from '../components/Particles';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const BlogPage = () => {
  return (
    <div className="pt-16 mt-16 bg-white">
      <SEO 
        title="Our Blog" 
        description="Stay updated with the latest trends in technology, design, and digital marketing." 
        keywords="blog, digital marketing insights, web design trends, tech news"
      />
      <section className="relative text-gray-900 py-24 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
             <Particles
                particleColors={['#8b5cf6', '#ec4899', '#e2e8f0']}
                particleCount={100}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={true}
                disableRotation={false}
            />
        </div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-100 rounded-full blur-[100px] opacity-40 -z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-100 rounded-full blur-[100px] opacity-40 -z-10"></div>

        <motion.div 
            className="max-w-7xl mx-auto px-4 relative z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
        >
             <span className="bg-purple-50 text-purple-600 px-4 py-1.5 rounded-full font-bold uppercase tracking-wider text-sm border border-purple-100 mb-6 inline-block">
                Latest Insights
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-gray-900">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Expert articles, industry news, and tips to help your business grow in the digital age.
            </p>
        </motion.div>
      </section>

      <div className="-mt-12 relative z-20">
         <Blog />
      </div>
      <CTA />
    </div>
  );
};

export default BlogPage;
