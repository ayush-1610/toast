import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

// Custom hook to detect clicks outside a component
function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

const navLinks = [
  { href: '/about', label: 'About Us' },
  {
    label: 'What we do',
    dropdown: [
      { href: '/expertise', image: '/images/nav-expertise.jpg', title: 'Our Expertise', description: 'Learn how we deliver unparalleled growth for clients' },
      { href: '/platform', image: '/images/nav-platform.jpg', title: 'Our Platform', description: 'Discover our next-gen AI-powered marketing solution' }
    ]
  },
  { href: '/contact', label: 'Contact Us' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);
  useOnClickOutside(dropdownRef, () => setDropdownOpen(false));

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      setDropdownOpen(false); // Close dropdown on scroll
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`header-transition fixed w-full top-0 z-50 flex justify-center ${scrolled ? 'bg-white/80 shadow-lg border-b border-gray-200/80 backdrop-blur-lg' : 'bg-transparent'} transition-all duration-300`}
      style={{ minHeight: '80px' }}
    >
      <div className="w-full max-w-7xl flex items-center justify-between px-6">
        <Link
          href="/"
          className={`font-heading text-3xl transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-accent'}`}
          aria-label="GIVORO Home"
        >
          GIVORO
        </Link>
        <nav className={`hidden md:flex items-center space-x-10 font-sans text-base font-medium ${scrolled ? 'text-primary' : 'text-accent'}`} aria-label="Main navigation">
          {navLinks.map((link) => (
            link.dropdown ? (
              <div key={link.label} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`flex items-center gap-2 py-2 transition-colors duration-300`}
                  aria-expanded={dropdownOpen}
                  aria-controls="nav-dropdown-what-we-do"
                >
                  <span>{link.label}</span>
                  <span className={`inline-block transition-transform duration-300 ease-in-out ${dropdownOpen ? 'rotate-180' : ''}`}>
                    <svg viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className="w-3 h-3">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
                {/* Dropdown Menu */}
                <div
                  id="nav-dropdown-what-we-do"
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${dropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}
                >
                  <div className="bg-white/80 backdrop-blur-lg text-primary rounded-2xl shadow-2xl p-4 w-[692px] flex border border-white/20">
                    {link.dropdown.map(item => (
                      <a key={item.title} href={item.href} className="flex-1 group">
                        <div className="flex p-4 rounded-lg hover:bg-white/50 transition-colors">
                          <div className="w-32 h-48 rounded-md overflow-hidden mr-5 shrink-0">
                            <img src={item.image} alt="" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                          </div>
                          <div className="flex flex-col">
                            <p className="font-bold mb-1">{item.title}</p>
                            <p className="text-sm text-gray-600 flex-grow">{item.description}</p>
                            <svg className="w-6 h-6 text-gray-400 group-hover:translate-x-1 transition-transform self-end" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12.4 4.32782C12.5007 4.2241 12.6211 4.14164 12.7543 4.08533C12.8874 4.02901 13.0305 4 13.175 4C13.3195 4 13.4626 4.02901 13.5957 4.08533C13.7289 4.14164 13.8493 4.2241 13.95 4.32782C15.22 5.55782 16.95 7.25782 18.36 8.70782C19.17 9.51782 19.89 10.2578 20.41 10.7878L21.03 11.4178L21.26 11.6478C21.4646 11.8539 21.5794 12.1325 21.5794 12.4228C21.5794 12.7132 21.4646 12.9918 21.26 13.1978L13.97 20.4878C13.8686 20.5903 13.7479 20.6717 13.6149 20.7272C13.4819 20.7828 13.3392 20.8113 13.195 20.8113C13.0508 20.8113 12.9081 20.7828 12.7751 20.7272C12.6421 20.6717 12.5214 20.5903 12.42 20.4878C12.3172 20.3856 12.2356 20.2641 12.18 20.1302C12.1243 19.9963 12.0956 19.8528 12.0956 19.7078C12.0956 19.5628 12.1243 19.4193 12.18 19.2854C12.2356 19.1516 12.3172 19.03 12.42 18.9278L17.84 13.4978L4.1 13.4978C3.80826 13.4978 3.52847 13.3819 3.32218 13.1756C3.11589 12.9693 3 12.6896 3 12.3978C3 12.1061 3.11589 11.8263 3.32218 11.62C3.52847 11.4137 3.80826 11.2978 4.1 11.2978L17.83 11.2978L16.83 10.2978C15.39 8.85782 13.71 7.16782 12.46 5.94782C12.3426 5.84988 12.2471 5.72834 12.1798 5.59109C12.1124 5.45385 12.0747 5.30397 12.069 5.15119C12.0634 4.99841 12.0899 4.84615 12.1469 4.7043C12.2039 4.56244 12.2902 4.43418 12.4 4.32782Z" fill="currentColor"></path></svg>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 transition-colors duration-300 hover:text-opacity-80"
              >
                {link.label}
              </Link>
            )
          ))}
          <Link
            href="/auth/login"
            className={`ml-6 px-5 py-2 rounded-full font-semibold shadow transition-colors duration-300 ${scrolled ? 'bg-primary text-accent hover:bg-secondary' : 'bg-accent text-primary hover:bg-neutral hover:text-black'}`}
            aria-label="Login or Sign Up"
          >
            Login / Sign Up
          </Link>
      </nav>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 group"
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-7 h-0.5 mb-1.5 rounded transition-all duration-300 ${scrolled ? 'bg-primary' : 'bg-accent'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-7 h-0.5 mb-1.5 rounded transition-all duration-300 ${scrolled ? 'bg-primary' : 'bg-accent'} ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-7 h-0.5 rounded transition-all duration-300 ${scrolled ? 'bg-primary' : 'bg-accent'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setMenuOpen(false)} />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-neutral shadow-lg z-50 transform transition-transform duration-300 md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col p-6 space-y-2 mt-16">
          <Link href="/about" className="text-lg font-sans py-2 text-primary" onClick={() => setMenuOpen(false)}>About Us</Link>
          <div className="border-t border-gray-200 pt-2 mt-2">
            <span className="text-sm font-bold text-gray-500 px-2">What we do</span>
            <Link href="/expertise" className="text-lg font-sans py-2 text-primary block pl-4" onClick={() => setMenuOpen(false)}>Our Expertise</Link>
            <Link href="/platform" className="text-lg font-sans py-2 text-primary block pl-4" onClick={() => setMenuOpen(false)}>Our Platform</Link>
          </div>
          <Link href="/contact" className="text-lg font-sans py-2 text-primary" onClick={() => setMenuOpen(false)}>Contact Us</Link>

          <Link
            href="/auth/login"
            className="mt-4 px-5 py-2 rounded-full bg-accent text-primary font-semibold shadow hover:bg-neutral hover:text-black transition-colors duration-200 text-center"
            onClick={() => setMenuOpen(false)}
            aria-label="Login or Sign Up"
          >
            Login / Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
