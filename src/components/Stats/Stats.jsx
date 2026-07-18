import "./Stats.css";

function Stats() {
  const stats = [
    {
      number: "1",
      title: "SaaS Platform",
      desc: "Designed and developed a complete full-stack product."
    },
    {
      number: "25+",
      title: "Core Features",
      desc: "Authentication, messaging, AI, profiles, search and more."
    },
    {
      number: "10+",
      title: "REST APIs",
      desc: "Secure backend APIs for scalable web applications."
    },
    {
      number: "100%",
      title: "Full Stack",
      desc: "Frontend, backend, database, deployment and integrations."
    }
  ];

  return (
    <section className="stats" id="stats">

      <div className="container">

        <div className="stats-heading">

          <p>AT A GLANCE</p>

          <h2>
            Building Complete Products,
            <span> End to End.</span>
          </h2>

        </div>

        <div className="stats-grid">

          {stats.map((item, index) => (

            <div className="stat-card" key={index}>

              <h3>{item.number}</h3>

              <h4>{item.title}</h4>

              <p>{item.desc}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Stats;