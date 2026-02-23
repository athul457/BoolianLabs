import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Database, Lock, Globe, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

const PrivacyPolicy = () => {
  // Ensure page mounts to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 bg-white dark:bg-gray-900 min-h-screen mt-16 transition-colors duration-300">
      <SEO 
        title="Privacy Policy | Boolean Technologies" 
        description="Read the official Privacy Policy governing how Boolean Technologies collects and protects your information." 
        keywords="privacy policy, data protection, Boolean Technologies"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="space-y-10 text-gray-600 dark:text-gray-300 leading-relaxed">

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                1. Introduction
              </h2>
              <p>
                This Privacy Policy describes how <strong>Boolean Technologies</strong> ("Company", "we", "our", or "us") collects, uses, stores, and protects your information when you use our website, products, and services.
              </p>
              <p className="mt-4">
                By accessing our website or using our services, you agree to this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                2. Information We Collect
              </h2>
              <p>We may collect the following types of information:</p>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">2.1 Personal Information</h3>
              <p>Information you voluntarily provide, including:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Full Name</li>
                <li>Email Address</li>
                <li>Phone Number</li>
                <li>Company Name</li>
                <li>Address</li>
                <li>Billing Information</li>
                <li>Project Requirements</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">2.2 Technical Information</h3>
              <p>Automatically collected information:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>IP Address</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Operating system</li>
                <li>Pages visited</li>
                <li>Time spent on website</li>
                <li>Cookies and usage data</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">2.3 Project and Business Information</h3>
              <p>Information required to provide services:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Website content and files</li>
                <li>Business documents</li>
                <li>Login credentials (if provided voluntarily)</li>
                <li>Marketing data</li>
                <li>Software requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                3. How We Use Your Information
              </h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Provide website, software, ERP, mobile app, AI, and marketing services</li>
                <li>Communicate with you regarding projects and support</li>
                <li>Process payments and invoices</li>
                <li>Improve our services and website</li>
                <li>Provide customer support</li>
                <li>Send service-related notifications</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="mt-4 font-semibold text-gray-900 dark:text-white">
                We do NOT sell your personal data to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                4. Cookies and Tracking Technologies
              </h2>
              <p>We use cookies to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Improve website performance</li>
                <li>Analyze user behavior</li>
                <li>Enhance user experience</li>
              </ul>
              <p className="mt-4">
                You can disable cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                5. How We Protect Your Information
              </h2>
              <p>We implement appropriate security measures, including:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Secure servers</li>
                <li>Data encryption where applicable</li>
                <li>Access control and authentication</li>
                <li>Restricted access to authorized personnel only</li>
              </ul>
              <p className="mt-4 text-gray-500 dark:text-gray-400 italic">
                However, no system is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Globe className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                6. Sharing of Information
              </h2>
              <p>We may share your information only in the following cases:</p>
              
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">With Service Providers</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Hosting providers</li>
                <li>Payment processors</li>
                <li>Cloud service providers</li>
                <li>Marketing tools</li>
              </ul>
              <p className="mt-2 text-sm italic">These providers are required to protect your data.</p>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">Legal Requirements</h3>
              <p>We may disclose information if required by law or government authorities.</p>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">Business Transfers</h3>
              <p>In case of merger, acquisition, or business transfer, your information may be transferred.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Database className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                7. Data Retention
              </h2>
              <p>We retain your information:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>As long as necessary to provide services</li>
                <li>For legal, accounting, or reporting purposes</li>
                <li>Until you request deletion (where legally allowed)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Lock className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                8. Client Data Confidentiality
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>We treat all client project data, files, and business information as confidential.</li>
                <li>We do not share, sell, or disclose client data without permission, except as required for service delivery.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                9. AI and Automation Data
              </h2>
              <p>For AI and automation services:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Client data may be processed by AI systems to deliver requested functionality</li>
                <li>We do not use client proprietary data for training public AI models unless explicitly permitted</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                10. Your Rights
              </h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Access your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, contact us at: <br/>
                <a href="mailto:contact@booleantechnologies.com" className="text-blue-600 dark:text-blue-400 hover:underline">contact@booleantechnologies.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                11. Third-Party Links
              </h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for their privacy practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                12. Payment Information
              </h2>
              <p>
                We do not store sensitive payment information such as card numbers. Payments are processed through secure third-party payment providers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                13. Children's Privacy
              </h2>
              <p>
                Our services are not intended for individuals under the age of 18. We do not knowingly collect data from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                14. International Data Transfer
              </h2>
              <p>
                Your data may be stored or processed on servers located outside India. We ensure appropriate data protection measures.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                15. Changes to Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy at any time. Updated versions will be posted on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <CheckCircle2 className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                17. Consent
              </h2>
              <p>
                By using our website and services, you consent to this Privacy Policy.
              </p>
            </section>

            <div className="mt-16 pt-10 border-t border-gray-200 dark:border-gray-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">16. Contact Information</h3>
              <p className="mb-4">If you have any questions about this Privacy Policy, contact:</p>
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

export default PrivacyPolicy;
