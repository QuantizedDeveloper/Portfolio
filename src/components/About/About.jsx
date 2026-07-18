import "./About.css";

function About() {
  return (
    <section className="about" id="about">

      <div className="container">

        <p className="section-tag">
          ABOUT ME
        </p>

        <h2 className="section-heading">
          I Build Products,
          <span> Not Just Websites.</span>
        </h2>

        <p className="about-intro">
          I specialize in building complete web applications—from intuitive
          user interfaces to scalable backend systems. My focus is creating
          software that solves business problems, remains maintainable, and
          performs reliably as it grows.
        </p>

        <div className="about-grid">

          <div className="about-card">
            <h3>🚀 Product Thinking</h3>
            <p>
              I approach every project by understanding the business goal first,
              then designing features that create real value.
            </p>
          </div>

          <div className="about-card">
            <h3>🏗 Clean Architecture</h3>
            <p>
              I write organized, scalable code with reusable components and
              maintainable backend architecture.
            </p>
          </div>

          <div className="about-card">
            <h3>⚡ Performance</h3>
            <p>
              Fast APIs, optimized databases, responsive interfaces, and smooth
              user experiences are part of every project.
            </p>
          </div>

          <div className="about-card">
            <h3>🤝 Collaboration</h3>
            <p>
              I communicate clearly, adapt quickly to feedback, and enjoy
              working with founders, startups, and development teams.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;