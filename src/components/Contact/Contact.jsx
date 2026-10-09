import "./Contact.css";
import {FiMail,FiGithub,FiLinkedin} from "react-icons/fi";

function Contact(){

return(

<section className="contact" id="contact">

<div className="container contact-box">

<h2>Let's Build Something Amazing.</h2>

<p>
I'm available for freelance work, SaaS development,
backend systems and long-term collaborations.
</p>
<p>
Flexible freelance pricing
Available for project-based work, short-term contracts, and ongoing development support. Pricing depends on the project scope and requirements. Contact me for a quote.
</p>
<div className="contact-links">

<a
  href="mailto:quantizeddeveloper@gmail.com?subject=Freelance%20Project"
  target="_blank"
  rel="noopener noreferrer"
>
  <FiMail /> Email
</a>

<a href="https://github.com/QuantizedDeveloper"><FiGithub/> GitHub</a>

<a href="https://discord.gg/96K5BSk2"><FiLinkedin/> Discord </a>

</div>

</div>

</section>

);

}

export default Contact;