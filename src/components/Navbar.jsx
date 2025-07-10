import { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('about');

  // Function to handle smooth scrolling
  const handleClick = (id) => {
    setActiveLink(id);
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  // Effect to detect which section is in view
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100; // Adding offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            onClick={() => handleClick('header')}
          >
            Home
          </a>
        </li>
        <li>
          <a 
            href="#about" 
            className={activeLink === 'about' ? 'nav-active' : ''} 
            onClick={() => handleClick('about')}
          >
            About
          </a>
        </li>
        <li>
          <a 
            href="#experience" 
            className={activeLink === 'experience' ? 'nav-active' : ''}
            onClick={() => handleClick('experience')}
          >
            Experience
          </a>
        </li>
        <li>
          <a 
            href="#projects" 
            className={activeLink === 'projects' ? 'nav-active' : ''}
            onClick={() => handleClick('projects')}
          >
            Projects
          </a>
        </li>
        <li>
          <a 
            href="#education" 
            className={activeLink === 'education' ? 'nav-active' : ''}
            onClick={() => handleClick('education')}
          >
            Education
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            className={activeLink === 'contact' ? 'nav-active' : ''}
            onClick={() => handleClick('contact')}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;