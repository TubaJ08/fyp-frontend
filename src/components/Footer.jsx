import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';  
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        
        {/* Brand */}
        <div>
          <h3 className="font-bold text-lg mb-2">🏠 HomeServe Pro</h3>
          <p className="text-gray-400 mb-4">
            Professional home service you can trust. Licensed, insured, and available 24/7.
          </p>
          <div className="flex gap-3">
            <a href="#" className="text-white hover:text-blue-400"><FaFacebook className="text-blue-600" /></a>
            <a href="#" className="text-white hover:text-blue-400"><FaTwitter className="text-blue-400" /></a>
            <a href="#" className="text-white hover:text-blue-400"> <FaInstagram className="text-pink-500" /></a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-2">Services</h4>
          <ul className="text-gray-400 space-y-1">
            <li><Link to="/services/home-service" className="hover:text-white">Home Service</Link></li>
            <li><Link to="/services/plumber" className="hover:text-white">Plumbing</Link></li>
            <li><Link to="/services/electricity" className="hover:text-white">Electrical</Link></li>
            <li><Link to="/services/handcraft" className="hover:text-white">HandCraft</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="text-gray-400 space-y-1">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/homeDecor" className="hover:text-white">Home Decor</Link></li>
            <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <ul className="text-gray-400 space-y-1">
            <li><a href="tel:+923364508104" className="hover:text-white">📞 +92 336 4508104</a></li>
            <li><a href="mailto:info@homeservepro.com" className="hover:text-white">📧 info@homeservepro.com</a></li>
            <li>📍 Lahore, Pakistan</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © 2024 HomeServe Pro. All rights reserved.
      </div>
    </footer>
  );
}
