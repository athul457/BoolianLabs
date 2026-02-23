import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Shield, AlertTriangle, Scale, Gavel, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

const TermsOfService = () => {
  // Ensure page mounts to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 bg-white dark:bg-gray-900 min-h-screen mt-16 transition-colors duration-300">
      <SEO 
        title="Terms of Service | Boolean Technologies" 
        description="Read the official Terms of Service governing the use of Boolean Technologies' website, digital services, AI solutions, and marketing systems." 
        keywords="terms of service, Boolean Technologies, legal agreement, digital services terms, AI services agreement"
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
              Terms of Service
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
                These Terms and Conditions ("Terms") govern the provision of services by <strong>Boolean Technologies</strong>, a digital solutions and technology service provider based in Kerala, India ("Company", "we", "our", or "us").
              </p>
              <p className="mt-4">
                By engaging our services, you ("Client", "you", or "your") agree to be legally bound by these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                2. Services Provided
              </h2>
              <p>We provide professional digital and technology services, including but not limited to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Website Design and Development</li>
                <li>ERP Software Development</li>
                <li>Mobile Application Development (Android, iOS, Web Apps)</li>
                <li>AI Automation Solutions</li>
                <li>Artificial Intelligence Development</li>
                <li>Digital Marketing Services (SEO, SEM, Social Media Marketing, Ads Management)</li>
                <li>UI/UX Design</li>
                <li>Software Maintenance and Support</li>
                <li>Custom Software Solutions</li>
              </ul>
              <p className="mt-4">
                The exact scope of services will be defined in the proposal, quotation, or agreement shared with the Client.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                3. Service Plans and Support Terms
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">3.1 Starter Plan (Low-Cost Products)</h3>
              <p>Products and services offered under the Starter Plan include limited support.</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Free support will be provided for a period of 6 (six) months from the date of delivery.</li>
                <li>After 6 months, no free support, maintenance, or updates will be provided.</li>
                <li>Any support required after 6 months will be considered paid support, and charges will apply.</li>
                <li>Starter Plan products may include limitations in customization, scalability, and integrations.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">3.2 Standard, Professional, and Premium Plans</h3>
              <p>For all plans except Starter Plan:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Free technical support will be provided for up to 2 (two) years from the date of delivery.</li>
                <li>Support includes: Bug fixes, Minor updates, Technical assistance, and Performance guidance.</li>
                <li>Major feature additions, redesign, or new development will be charged separately.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">3.3 Custom Projects</h3>
              <p>For fully custom solutions:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Support duration, scope, and maintenance terms will be defined in the individual agreement or proposal.</li>
                <li>Custom support contracts may include Annual Maintenance Contracts (AMC).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                4. Payment Terms
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>A minimum of 50% advance payment is required before starting any project.</li>
                <li>Remaining payment must be completed before final delivery or deployment unless otherwise agreed.</li>
                <li>Payments once made are non-refundable, except where explicitly agreed in writing.</li>
                <li>Failure to complete payment may result in suspension or termination of services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                5. Project Timeline
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Project timelines will be estimated based on project scope.</li>
                <li>Delays caused by the Client (such as delayed content, approvals, or feedback) may extend delivery timelines.</li>
                <li>The Company is not responsible for delays caused by third-party services, hosting providers, APIs, or external dependencies.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                6. Client Responsibilities
              </h2>
              <p>The Client agrees to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Provide accurate and complete project requirements</li>
                <li>Provide necessary content, images, and information on time</li>
                <li>Review and approve deliverables promptly</li>
                <li>Ensure legality of all provided content</li>
              </ul>
              <p className="mt-4">
                The Company is not responsible for issues caused due to incorrect information provided by the Client.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                7. Revisions and Changes
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Reasonable revisions will be provided as per the project scope.</li>
                <li>Major changes or changes outside the agreed scope will be charged additionally.</li>
                <li>Additional features requested after project approval will be treated as a separate project or add-on.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                8. Third-Party Services and Costs
              </h2>
              <p>The Client is responsible for all third-party costs including but not limited to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Domain registration</li>
                <li>Hosting services</li>
                <li>API subscriptions</li>
                <li>Software licenses</li>
                <li>SMS, email, or cloud services</li>
                <li>Advertising budgets (for digital marketing)</li>
              </ul>
              <p className="mt-4">
                The Company is not responsible for third-party service failures.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                9. Intellectual Property Rights
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Upon full payment, the Client will own the final delivered product.</li>
                <li>The Company retains the right to reuse general frameworks, tools, or non-client-specific components.</li>
                <li>The Company reserves the right to display the completed project in its portfolio.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                10. Support Scope Limitations
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-3">Support includes:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Bug fixes</li>
                        <li>Technical troubleshooting</li>
                    </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-xl border border-red-100 dark:border-red-900/30">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-3">Support does NOT include:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>New features</li>
                        <li>Major redesign</li>
                        <li>Third-party integration changes</li>
                        <li>Server or hosting issues not managed by us</li>
                        <li>Issues caused by client modifications or third parties</li>
                    </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                11. Maintenance and Updates
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Maintenance outside the support period requires a paid maintenance contract.</li>
                <li>The Company is not obligated to provide free maintenance beyond the agreed support period.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                12. Digital Marketing Disclaimer
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>For digital marketing services: The Company does not guarantee specific results such as rankings, traffic, or sales.</li>
                <li>Marketing results depend on market conditions, competition, and platform algorithms.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                13. AI and Automation Services Disclaimer
              </h2>
              <p>AI solutions are based on models and algorithms and may produce varying results.</p>
              <p className="mt-4">The Company does not guarantee:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>100% accuracy</li>
                <li>Error-free automation</li>
                <li>Business outcome guarantees</li>
              </ul>
              <p className="mt-4">
                The Client is responsible for reviewing AI outputs before use.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Scale className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                14. Limitation of Liability
              </h2>
              <p>The Company shall not be liable for:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Any indirect or consequential losses</li>
                <li>Business loss, revenue loss, or data loss</li>
                <li>Damages caused by third-party services</li>
                <li>Misuse of delivered software</li>
              </ul>
              <p className="mt-4 font-semibold">
                Total liability shall not exceed the amount paid for the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                15. Termination
              </h2>
              <p>The Company reserves the right to terminate services if:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>The Client fails to make payments</li>
                <li>The Client violates these Terms</li>
                <li>The Client engages in illegal or unethical activities</li>
              </ul>
              <p className="mt-4 text-red-600 dark:text-red-400 font-semibold">
                No refunds will be provided in such cases.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                16. Confidentiality
              </h2>
              <p>
                Both parties agree to maintain confidentiality of sensitive information and not disclose it to third parties without consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                17. Force Majeure
              </h2>
              <p>The Company shall not be liable for failure to perform due to events beyond its control, including:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Natural disasters</li>
                <li>Internet outages</li>
                <li>Government restrictions</li>
                <li>Technical failures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Gavel className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                18. Governing Law and Jurisdiction
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>These Terms shall be governed by the laws of India.</li>
                <li>Any disputes shall be subject to the jurisdiction of courts located in Kerala, India.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                19. Modifications to Terms
              </h2>
              <p>
                The Company reserves the right to modify these Terms at any time. Updated Terms will be published on the official website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <CheckCircle2 className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                20. Acceptance of Terms
              </h2>
              <p>
                By using our services, the Client acknowledges that they have read, understood, and agreed to these Terms and Conditions.
              </p>
            </section>

            <div className="mt-16 pt-10 border-t border-gray-200 dark:border-gray-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Company Information</h3>
              <div className="space-y-4">
                <p><strong className="text-gray-900 dark:text-white">Company Name:</strong> Boolean Technologies</p>
                <p><strong className="text-gray-900 dark:text-white">Address:</strong> Kerala, India</p>
                <p><strong className="text-gray-900 dark:text-white">Email:</strong> contact@booleantechnologies.com</p>
                <p><strong className="text-gray-900 dark:text-white">Phone:</strong> +91 7676074209</p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
