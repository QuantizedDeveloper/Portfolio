import "./WhyMe.css";
import { FiZap, FiShield, FiCode, FiUsers } from "react-icons/fi";

function WhyMe() {

const points=[
{
icon:<FiCode/>,
title:"Clean Code",
desc:"Readable, scalable and maintainable code following modern practices."
},
{
icon:<FiZap/>,
title:"Fast Delivery",
desc:"Rapid development without sacrificing quality and architecture."
},
{
icon:<FiShield/>,
title:"Reliable Systems",
desc:"Secure authentication, APIs and production-ready applications."
},
{
icon:<FiUsers/>,
title:"Business Mindset",
desc:"I build products that solve business problems, not just features."
}
];

return(
<section className="whyme" id="whyme">

<div className="container">

<p className="why-tag">WHY CHOOSE ME</p>

<h2>Why Clients <span>Work With Me</span></h2>

<div className="why-grid">

{points.map((item,index)=>(

<div className="why-card" key={index}>

<div className="why-icon">{item.icon}</div>

<h3>{item.title}</h3>

<p>{item.desc}</p>

</div>

))}

</div>

</div>

</section>
);

}

export default WhyMe;