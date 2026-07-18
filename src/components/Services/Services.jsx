import "./Services.css";

import {
    FiGlobe,
    FiServer,
    FiSmartphone,
    FiCpu,
    FiDatabase,
    FiTool
} from "react-icons/fi";

function Services() {

    const services = [

        {
            icon:<FiGlobe/>,
            title:"Custom Web Applications",
            desc:"Modern responsive web applications tailored to your business requirements."
        },

        {
            icon:<FiServer/>,
            title:"Backend Development",
            desc:"Scalable Django REST APIs with secure authentication and clean architecture."
        },

        {
            icon:<FiSmartphone/>,
            title:"Frontend Development",
            desc:"Beautiful React interfaces with responsive layouts and reusable components."
        },

        {
            icon:<FiCpu/>,
            title:"AI Integration",
            desc:"Integrate AI features, intelligent search and automation into web applications."
        },

        {
            icon:<FiDatabase/>,
            title:"Database Design",
            desc:"Efficient PostgreSQL, MySQL and SQLite database architecture."
        },

        {
            icon:<FiTool/>,
            title:"Maintenance & Improvements",
            desc:"Bug fixing, feature development, optimization and long-term support."
        }

    ];

    return (

        <section className="services" id="services">

            <div className="container">

                <p className="services-tag">
                    SERVICES
                </p>

                <h2>
                    How I Can
                    <span> Help You</span>
                </h2>

                <p className="services-intro">
                    Whether you're launching a startup, improving an existing
                    product or building internal tools, I can help transform
                    your ideas into production-ready software.
                </p>

                <div className="services-grid">

                    {

                        services.map((service,index)=>(

                            <div
                                className="service-card"
                                key={index}
                            >

                                <div className="service-icon">
                                    {service.icon}
                                </div>

                                <h3>
                                    {service.title}
                                </h3>

                                <p>
                                    {service.desc}
                                </p>

                            </div>

                        ))

                    }

                </div>

            </div>

        </section>

    );

}

export default Services;