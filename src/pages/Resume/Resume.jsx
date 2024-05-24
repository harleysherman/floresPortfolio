import PDF from "../../Assets/HarleyFloresResume.pdf";
import "../../main.css";
import "./Resume.css";
import sideIcon from "../../Assets/sideIcon.png";

export default function Resume() {
  return (
    <div className="d-flex">
      <div className="me-auto align-items-start flex-column m-4">
        <h2 className="resume krub-semibold ">Resume</h2>
        <section className="skills m-3 p-6">
          Front End Skills:
          <ul className="m-3">
            <li>React</li>
            <li>CSS</li>
            <li>Handlebars</li>
            <li>Bootstrap</li>
            <li>Express</li>
            <li>HTML</li>
          </ul>
        </section>

        <section className="skills m-3 p-6">
          Back End Skills:
          <ul className="m-3">
            <li>MySQL</li>
            <li>MongoDB & Mongoose</li>
            <li>Jest</li>
            <li>JQuery</li>
            <li>Sequelize</li>
            <li>API</li>
          </ul>
        </section>
        <a className="link" href={PDF} target="_blank">
          Resume Link
        </a>
      </div>

      <div className="d-flex align-items-end flex-column">
        <img src={ sideIcon } alt="Row of flowers on the side"></img>
      </div>
    </div>
  );
}
