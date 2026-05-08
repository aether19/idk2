import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const footerRef = useScrollReveal<HTMLElement>({
    childSelector: '.footer-col',
    stagger: 0.1,
    y: 30,
    duration: 0.6,
  });

  return (
    <footer ref={footerRef} className="w-full bg-forest text-cream">
      <div className="section-container pt-20 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="footer-col">
            <svg width="48" height="48" viewBox="0 0 36 36" fill="none" className="text-cream mb-4">
              <circle cx="18" cy="18" r="17" stroke="currentColor" strokeWidth="1.5" />
              <path d="M18 8C18 8 12 14 12 19C12 22.5 14.5 25 18 25C21.5 25 24 22.5 24 19C24 14 18 8 18 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M18 14V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M15 17C15 17 16.5 15.5 18 15.5C19.5 15.5 21 17 21 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M18 25C18 25 16 27 14 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M18 25C18 25 20 27 22 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M18 25V29" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M15 27C15 27 16.5 26 18 26C19.5 26 21 27 21 27" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <h3 className="font-display text-xl text-cream mb-2">Root Healing & Nutrition</h3>
            <p className="font-body text-sm text-cream/60">Toronto, ON</p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="font-body text-xs font-medium uppercase tracking-widest text-gold mb-5">
              Navigate
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Booking', href: '/booking' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-body text-[15px] text-cream hover:text-gold transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4 className="font-body text-xs font-medium uppercase tracking-widest text-gold mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Nutrition Consultation', href: '/services' },
                { label: 'Follow-Up Session', href: '/services' },
                { label: 'Reiki & Sound Healing', href: '/services' },
                { label: 'Free Discovery Call', href: '/booking' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-body text-[15px] text-cream hover:text-gold transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="footer-col">
            <h4 className="font-body text-xs font-medium uppercase tracking-widest text-gold mb-5">
              Let's Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@roothealingandnutrition.ca"
                  className="font-body text-[15px] text-cream hover:text-gold transition-colors duration-200 inline-flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  info@roothealingandnutrition.ca
                </a>
              </li>
              <li>
                <a
                  href="tel:+14165551234"
                  className="font-body text-[15px] text-cream hover:text-gold transition-colors duration-200 inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call Me
                </a>
              </li>
              <li className="flex items-center gap-2 text-cream/60 font-body text-sm">
                <MapPin className="w-4 h-4" />
                Toronto, Ontario
              </li>
            </ul>
            <div className="flex items-center gap-4 mt-5">
              <a
                href="https://instagram.com/roothealingandnutrition"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream hover:text-gold transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/roothealingandnutrition"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream hover:text-gold transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-6 border-t border-cream/15">
          <p className="font-body text-xs text-cream/50 text-center">
            © {new Date().getFullYear()} Root Healing & Nutrition. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
