import twinai from "../assets/twinai.jpg";
import antifake from "../assets/antifake.jpg";
import sis from "../assets/sis.jpg";
const Projects = () => {
  const projects = [    
    {
    id: 1,
    title: 'Anti-Fake [Tamper Proof Certificate Verification]',
    description: 'Developed a blockchain credential platform using LUKSO Universal Profiles, Solidity, and Hardhat to issue NFT-based academic certificates. Built with Next.js, TypeScript, and Tailwind CSS for the frontend, leveraging IPFS for decentralized storage, enabling instant on-chain verification and eliminating credential fraud.',
    technologies: ['Next.js', 'TypeScript', 'Solidity', 'Hardhat', 'LUKSO', 'IPFS', 'Tailwind CSS'],
    links: [
      {
        text: 'Github →',
        url: 'https://github.com/joe-anidas/certificate-verification-dapp'
      },
      {
        text: 'View Project →',
        url: 'https://lukso-dapp-dusky.vercel.app/'
      }
    ],
    imageUrl: antifake,
    imageAlt: 'Blockchain Certificate Verification'
  },
  {
    id: 2,
    title: 'Twin AI',
    description: 'Built a decentralized AI twin platform using Next.js, Tailwind CSS, Node.js, and Base Sepolia blockchain. Enabled users to create, own, and monetize personalized AI agents via Groq API. Integrated gasless NFT minting, smart wallets, and hybrid IPFS-NFT storage for training data.',
    technologies: ['Next.js', 'Tailwind CSS', 'Node.js', 'Base Sepolia', 'Groq API', 'IPFS', 'NFT'],
    links: [
      {
        text: 'Github →',
        url: 'https://github.com/joe-anidas/ai-twin'
      },
      {
        text: 'View Project →',
        url: 'https://ai-twin-xi.vercel.app/'
      }
    ],
    imageUrl: twinai,
    imageAlt: 'Decentralized AI Twin Platform'
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