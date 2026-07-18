import "./TechStack.css";

import {
  FiMonitor,
  FiServer,
  FiDatabase,
  FiCpu,
} from "react-icons/fi";

function TechStack() {

  const stacks = [

    {
      icon: <FiMonitor />,
      title: "Frontend",
      tech: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Responsive Design",
        "Vite"
      ]
    },

    {
      icon: <FiServer />,
      title: "Backend",
      tech: [
        "Python",
        "Django",
        "Django REST Framework",
        "REST APIs",
        "JWT Authentication",
        "WebSockets"
      ]
    },

    {
      icon: <FiDatabase />,
      title: "Database",
      tech: [
        "PostgreSQL",
        "MySQL",
        "SQLite",
        "Supabase",
        "Database Design",
        "SQL"
      ]
    },

    {
      icon: <FiCpu />,
      title: "Modern Development",
      tech: [
        "AI Integration",
        "Git",
        "GitHub",
        "Cloudinary",
        "Deployment",
        "Problem Solving"
      ]
    }

  ];

  return (

    <section className="techstack" id="techstack">

      <div className="container">

        <p className="tech-tag">
          TECHNOLOGY STACK
        </p>

        <h2>
          Technologies I Use To
          <span> Build Reliable Software</span>
        </h2>

        <p className="tech-intro">
          Every tool is chosen for a purpose. I focus on technologies that help
          build maintainable, scalable and production-ready applications.
        </p>

        <div className="tech-grid">

          {stacks.map((stack, index) => (

            <div className="tech-card" key={index}>

              <div className="tech-icon">
                {stack.icon}
              </div>

              <h3>{stack.title}</h3>

              <div className="tech-list">

                {stack.tech.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default TechStack;