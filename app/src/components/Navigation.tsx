import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Nutrition Consultation', href: '/services' },
      { label: 'Follow-Up Session', href: '/services' },
      { label: 'Reiki & Sound Healing', href: '/services' },
      { label: 'Free Discovery Call', href: '/booking' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const scrollY = useScrollPosition();
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);
  const isScrolled = scrollY > 100;
  const isHome = location.pathname === '/';

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const ctx = gsap.context(() => {
      gsap.from('.nav-logo', { x: -20, opacity: 0, duration: 0.5, ease: 'power2.out', delay: 0.2 });
      gsap.from('.nav-link-item', { x: 20, opacity: 0, duration: 0.5, ease: 'power2.out', stagger: 0.05, delay: 0.3 });
    }, nav);
    return () => ctx.revert();
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 h-20 md:h-20 flex items-center transition-all duration-300 ${
          isScrolled || !isHome
            ? 'bg-cream/95 backdrop-blur-sm shadow-[0_1px_0_rgba(0,0,0,0.05)]'
            : 'bg-transparent'
        }`}
      >
        <div className="section-container flex items-center justify-between w-full">
          {/* Logo */}
          <Link to="/" className="nav-logo flex items-center gap-3 shrink-0">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="text-olive">
              <circle cx="18" cy="18" r="17" stroke="currentColor" strokeWidth="1.5" />
              <path d="M18 8C18 8 12 14 12 19C12 22.5 14.5 25 18 25C21.5 25 24 22.5 24 19C24 14 18 8 18 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M18 14V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M15 17C15 17 16.5 15.5 18 15.5C19.5 15.5 21 17 21 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M18 25C18 25 16 27 14 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M18 25C18 25 20 27 22 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M18 25V29" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M15 27C15 27 16.5 26 18 26C19.5 26 21 27 21 27" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span className={`font-display text-lg font-medium hidden sm:block transition-colors duration-300 ${
              isScrolled || !isHome ? 'text-olive' : 'text-cream'
            }`}>
              Root Healing
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="nav-link-item relative"
                onMouseEnter={() => link.children && setServicesOpen(true)}
                onMouseLeave={() => link.children && setServicesOpen(false)}
              >
                {link.children ? (
                  <button
                    className={`flex items-center gap-1 font-body text-sm font-normal transition-colors duration-200 ${
                      isActive(link.href)
                        ? 'text-olive font-medium'
                        : isScrolled || !isHome
                        ? 'text-charcoal hover:text-olive'
                        : 'text-cream/90 hover:text-cream'
                    }`}
                  >
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className={`font-body text-sm font-normal transition-colors duration-200 ${
                      isActive(link.href)
                        ? 'text-olive font-medium'
                        : isScrolled || !isHome
                        ? 'text-charcoal hover:text-olive'
                        : 'text-cream/90 hover:text-cream'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}

                {/* Services Dropdown */}
                {link.children && servicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                    <div className="bg-white rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-borderline/50 p-3 min-w-[240px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-charcoal hover:bg-cream-light hover:text-olive transition-colors duration-150"
                        >
                          <span className="font-body">{child.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <Link
              to="/booking"
              className="hidden md:inline-flex btn-primary text-xs px-5 py-2.5"
            >
              Book Now
            </Link>
            <a
              href="tel:+14165551234"
              className={`hidden lg:flex items-center justify-center w-9 h-9 rounded-full border transition-colors duration-200 ${
                isScrolled || !isHome
                  ? 'border-olive/30 text-olive hover:bg-olive hover:text-cream'
                  : 'border-cream/40 text-cream hover:bg-cream/20'
              }`}
              aria-label="Call Us"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              className={`lg:hidden p-2 transition-colors ${
                isScrolled || !isHome ? 'text-olive' : 'text-cream'
              }`}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[200] bg-cream transition-transform duration-500 ease-out lg:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between h-20 px-6">
          <Link to="/" className="font-display text-xl text-olive" onClick={() => setMobileOpen(false)}>
            Root Healing
          </Link>
          <button onClick={() => setMobileOpen(false)} className="p-2 text-olive" aria-label="Close menu">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 pt-12">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className={`font-display text-3xl ${
                isActive(link.href) ? 'text-olive' : 'text-charcoal'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/booking"
            onClick={() => setMobileOpen(false)}
            className="btn-primary mt-4"
          >
            Book Your Free Call
          </Link>
        </div>
      </div>
    </>
  );
}
