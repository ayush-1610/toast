import React from 'react';

export default function Footer() {
  return (
    <footer role="contentinfo" className="footer bg-neutral text-primary pt-20 px-4 mt-12 relative overflow-x-clip">
      <div className="footer-wrapper max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 pb-20 relative z-10">
        {/* Left Section: Contact and Social */}
        <div className="footer-left">
          <address className="not-italic text-sm">
            <p className="title font-bold text-base mb-2">Contact Us</p>
            <p className="opacity-80">6 Brewhouse Yard</p>
            <p className="opacity-80">London EC1V 4DG</p>
            <p className="opacity-80">United Kingdom</p>
            <p className="mt-2"><a href="/contact" className="hover:underline font-semibold">Email Us</a></p>
          </address>
          <div className="social-links flex space-x-4 mt-4">
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/givoro" aria-label="LinkedIn">
              <img src="https://www.hogarth.com/sites/default/files/2024-11/hogarth_linkedin_social_icon.svg" alt="Linkedin" width="20" height="20" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/givoro" aria-label="Instagram">
              <img src="https://www.hogarth.com/sites/default/files/2024-11/hogarth_instagram_social_icon.svg" alt="Instagram" width="20" height="20" />
            </a>
          </div>
        </div>

        {/* Right Section: Navigation Links */}
        <div className="footer-right">
          <nav role="navigation" aria-labelledby="footer-nav-menu">
            <h2 className="visually-hidden" id="footer-nav-menu">Footer Navigation</h2>
            <ul className="menu footer-menu space-y-2 text-sm opacity-80">
              <li><a href="/" className="menu-link hover:underline">Home</a></li>
              <li><a href="/about" className="menu-link hover:underline">About</a></li>
              <li><a href="/solutions" className="menu-link hover:underline">Solutions</a></li>
              <li><a href="/platform" className="menu-link hover:underline">Platform</a></li>
              <li><a href="/impact" className="menu-link hover:underline">Impact</a></li>
              <li><a href="/contact" className="menu-link hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Full-width SVG logo at the bottom */}
      <div className="footer-logo absolute left-1/2 -translate-x-1/2 bottom-0 w-[1440px] h-[100px] pointer-events-none select-none overflow-hidden z-0">
        <svg width="1440" height="143" viewBox="0 0 1440 143" fill="none">
          <text 
            x="50%" 
            y="115" 
            dominantBaseline="middle" 
            textAnchor="middle" 
            fontFamily="Montserrat, sans-serif" 
            fontSize="180" 
            fontWeight="900" 
            fill="#111217"
            letterSpacing="40"
            className="opacity-20"
          >
            GIVORO
          </text>
        </svg>
      </div>
    </footer>
  );
}

