import "./FAQ.css";

function FAQ(){

const faq=[

["Can you build from scratch?","Yes. I can design and develop complete web applications from planning to deployment."],

["Can you work on existing projects?","Yes. I can add features, fix bugs and improve existing applications."],

["What technologies do you use?","React, Django, Django REST Framework, PostgreSQL, JavaScript, Python and more."],

["Can you build SaaS products?","Yes. SaaS development is one of my primary focuses."],

["Do you provide support?","Yes. I provide maintenance and future improvements after launch."]

];

return(

<section className="faq" id="faq">

<div className="container">

<p className="faq-tag">FAQ</p>

<h2>Frequently Asked <span>Questions</span></h2>

<div className="faq-list">

{faq.map((item,index)=>(

<div className="faq-card" key={index}>

<h3>{item[0]}</h3>

<p>{item[1]}</p>

</div>

))}

</div>

</div>

</section>

);

}

export default FAQ;