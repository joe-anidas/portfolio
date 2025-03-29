const About = () => {
  const skills = [
    'Java', 'HTML', 'CSS', 'JavaScript', 'ReactJS', 'jQuery',
    'Express.js', 'Node.js', 'PHP',  'MySQL', 'PostgreSQL', 'MongoDB', 'Firebase',
    'Git', 'AWS'
  ];

  return (
    <section id="about" className="section">
      <div className="section-center">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Professional Summary</h3>
            <p>
              Full Stack Developer skilled in the MERN stack, with expertise in SQL & NoSQL databases. 
              Proficient in RESTful APIs, JWT/OAuth authentication, and AWS cloud deployment. 
              Certified in Full Stack Development, with strong problem-solving skills and adaptability 
              in agile environments.
            </p>
            <h3>Technical Skills</h3>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="about-image">
            <code className="code-text" style={{ display: 'block', color: 'var(--primary-light)', lineHeight: 1.5 }}>
              const <span style={{ color: '#48BB78' }}>developer</span> = {'{'}<br />
              &nbsp;&nbsp;name: <span style={{ color: '#ECC94B' }}>'Joe Anidas E'</span>,<br />
              &nbsp;&nbsp;title: <span style={{ color: '#ECC94B' }}>'Full Stack Developer'</span>,<br />
              &nbsp;&nbsp;location: <span style={{ color: '#ECC94B' }}>'Chennai, India'</span>,<br />
              &nbsp;&nbsp;education: <span style={{ color: '#ECC94B' }}>'B.Tech in IT'</span>,<br />
              &nbsp;&nbsp;skills: [<span style={{ color: '#ECC94B' }}>'MERN Stack'</span>, <span style={{ color: '#ECC94B' }}>'SQL'</span>, <span style={{ color: '#ECC94B' }}>'NoSQL'</span>, <span style={{ color: '#ECC94B' }}>'AWS'</span>],<br />
              &nbsp;&nbsp;interests: [<span style={{ color: '#ECC94B' }}>'Web Dev'</span>, <span style={{ color: '#ECC94B' }}>'Cloud'</span>, <span style={{ color: '#ECC94B' }}>'DevOps'</span>],<br />
              <br />
              &nbsp;&nbsp;coding: <span style={{ color: '#F56565' }}>function</span>() {'{'}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#F56565' }}>return</span> <span style={{ color: '#ECC94B' }}>'Creating amazing web experiences'</span>;<br />
              &nbsp;&nbsp;{'}'}<br />
              {'}'};<br />
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;