import ecommerce from "../assets/ecommerce.png";
import project from "../assets/project.png";
import sis from "../assets/sis.png";
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Web-based Project Analysis Dashboard',
      description: 'Developed a web-based project analysis dashboard using CodeIgniter 3, PHP, and MySQL. Implemented data visualization, project tracking, and performance analytics for improved decision-making.',
      technologies: ['CodeIgniter', 'PHP', 'MySQL', 'Charts.js'],
      links: [
        {
          text: 'Github →',
          url: '#'
        },
        {
          text: 'View Project →',
          url: '#'
        }
      ],
      imageUrl: project,
      imageAlt: 'Project Analysis Dashboard'
    },
    {
      id: 2,
      title: 'Dynamic E-commerce Platform',
      description: 'Developed a responsive e-commerce website using HTML, CSS, JavaScript and jQuery. Integrated modular components such as a dynamic header, slider, content sections, and footer.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
      links: [
        {
          text: 'Github →',
          url: 'https://github.com/joe-anidas/E-Commerce'
        },
        {
          text: 'View Project →',
          url: 'https://ecommerce-joe.vercel.app/'
        }
      ],
      imageUrl: ecommerce,
      imageAlt: 'E-commerce Platform'
    },
    {
      id: 3,
      title: 'Student Information System using MERN Stack',
      description: 'Developed a Student Information System using the MERN stack with features like student registration, faculty and student data management, course registration, and automated report generation. ',
      technologies: ['React', 'Node.js', 'Express.js', 'Mongodb'],
      links: [
        {
          text: 'Github →',
          url: 'https://github.com/joe-anidas/student-information-system'
        },
        {
          text: 'View Project →',
          url: 'https://student-information-system-dun.vercel.app/'
        }
      ],
      imageUrl: sis,
      imageAlt: 'Student Information System'
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="section-center">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <img src={project.imageUrl} alt={project.imageAlt} className="project-img" style={{ width: '100%', height: 'auto', maxWidth: '400px', objectFit: 'cover', borderRadius: '10px' }} />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.links.map((link, index) => (
                    <a key={index} href={link.url} className="project-link">{link.text}</a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;