const Experience = () => {
  const experiences = [
    {
      id: 1,
      date: 'Jan 2025 - Present',
      title: 'Software Developer Intern',
      company: 'Data Corp Softwares',
      description: 'Worked on developing a web-based project analysis dashboard using CodeIgniter 3, PHP, and MySQL. Contributed to implementing data visualization, project tracking, and performance analytics to support improved decision-making processes.',
      position: 'left'
    },
    {
      id: 2,
      date: 'Aug 2023 (4 weeks)',
      title: 'Full Stack Developer Intern',
      company: 'OpenWeaver',
      description: 'Contributed to the development of full-stack applications using modern frameworks and technologies. Collaborated in building and optimizing both front-end and back-end components to deliver seamless user experiences.',
      position: 'right'
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="section-center">
        <h2 className="section-title">Experience</h2>
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