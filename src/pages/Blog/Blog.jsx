/* eslint-disable react/jsx-key */
import "./Blog.css";
import Posts from "./Posts";
// import { Link } from "react-router-dom";
import "../../main.css";

export default function Blog() {
  return (
    <>
      <h2 className="d-flex justify-content-center m-3 blog">Blog</h2>

      {Posts.map((post) => (
        <div className="m-3" key={post.id}>
          <div className="post m-4" to={`/Blog/${post.id}`}>
            <h2 key={post.postId}>{post.titlePost} </h2>
            <h5>{post.dateCreated}</h5>
            <p>{post.paragraph}</p>
          </div>
        </div>
      ))}
    </>
  );
}
