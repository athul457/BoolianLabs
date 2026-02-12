import { blogs } from '../data/blogData';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden" id="blog">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 mb-6 rounded-full bg-purple-50 border border-purple-100 text-purple-600 font-semibold text-sm tracking-wide uppercase"
                    >
                        Our Blog
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
                    >
                        Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Insights</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-2xl mx-auto"
                    >
                        Stay updated with the latest trends in technology, design, and digital marketing.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <motion.div
                            key={blog.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img 
                                    src={blog.image} 
                                    alt={blog.title} 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900 shadow-sm flex items-center">
                                    <Tag className="w-3 h-3 mr-1 text-purple-600" />
                                    {blog.category}
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                                     <div className="flex items-center">
                                        <Calendar className="w-4 h-4 mr-1 text-gray-400" />
                                        {blog.date}
                                     </div>
                                     <div className="flex items-center">
                                        <User className="w-4 h-4 mr-1 text-gray-400" />
                                        {blog.author}
                                     </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors leading-tight">
                                    {blog.title}
                                </h3>

                                <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                                    {blog.description}
                                </p>

                                <Link to="#" className="inline-flex items-center text-purple-600 font-bold hover:text-purple-800 transition-colors group/link mt-auto">
                                    Read Article <ArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* <div className="mt-16 text-center">
                    <Link to="/blog" className="inline-flex items-center px-8 py-3 bg-gray-900 text-white font-bold rounded-full hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all">
                        View All Articles <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                </div> */}
            </div>
        </section>
    );
};

export default Blog;
