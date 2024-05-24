import Card from "./Card";
import "./Portfolio.css";
import projectDev from "./projects";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <div>
      <h2 className="d-flex m-4 portfolio justify-content-center">Portfolio</h2>
      <section className="row">
        {projectDev.map((element) => (
          <li
            className="krub-medium projectLi col-md-6 col-sm-12 p-4"
            key={element.id}
          >
            <Link to={`/project/${element.id}`}>
              <Card project={element} />
            </Link>
          </li>
        ))}
      </section>
    </div>
  );
}

export default Portfolio;
