import "./CaseStudy.css";
import dummy3 from "../../assets/linkx.png";

function CaseStudy() {

    const timeline = [
        {
            title: "The Problem",
            text: "Freelancers struggle to find quality opportunities while businesses spend too much time searching for the right talent."
        },
        {
            title: "The Solution",
            text: "Build an AI-powered freelancing platform that intelligently matches businesses with freelancers based on skills and project requirements."
        },
        {
            title: "Architecture",
            text: "Designed a scalable full-stack architecture using React, Django REST Framework, PostgreSQL, Supabase and cloud services."
        },
        {
            title: "Key Features",
            text: "Authentication, AI matching, realtime messaging, notifications, freelancer profiles, search and responsive dashboards."
        },
        {
            title: "Challenges",
            text: "Implemented secure authentication, realtime communication, scalable APIs and intelligent ranking while keeping the platform maintainable."
        },
        {
            title: "Outcome",
            text: "A modern SaaS platform capable of supporting businesses and freelancers through a complete hiring workflow."
        }
    ];

    return (

        <section className="case-study" id="case-study">

            <div className="container">

                <p className="case-tag">
                    CASE STUDY
                </p>

                <h2>
                    Building
                    <span> LinkX</span>
                </h2>

                <p className="case-intro">
                    LinkX is more than a portfolio project. It represents my
                    approach to designing scalable software systems from idea
                    to deployment.
                </p>

                <div className="case-top">

                    <div className="case-image">

                        <img
                            src={dummy3}
                            alt="LinkX"
                        />

                    </div>

                    <div className="case-summary">

                        <h3>
                            AI Powered Freelancing Platform
                        </h3>

                        <p>
                            LinkX combines intelligent freelancer matching,
                            realtime communication and modern SaaS architecture
                            to improve how businesses hire talented developers.
                        </p>

                        <div className="case-tags">

                            <span>React</span>
                            <span>Django</span>
                            <span>DRF</span>
                            <span>PostgreSQL</span>
                            <span>Supabase</span>
                            <span>AI</span>

                        </div>

                    </div>

                </div>

                <div className="timeline">

                    {

                        timeline.map((item,index)=>(

                            <div
                                className="timeline-card"
                                key={index}
                            >

                                <h3>{item.title}</h3>

                                <p>{item.text}</p>

                            </div>

                        ))

                    }

                </div>

            </div>

        </section>

    );

}

export default CaseStudy;