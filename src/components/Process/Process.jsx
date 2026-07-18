import "./Process.css";

import {
    FiSearch,
    FiEdit3,
    FiCode,
    FiCheckCircle,
    FiUploadCloud,
    FiLifeBuoy
} from "react-icons/fi";

function Process() {

    const process = [

        {
            icon:<FiSearch/>,
            title:"Discover",
            desc:"Understand project goals, business requirements and user needs before writing code."
        },

        {
            icon:<FiEdit3/>,
            title:"Plan",
            desc:"Design the application architecture, database structure and development roadmap."
        },

        {
            icon:<FiCode/>,
            title:"Develop",
            desc:"Build clean, scalable frontend and backend systems with modern technologies."
        },

        {
            icon:<FiCheckCircle/>,
            title:"Test",
            desc:"Verify functionality, responsiveness, performance and reliability before deployment."
        },

        {
            icon:<FiUploadCloud/>,
            title:"Deploy",
            desc:"Deploy production-ready applications with secure configurations and cloud services."
        },

        {
            icon:<FiLifeBuoy/>,
            title:"Support",
            desc:"Provide maintenance, bug fixes and future feature enhancements after launch."
        }

    ];

    return (

        <section className="process" id="process">

            <div className="container">

                <p className="process-tag">
                    DEVELOPMENT PROCESS
                </p>

                <h2>
                    From Idea
                    <span> To Deployment</span>
                </h2>

                <p className="process-intro">
                    Every successful project follows a structured workflow.
                    Here's how I approach software development from start to finish.
                </p>

                <div className="process-grid">

                    {

                        process.map((step,index)=>(

                            <div
                                className="process-card"
                                key={index}
                            >

                                <div className="process-number">
                                    0{index+1}
                                </div>

                                <div className="process-icon">
                                    {step.icon}
                                </div>

                                <h3>{step.title}</h3>

                                <p>{step.desc}</p>

                            </div>

                        ))

                    }

                </div>

            </div>

        </section>

    );

}

export default Process;