const About = () => {
  const skills = [
    'Java', 'HTML', 'CSS', 'JavaScript', 'ReactJS', 'Next.js', 'Tailwind CSS',
    'Express.js', 'Node.js', 'MySQL', 'MongoDB', 'Shopify Liquid',
    'Git', 'GitHub', 'VS Code', 'Render', 'Vercel', 'AWS'
  ];

  return (
    <section id="about" className="section">
      <div className="section-center">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Professional Summary</h3>
            <p>
            Aspiring Full Stack Developer with expertise in building web-based
systems and decentralized platforms. Skilled in MERN stack, Next.js,
and blockchain integration, with hands-on experience in
developing real estate registration systems, student information
systems, shopify store and blockchain applications.
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
              &nbsp;&nbsp;interests: [<span style={{ color: '#ECC94B' }}>'Web Dev'</span>, <span style={{ color: '#ECC94B' }}>'Cloud'</span>, <span style={{ color: '#ECC94B' }}>'Blockchain'</span>],<br />
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