const Education = () => {
  const educations = [
    {
      id: 1,
      degree: 'Bachelor of Technology, Information Technology',
      institution: 'Loyola-ICAM College of Engineering and Technology (LICET), Chennai',
      period: '2022 - 2026',
      score: '8.42'
    },
    {
      id: 2,
      degree: 'Higher Secondary Education',
      institution: 'KCM MATRC HR SEC School, Nilakottai',
      hsc: '86%',
      sslc: '98%'
    }
  ];

  const courses = [
    {
      id: 1,
      title: 'Amazon\'s Full Stack Web Development',
      provider: 'Coursera'
    },
    {
      id: 2,
      title: 'Master Course in Full Stack Development',
      provider: 'Great Learning'
    },
    {
      id: 3,
      title: 'MERN: Advanced MERN Development',
      provider: 'Infosys Springboard'
    }, {
      id: 4,
      title: 'Mastering MEAN Web Development',
      provider: 'Infosys Springboard'
    },
    {
      id: 5,
      title: 'Workshop on Mastering Flutter',
      provider: 'Apr 2025'
    },
    {
      id: 6,
      title: 'Mastering UI Automation with Selenium',
      provider: 'Feb 2025'
    },
    {
      id: 7,
      title: 'Mastering AWS Cloud Automation with DevOps Tools',
      provider: 'Oct 2024'
    },
    {
      id: 8,
      title: 'OpenWeaver Web Development',
      provider: 'Mar 2024'
    }
  ];

  return (
    <section id="education" className="section">
      <div className="section-center">
        <h2 className="section-title">Education</h2>
        <div className="education-container">
          {educations.map((edu) => (
            <div key={edu.id} className="education-card">
              <h4>{edu.degree}</h4>
              <p>{edu.institution}</p>
              {edu.period && <p>{edu.period}</p>}
              {edu.score && <p> CGPA: <span className="education-score">{edu.score}</span></p>}
              {edu.hsc && <p>HSC: <span className="education-score">{edu.hsc}</span></p>}
              {edu.sslc && <p>SSLC: <span className="education-score">{edu.sslc}</span></p>}
            </div>
          ))}
        </div>
        
        <h2 className="section-title" style={{ marginTop: '4rem' }}>Courses & Workshops</h2>
        <div className="courses-container">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <h4>{course.title}</h4>
              <p>{course.provider}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;