import projectDev from "./projects";
import "./Portfolio.css";
import { useParams } from "react-router-dom";

function Project() {
  const { projectId } = useParams();

  console.log(projectDev);

  const clickedProj = projectDev.filter((project) => project.id == projectId);

  console.log(clickedProj);

  return (
    <>
      {clickedProj.map((project) => (
        <section className="row m-4" key={project.id}>
          <img
            className="projectImage col-md-5 col-sm-12"
            src={project.imageURL}
            alt="Project Image"
          ></img>
          <section className="col">
            <h2 className="col-md-12 col-sm-12">{project.name}</h2>
            <h4 className="col-md-12 col-sm-12">{project.category}</h4>
            <a className="col-md-2 col-sm-12" href={project.deployedURL}>
              Deployed
            </a>
            <a className="col-md-12 col-sm-12 m-2" href={project.githubURL}>
              GitHub
            </a>
            <p className="col-md-12 col-sm-12">{project.description}</p>
          </section>
        </section>
      ))}
    </>
  );
}
export default Project;
