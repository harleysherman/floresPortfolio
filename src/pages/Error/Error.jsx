import { useRouteError } from 'react-router-dom';
import CatPic from "../../Assets/CatPic.jpeg";
import './Error.css';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>I am not sure how you got here. But here is a cat.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <img src={ CatPic } alt="Random Cat Pic"></img>
    </div>
  );
}
