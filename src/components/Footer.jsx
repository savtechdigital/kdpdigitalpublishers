import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-10  ">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* About Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We produce books that influence the literary sphere and enhance your worth as an author. 
              Our collaboration ensures your goals are met with compelling results that resonate with your audience.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              {[
                "Ghost Writing",
                "Editing & Proofreading",
                "Book Cover Design",
                "Video Trailer",
                "Book Publishing Services",
                "Book Marketing",
                "Audio Book"
              ].map((service, idx) => (
                <li key={idx}>
                  <Link to="/services" className="hover:text-white transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/portfolio" className="hover:text-white">Portfolio</Link></li>
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
              <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-400 text-sm space-y-4">
              <p>
                <strong className="text-white">Phone:</strong><br />
                <a
                  href="tel:+18552490007"
                  className="hover:text-white transition-colors"
                  rel="noopener noreferrer"
                >
                  +1 (855) 249-0007
                </a>
              </p>
              <p>
                <strong className="text-white">Email:</strong><br />
                <a
                  href="mailto:marketing@kdpdigitalpublishers.com"
                  className="hover:text-white transition-colors"
                  rel="noopener noreferrer"
                >
                  marketing@kdpdigitalpublishers.com
                </a>
              </p>
              <p>
                <strong className="text-white">Head Office:</strong><br />
                2121 N Pearl St Floor 3,<br />
                Dallas, TX 75201
              </p>
            </address>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-xs">
          <p className="mb-2">
            We at Kinetic Digital Publishers are a separate and independent entity from Kindle Direct Publishing.
          </p>
          <p>© {new Date().getFullYear()} Kinetic Digital Publishers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
