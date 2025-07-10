import { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('about');

  // Custom smooth scroll function with duration control
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
    setActiveLink(id);
    smoothScroll(id);
  };

  // Effect to detect which section is in view
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['header', 'about', 'experience', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            if (activeLink !== section) {
              setActiveLink(section);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeLink]);

  return (
    <nav className="navbar">
      <h1>
        <span className="logo-highlight">&lt;</span> Joe Anidas E <span className="logo-highlight">/&gt;</span>
      </h1>
      <ul>
        <li>
          <a 
            href="#header" 
            className={activeLink === 'header' ? 'nav-active' : ''} 
            onClick={(e) => handleClick('header', e)}
          >
            Home
          </a>
        </li>
        <li>
          <a 
            href="#about" 
            className={activeLink === 'about' ? 'nav-active' : ''} 
            onClick={(e) => handleClick('about', e)}
          >
            About
          </a>
        </li>
        <li>
          <a 
            href="#experience" 
            className={activeLink === 'experience' ? 'nav-active' : ''}
            onClick={(e) => handleClick('experience', e)}
          >
            Experience
          </a>
        </li>
        <li>
          <a 
            href="#projects" 
            className={activeLink === 'projects' ? 'nav-active' : ''}
            onClick={(e) => handleClick('projects', e)}
          >
            Projects
          </a>
        </li>
        <li>
          <a 
            href="#education" 
            className={activeLink === 'education' ? 'nav-active' : ''}
            onClick={(e) => handleClick('education', e)}
          >
            Education
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            className={activeLink === 'contact' ? 'nav-active' : ''}
            onClick={(e) => handleClick('contact', e)}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;