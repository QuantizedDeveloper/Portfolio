import "./Hero.css";
import chat from "../../assets/chat.png";
import auth from "../../assets/auth.png";
import ai from "../../assets/ai.png";
import profile from "../../assets/profile.png";
import gig from "../../assets/gig.png";
import notify from "../../assets/notify.png";

function Hero() {
  return (
    <section className="hero" id="hero">

      <div className="container hero-container">

        <div className="hero-left">

          <p className="hero-tag">
            FULL STACK DEVELOPER • DJANGO • REACT • AI
          </p>

          <h1>
            Building Modern
            <span> SaaS Products </span>
            That Scale.
          </h1>

          <p className="hero-description">
            I build production-ready web applications using Django REST
            Framework, React.js, PostgreSQL, JavaScript, and AI-powered
            features. From authentication and real-time messaging to APIs,
            dashboards, and scalable backend systems, I turn ideas into
            reliable software.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-btn">
              View Projects
            </a>

            <a href="#contact" className="secondary-btn">
              Hire Me
            </a>

          </div>

        </div>

        <div className="hero-right">

    <h3 className="proof-title">
        Features I've Built
    </h3>

    <div className="feature-grid">

        <div className="feature-card">

            <img src={chat} alt="Messaging"/>

            <h4>Real-Time Chat</h4>

            <p>Live messaging with realtime updates.</p>

        </div>

        <div className="feature-card">

            <img src={auth} alt="Authentication"/>

            <h4>Authentication</h4>

            <p>JWT login with Email Verification.</p>

        </div>

        <div className="feature-card">

            <img src={ai} alt="AI"/>

            <h4>AI Matching</h4>

            <p>Smart freelancer recommendations.</p>

        </div>

        <div className="feature-card">

            <img src={profile} alt="Profile"/>

            <h4>User Profiles</h4>

            <p>Professional freelancer dashboards.</p>

        </div>

        <div className="feature-card">

            <img src={gig} alt="Projects"/>

            <h4>Project Posting</h4>

            <p>Create and manage client projects.</p>

        </div>

        <div className="feature-card">

            <img src={notify} alt="Notifications"/>

            <h4>Notifications</h4>

            <p>Instant platform activity updates.</p>

        </div>

    </div>

</div>



      </div>

    </section>
  );
}

export default Hero;