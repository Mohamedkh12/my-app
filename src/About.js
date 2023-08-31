import chef1 from "./icons_assets/Mario and Adrian A.jpg"
import chef2 from "./icons_assets/Mario and Adrian b.jpg"
import "./About.css"
export function About(){
    return (
        <div className="about">
            <div  className="about-container">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p id="pp">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
</div>
<div className="about-img">
    <img src={chef1} alt="" width="276 px" height={338} />
    <img src={chef2} alt="" width={272} height={338}/> 
</div>
        </div>
    )
}