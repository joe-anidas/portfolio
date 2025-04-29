const Contact = () => {
  const contactInfo = [
    {
      id: 1,
      icon: <FaGithub />,
      title: 'Github',
      content: 'github.com/JOE-ANIDAS',
      isLink: true,
      href: 'https://github.com/JOE-ANIDAS'
    },
    {
      id: 2,
      icon: '✉️',
      title: 'Email',
      content: 'joeanidas.26it@licet.ac.in',
      isLink: true,
      href: 'mailto:joeanidas.26it@licet.ac.in'
    },
    {
      id: 3,
      icon: '📍',
      title: 'Location',
      content: 'Chennai, Tamil Nadu, India',
      isLink: false
    },
    {
      id: 4,
      icon: '💻',
      title: 'LinkedIn',
      content: 'linkedin.com/in/joe-anidas',
      isLink: true,
      href: 'https://www.linkedin.com/in/joe-anidas/',
      target: '_blank'
    }
  ];

  return (
    <section id="contact" className="section">
      <div className="section-center">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-container">
          <div className="contact-info">
            {contactInfo.map((item) => (
              <div key={item.id} className="contact-item">
                <div className="contact-icon">{item.icon}</div>
                <div className="contact-text">
                  <h4>{item.title}</h4>
                  {item.isLink ? (
                    <a href={item.href} target={item.target || ''}>
                      {item.content}
                    </a>
                  ) : (
                    <p>{item.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
