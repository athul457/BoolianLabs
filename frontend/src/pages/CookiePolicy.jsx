import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cookie, Settings, Info, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';

const CookiePolicy = () => {
  // Ensure page mounts to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 bg-white dark:bg-gray-900 min-h-screen mt-16 transition-colors duration-300">
      <SEO 
        title="Cookie Policy | Boolean Technologies" 
        description="Information about how Boolean Technologies uses cookies to improve your experience on our website." 
        keywords="cookie policy, tracking cookies, user experience, cookie consent, Boolean Technologies"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Cookie Policy</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="space-y-10 text-gray-600 dark:text-gray-300 leading-relaxed">
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Cookie className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                1. What Are Cookies
              </h2>
              <p>
                Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit our website. They are widely used by online service providers to facilitate and help make the interaction between users and websites faster and easier, as well as to provide reporting information. 
              </p>
              <p className="mt-4">
                At <strong>Boolean Technologies</strong>, we use cookies to ensure that we give you the best possible experience on our website, keep our services secure, and analyze how our website performs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Info className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                2. How We Use Cookies
              </h2>
              <p>
                Our website uses both first-party and third-party cookies for several purposes. First-party cookies are primarily necessary for the website to function the right way, and they do not collect any of your personally identifiable data.
              </p>
              <p className="mt-4">
                The third-party cookies used on our website are mainly for evaluating website performance, understanding how you interact with our website, keeping our services secure, providing you with relevant advertisements, and overall providing you with a better and improved user experience that speeds up your future interactions with us.
              </p>
              <p className="mt-4">
                This aligns perfectly with our Privacy Policy which outlines our commitment to not selling your personal data to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <ShieldCheck className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                3. Types of Cookies We Use
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 transition-colors">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Essential Cookies</h3>
                  <p className="text-sm">These are strictly necessary for the website to function properly. They ensure basic functionalities and security features of the website, anonymously. Without these cookies, our site cannot function flawlessly.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 transition-colors">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Functional Cookies</h3>
                  <p className="text-sm">These help to perform certain functionalities like sharing the content of the website on social media platforms, collecting feedbacks, and utilizing other required third-party features.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 transition-colors">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Analytics & Performance</h3>
                  <p className="text-sm">These provide information on how visitors interact with the website. It helps us securely understand metrics such as number of visitors, bounce rate, and traffic source to continuously improve our digital offerings.</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 transition-colors">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Advertisement Cookies</h3>
                  <p className="text-sm">These may be used to provide visitors with customized advertisements based on the pages you visited previously and analyze the effectiveness of the ad campaign.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Settings className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                4. Managing Cookies
              </h2>
              <p>
                You have the right to decide whether to accept or fundamentally control and manage cookies through your browser settings. Please note that removing or blocking cookies can impact your user experience and parts of our website may no longer be fully accessible.
              </p>
              <p className="mt-4">
                Most browsers actively allow you to view, manage, delete and block cookies for a website. Be aware that if you delete all cookies then any preferences you have set will be lost, including the ability to opt-out from cookies as this function itself requires placement of an opt out cookie on your device.
              </p>
            </section>
            
            <div className="mt-16 pt-10 border-t border-gray-200 dark:border-gray-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">5. Contact Information</h3>
              <p className="mb-4">If you have any questions or concerns regarding our use of cookies or this Cookie Policy, please contact us at:</p>
              <div className="space-y-4">
                <p><strong className="text-gray-900 dark:text-white">Company Name:</strong> Boolean Technologies</p>
                <p><strong className="text-gray-900 dark:text-white">Address:</strong> Kerala, India</p>
                <p><strong className="text-gray-900 dark:text-white">Email:</strong> <a href="mailto:contact@booleantechnologies.com" className="text-blue-600 dark:text-blue-400 hover:underline">contact@booleantechnologies.com</a></p>
                <p><strong className="text-gray-900 dark:text-white">Phone:</strong> <a href="tel:+917676074209" className="text-blue-600 dark:text-blue-400 hover:underline">+91 7676074209</a></p>
                <p><strong className="text-gray-900 dark:text-white">Website:</strong> <a href="https://booleantechnologies.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">booleantechnologies.com</a></p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CookiePolicy;
