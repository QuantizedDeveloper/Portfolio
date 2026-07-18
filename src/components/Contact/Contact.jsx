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

<div className="contact-links">

<a
  href="mailto:quantizeddeveloper@gmail.com?subject=Freelance%20Project"
  target="_blank"
  rel="noopener noreferrer"
>
  <FiMail /> Email
</a>

<a href="https://github.com/QuantizedDeveloper"><FiGithub/> GitHub</a>

<a href="https://www.linkedin.com/in/ranveer-patel-472ba5422?utm_source=share_via&utm_content=profile&utm_medium=member_android"><FiLinkedin/> LinkedIn</a>

</div>

</div>

</section>

);

}

export default Contact;