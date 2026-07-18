import "./Skills.css";

import {
    FiLock,
    FiMessageCircle,
    FiCpu,
    FiBell,
    FiUser,
    FiCode,
    FiDatabase,
    FiUpload,
    FiSearch,
    FiGrid,
    FiCloud,
    FiLayers
} from "react-icons/fi";

function Skills() {

    const features = [

        {
            icon: <FiLock />,
            title: "Authentication",
            desc: "JWT, Email OTP verification, protected APIs, secure login, access control."
        },

        {
            icon: <FiMessageCircle />,
            title: "Real-Time Messaging",
            desc: "Conversations, realtime chat, message delivery and communication systems."
        },

        {
            icon: <FiCpu />,
            title: "AI Integration",
            desc: "AI-powered freelancer matching, intelligent recommendations and smart search."
        },

        {
            icon: <FiBell />,
            title: "Notifications",
            desc: "Platform notifications, user alerts and activity updates."
        },

        {
            icon: <FiUser />,
            title: "User Profiles",
            desc: "Portfolio management, profile customization, verification and ratings."
        },

        {
            icon: <FiCode />,
            title: "REST APIs",
            desc: "Scalable APIs built using Django REST Framework following clean architecture."
        },

        {
            icon: <FiDatabase />,
            title: "Database Design",
            desc: "Efficient relational database structures using PostgreSQL, MySQL and SQLite."
        },

        {
            icon: <FiUpload />,
            title: "File Uploads",
            desc: "Image uploads, media handling and cloud storage integration."
        },

        {
            icon: <FiSearch />,
            title: "Search Systems",
            desc: "Advanced filtering, searching and intelligent content discovery."
        },

        {
            icon: <FiGrid />,
            title: "Dashboards",
            desc: "Interactive dashboards with analytics and management panels."
        },

        {
            icon: <FiCloud />,
            title: "Deployment",
            desc: "Cloud deployment, production environments and scalable hosting."
        },

        {
            icon: <FiLayers />,
            title: "Full Stack Systems",
            desc: "Complete applications from frontend interface to backend infrastructure."
        }

    ];

    return (

        <section className="skills" id="skills">

            <div className="container">

                <p className="skills-tag">
                    WHAT I BUILD
                </p>

                <h2>
                    Engineering Complete
                    <span> Software Systems</span>
                </h2>

                <p className="skills-intro">
                    I focus on building production-ready systems—not just writing code.
                    These are the types of features and architectures I've implemented in real projects like LinkX.
                </p>

                <div className="skills-grid">

                    {features.map((feature, index) => (

                        <div className="skill-card" key={index}>

                            <div className="skill-icon">
                                {feature.icon}
                            </div>

                            <h3>{feature.title}</h3>

                            <p>{feature.desc}</p>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default Skills;