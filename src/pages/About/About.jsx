import DevPhoto from "../../Assets/Sherman-Harley-SelfPortrait.jpg";
import "../../main.css";
import "./About.css";

export default function About() {
  return (
    <section className="row">
      <img className=" col-md-4 col-sm-12 imageDev" src={DevPhoto} alt="Photo of Harley"></img>
      <div className="p-4 col-md-8 col-sm-12">
        <h1>About Me</h1>
        <p>
          Full Stack Web Developer with a background in graphic design and a
          tenacity to solve tough problems. Currently seeking employment in Web
          Development. Detail-oriented with a strong diligence in every project,
          even the smallest details. Work great under a tight deadline.
        </p>
      </div>
    </section>
  );
}
