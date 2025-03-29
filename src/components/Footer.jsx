const Footer = () => {
  const navLinks = [
    { id: 'header', text: 'Home' },
    { id: 'about', text: 'About' },
    { id: 'experience', text: 'Experience' },
    { id: 'projects', text: 'Projects' },
    { id: 'education', text: 'Education' },
    { id: 'contact', text: 'Contact' }
  ];

  const handleClick = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-nav">
          {navLinks.map((link) => (
            <a 
              key={link.id} 
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleClick(link.id);
              }}
            >
              {link.text}
            </a>
          ))}
        </div>
        <p className="footer-copy">&copy; {new Date().getFullYear()} Joe Anidas E. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;