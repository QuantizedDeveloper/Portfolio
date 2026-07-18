import "./Projects.css";
import dummy2 from "../../assets/linkx.png";

function Projects() {

    const projects = [

        {
            image: dummy2,
            title: "LinkX",
            subtitle: "AI Powered Freelancing Platform",

            description:
                "A full-stack freelancing platform designed to intelligently connect businesses with freelancers using AI-powered matching, real-time messaging, secure authentication and scalable backend architecture.",

            technologies: [
                "React",
                "Django",
                "DRF",
                "PostgreSQL",
                "Supabase",
                "Cloudinary",
                "WebSockets"
            ],

            features: [
                "AI Matching",
                "Realtime Chat",
                "Authentication",
                "Notifications",
                "REST APIs"
            ]
        }

    ];

    return (

        <section className="projects" id="projects">

            <div className="container">

                <p className="project-tag">
                    FEATURED PROJECT
                </p>

                <h2>
                    Products I've
                    <span> Built</span>
                </h2>

                <p className="project-intro">
                    Every project is built with scalability,
                    maintainability and real-world usage in mind.
                </p>

                {

                    projects.map((project, index) => (

                        <div className="project-card" key={index}>

                            <div className="project-image">

                                <img
                                    src={project.image}
                                    alt={project.title}
                                />

                            </div>

                            <div className="project-content">

                                <h3>
                                    {project.title}
                                </h3>

                                <h4>
                                    {project.subtitle}
                                </h4>

                                <p>
                                    {project.description}
                                </p>

                                <div className="project-stack">

                                    {

                                        project.technologies.map((tech, i) => (

                                            <span key={i}>
                                                {tech}
                                            </span>

                                        ))

                                    }

                                </div>

                                <div className="feature-list">

                                    {

                                        project.features.map((feature, i) => (

                                            <div
                                                key={i}
                                                className="feature-item"
                                            >

                                                ✓ {feature}

                                            </div>

                                        ))

                                    }

                                </div>

                                <div className="project-buttons">

                                    <button className="primary-btn">
                                        View Case Study
                                    </button>

                                    <button className="secondary-btn">
                                        Live Demo
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))

                }

            </div>

        </section>

    );

}

export default Projects;