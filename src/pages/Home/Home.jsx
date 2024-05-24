import HomePhoto from "../../Assets/HomePageBackground.png";
import "../../main.css";
import "./Home.css";


// is homepage
export default function Home() {
  return (
    <section className="row d-flex">
      <section className="nameTitle mt-5">
        <h1 className="kanit-black d-flex justify-content-center m-1">
          Harley E.S. Flores
        </h1>
      </section>
      <div className="d-flex justify-content-center col-md-12 col-sm-12 mb-5">
        <a
          className="krub-semibold designPortfolio"
          href={"http://harleysherman.com"}
          target="_blank"
        >
          {"<-- "}Designer{" "}
        </a>
        <a
          className="krub-semibold devPortfolio"
          href={"http://localhost:3000/Portfolio"}
          target="_blank"
        >
          + Developer{" -->"}
        </a>
      </div>
      <img
        className="imageHome justify-align-center col-md-12"
        src={HomePhoto}
        alt="Photo of Generative Pattern"
      ></img>
    </section>
  );
}