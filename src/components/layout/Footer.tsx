import Link from "next/link";
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube, 
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCreditCard,
  FaLock,
  FaTruck,
  FaUndo
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-bg-card-light dark:bg-bg-card-dark border-t border-border-light dark:border-border-dark">
      {/* Newsletter and Top Section */}
      <div className="border-b border-border-light dark:border-border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <div>
              <div className="flex items-center mb-4">
                <span className="text-2xl font-orbitron font-bold text-primary">
                  Tech<span className="text-secondary">Sphere</span>
                </span>
              </div>
              <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4">
                Your one-stop destination for cutting-edge electronics and tech products. We bring the future to your doorstep.
              </p>
              <div className="flex space-x-3">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-bg-hover-light dark:bg-bg-hover-dark p-2 rounded-full text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook size={18} />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-bg-hover-light dark:bg-bg-hover-dark p-2 rounded-full text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter size={18} />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-bg-hover-light dark:bg-bg-hover-dark p-2 rounded-full text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram size={18} />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-bg-hover-light dark:bg-bg-hover-dark p-2 rounded-full text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors"
                  aria-label="YouTube"
                >
                  <FaYoutube size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors">
                    Tech Blog
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Shop */}
            <div>
              <h3 className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
                Shop
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/categories/smartphones" className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors">
                    Smartphones
                  </Link>
                </li>
                <li>
                  <Link href="/categories/laptops" className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors">
                    Laptops
                  </Link>
                </li>
                <li>
                  <Link href="/categories/audio" className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors">
                    Audio
                  </Link>
                </li>
                <li>
                  <Link href="/categories/gaming" className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors">
                    Gaming
                  </Link>
                </li>
                <li>
                  <Link href="/deals" className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors">
                    Deals
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
                Contact Us
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaMapMarkerAlt className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-text-secondary-light dark:text-text-secondary-dark">
                    1234 Tech Avenue, Silicon Valley, CA 94043
                  </span>
                </li>
                <li className="flex items-center">
                  <FaPhoneAlt className="text-primary mr-3 flex-shrink-0" />
                  <span className="text-text-secondary-light dark:text-text-secondary-dark">
                    +1 (555) 123-4567
                  </span>
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="text-primary mr-3 flex-shrink-0" />
                  <span className="text-text-secondary-light dark:text-text-secondary-dark">
                    support@techsphere.com
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section - Payment and Trust */}
      <div className="border-b border-border-light dark:border-border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-3 rounded-full mb-3">
                <FaCreditCard className="text-primary text-2xl" />
              </div>
              <h4 className="font-semibold text-text-primary-light dark:text-text-primary-dark mb-1">Secure Payment</h4>
              <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                All transactions are secure and encrypted
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-3 rounded-full mb-3">
                <FaLock className="text-primary text-2xl" />
              </div>
              <h4 className="font-semibold text-text-primary-light dark:text-text-primary-dark mb-1">Privacy Protected</h4>
              <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                Your data is protected and never shared
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-3 rounded-full mb-3">
                <FaTruck className="text-primary text-2xl" />
              </div>
              <h4 className="font-semibold text-text-primary-light dark:text-text-primary-dark mb-1">Fast Shipping</h4>
              <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                Free shipping on orders over $50
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-3 rounded-full mb-3">
                <FaUndo className="text-primary text-2xl" />
              </div>
              <h4 className="font-semibold text-text-primary-light dark:text-text-primary-dark mb-1">Easy Returns</h4>
              <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                30-day money-back guarantee
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright and Legal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
              &copy; {new Date().getFullYear()} TechSphere By <Link href="https://linkedin.com/in/rafay-nadeem-web-developer" className="text-primary hover:text-secondary transition-colors">Rafay Nadeem</Link>. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/privacy" className="text-sm text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/shipping" className="text-sm text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors">
              Shipping Policy
            </Link>
            <Link href="/refund" className="text-sm text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
