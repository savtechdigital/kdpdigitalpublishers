import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Us Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 mb-4">
              We produce books that influence the literary sphere and enhance your worth as an author. 
              We collaborate with you to produce the best possible results that align with your goals, 
              engage your audience and create a buzz around your book.
            </p>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Ghost Writing</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Editing & Proofreading</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Book Cover Design</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Video Trailer</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Book Publishing Services</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Book Marketing</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Audio Book</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4 text-gray-400">
              <p>
                <strong className="text-white">Phone:</strong><br />
                <a href="tel:+18552490007" className="hover:text-white transition-colors">
                  +1 (855) 249-0007
                </a>
              </p>
              <p>
                <strong className="text-white">Email:</strong><br />
                <a href="mailto:marketing@kdpdigitalpublishers.com" className="hover:text-white transition-colors">
                  marketing@kdpdigitalpublishers.com
                </a>
              </p>
              <div>
                <strong className="text-white">Head Office:</strong><br />
                2121 N Pearl St Floor 3,<br />
                Dallas, TX 75201
              </div>
            </div>
          </div>
        </div>

       

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p className="mb-4">
            We at Kinetic Digital Publishers are a separate and independent entity from Kindle Direct Publishing.
          </p>
          <p>
            © {new Date().getFullYear()} Kinetic Digital Publishers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
