import { FaGithub } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      id: 1,
      icon: '✉️',
      title: 'Email',
      content: 'joeanidas.26it@licet.ac.in',
      isLink: true,
      href: 'mailto:joeanidas.26it@licet.ac.in'
    },
    {
      id: 2,
      icon: <FaGithub />,
      title: 'Github',
      content: 'github.com/joe-anidas',
      isLink: true,
      href: 'https://github.com/joe-anidas'
    },
    {
      id: 3,
      icon: '💻',
      title: 'LinkedIn',
      content: 'linkedin.com/in/joe-anidas',
      isLink: true,
      href: 'https://www.linkedin.com/in/joe-anidas/',
      target: '_blank'
    },
    {
      id: 4,
      icon: '📍',
      title: 'Location',
      content: 'Chennai, Tamil Nadu, India',
      isLink: false
    },
  ];

  return (
    <>
      <style jsx>{`
        .section {
          padding: 4rem 0;
          background: #1a1a2e;
          color: white;
        }
        
        .section-center {
          width: 90%;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .section-title {
          text-align: center;
          margin-bottom: 3rem;
          font-size: 2.5rem;
        }
        
        .contact-container {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }
        
        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.5rem;
  
          border-radius: 10px;
          transition: transform 0.3s ease, background 0.3s ease;
        }
        
        .contact-item:hover {
          transform: translateY(-5px);
   
        }
        
        .contact-icon {
          font-size: 1.5rem;
          margin-top: 0.2rem;
        }
        
        .contact-text h4 {
          margin-bottom: 0.5rem;
          color: #fff;
        }
        
        .contact-text a, .contact-text p {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .contact-text a:hover {
          color: #fff;
          text-decoration: underline;
        }
        
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section id="contact" className="section">
        <div className="section-center">
          <h2 className="section-title">Contact Me</h2>
          <div className="contact-container">
            <div className="contact-grid">
              {contactInfo.map((item) => (
                <div key={item.id} className="contact-item">
                  <div className="contact-icon">{item.icon}</div>
                  <div className="contact-text">
                    <h4>{item.title}</h4>
                    {item.isLink ? (
                      <a href={item.href} target={item.target || '_self'} rel="noopener noreferrer">
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
    </>
  );
};

export default Contact;