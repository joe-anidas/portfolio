const Experience = () => {
  const experiences = [
    {
      id: 1,
      date: 'May 2025 - June 2025 (6 weeks)',
      title: 'Frontend Developer Intern',
      company: 'Banana Threads',
      description: 'Developed and redesigned Banana Threads’ Shopify store using HTML, CSS, JavaScript, and Liquid, enhancing UI/UX with interactive animations, and responsive layouts. Implemented product pages, cart functionality, and mobile optimization, while integrating design assets, hover effects, and Shopify’s CMS for seamless customer workflows.',
      position: 'left'
    },
    {
      id: 2,
      date: 'Jan 2025 - Apr 2025 (3 months)',
      title: 'Software Developer Intern',
      company: 'Data Corp Softwares',
      description: 'Worked on developing a web-based project analysis dashboard using CodeIgniter 3, PHP, and MySQL. Contributed to implementing data visualization, project tracking, and performance analytics to support improved decision-making processes.',
      position: 'right'
    },
    {
      id: 3,
      date: 'Aug 2023 (4 weeks)',
      title: 'Full Stack Developer Intern',
      company: 'OpenWeaver',
      
        description: 'Developed an anime website using low-code/no-code tools, implementing features like user authentication, content filtering, and API integrations. Streamlined development by leveraging platforms like Bubble.io and Firebase to accelerate deployment while maintaining functionality.',
        position: 'left'
      
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="section-center">
        <h2 className="section-title">Internships</h2>
        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className={`timeline-item ${exp.position}`}>
              <div className="timeline-content">
                <p className="timeline-date">{exp.date}</p>
                <h3 className="timeline-title">{exp.title}</h3>
                <p className="timeline-company">{exp.company}</p>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;