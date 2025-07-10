import { useEffect } from 'react';

const Footer = () => {
  const navLinks = [
    { id: 'header', text: 'Home' },
    { id: 'about', text: 'About' },
    { id: 'experience', text: 'Experience' },
    { id: 'projects', text: 'Projects' },
    { id: 'education', text: 'Education' },
    { id: 'contact', text: 'Contact' }
  ];

  // Custom smooth scroll function with duration control (same as Navbar)
  const smoothScroll = (targetId, duration = 500) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const targetPosition = target.offsetTop - 80; // Adjust for navbar height
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    // Easing function for smooth acceleration/deceleration
    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  };

  const handleClick = (id, e) => {
    e.preventDefault();
    smoothScroll(id);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-nav">
          {navLinks.map((link) => (
            <a 
              key={link.id} 
              href={`#${link.id}`}
              onClick={(e) => handleClick(link.id, e)}
            >
              {link.text}
            </a>
          ))}
        </div>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Joe Anidas E. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;