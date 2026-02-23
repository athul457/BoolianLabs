import { Link } from 'react-router-dom';
import { Phone, Calendar } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const CTA = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-[95%] mx-auto bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-center rounded-3xl py-16 px-6 shadow-xl border border-gray-200 dark:border-gray-700">

        <div className="max-w-3xl mx-auto">

          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">
              Scale
            </span>{" "}
            Your Business?
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
            Stop losing customers to outdated design. Get a high-converting digital presence that works as hard as you do.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-full font-bold shadow-lg hover:opacity-90 transition-all flex items-center justify-center"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Launch Your Project
            </Link>

            <a
              href="tel:+918714180384"
              className="px-8 py-4 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white rounded-full font-bold hover:bg-gray-100 dark:hover:bg-gray-600 transition-all flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>

            <a
              href="https://wa.me/918714180384"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#25D366] text-white rounded-full font-bold hover:bg-[#20bd5a] transition-all flex items-center justify-center shadow-md"
            >
              <WhatsAppIcon className="mr-2 h-5 w-5" />
              WhatsApp
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
