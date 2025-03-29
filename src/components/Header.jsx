const Header = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header id="header" className="header">
      <div className="header-content">
        <h2>Hi, I'm <span className="logo-highlight">Joe Anidas E</span></h2>
        <p>Aspiring Full Stack Developer | B.Tech IT Student at LICET</p>
        <div className="header-buttons">
          <a 
            href="#contact" 
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            Get In Touch
          </a>
          <a 
            href="#projects" 
            className="btn btn-outline"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
          >
            View Projects
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;