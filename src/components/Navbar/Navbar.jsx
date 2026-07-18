import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-container">

        <a href="#hero" className="logo">
          <span className="logo-text">Ranveer.</span>
        </a>

        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">What I Build</a></li>
          <li><a href="#techstack">Tech Stack</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <a href="#contact" className="hire-btn">
          Hire Me
        </a>

      </div>
    </nav>
  );
}

export default Navbar;