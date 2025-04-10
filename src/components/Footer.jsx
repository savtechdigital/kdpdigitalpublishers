import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* About Us */}
          <div>
            <h3 className="text-2xl font-bold mb-4">About Us</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              We produce books that influence the literary sphere and enhance your worth as an author. 
              Our collaboration ensures your goals are met with compelling results that resonate with your audience.
            </p>
            <div className='flex gap-3 mt-3'>
              <img src="https://res.cloudinary.com/dncqhipqk/image/upload/v1744230286/f-img1_pvr6ut.png" alt="" className='w-[120px] h-[120px] rounded-lg shadow-lg'/>
              <img src="https://res.cloudinary.com/dncqhipqk/image/upload/v1744230290/f-img2_o7g1vp.png" alt="" className='w-[120px] h-[120px] rounded-lg shadow-lg'/>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link to="/services/ghost-writing" className="hover:text-orange-400 transition-colors">Ghost Writing</Link></li>
              <li><Link to="/services/editing" className="hover:text-orange-400 transition-colors">Editing & Proofreading</Link></li>
              <li><Link to="/services/cover-design" className="hover:text-orange-400 transition-colors">Book Cover Design</Link></li>
              <li><Link to="/services/video-trailer" className="hover:text-orange-400 transition-colors">Video Trailer</Link></li>
              <li><Link to="/services/publishing" className="hover:text-orange-400 transition-colors">Book Publishing Services</Link></li>
              <li><Link to="/services/marketing" className="hover:text-orange-400 transition-colors">Book Marketing</Link></li>
              <li><Link to="/services/audio-book" className="hover:text-orange-400 transition-colors">Audio Book</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link to="/portfolio" className="hover:text-orange-400 transition-colors">Portfolio</Link></li>
              <li><Link to="/about" className="hover:text-orange-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-orange-400 transition-colors">Contact Us</Link></li>
              <li><Link to="/terms-and-condition" className="hover:text-orange-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-orange-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300 text-sm space-y-4">
              <p>
                <strong className="text-white">Phone:</strong><br />
                <a
                  href="tel:+18552490007"
                  className="hover:text-orange-400 transition-colors"
                  rel="noopener noreferrer"
                >
                  +1 (855) 249-0007
                </a>
              </p>
              <p>
                <strong className="text-white">Email:</strong><br />
                <a
                  href="mailto:marketing@kdpdigitalpublishers.com"
                  className="hover:text-orange-400 transition-colors"
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
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-xs">
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
