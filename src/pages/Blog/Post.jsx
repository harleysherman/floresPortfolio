import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { QUERY_SINGLE_POST } from "../utils/helpers";

// export default function GetPosts() {
//   const { postId } = useParams();

//   const selectedPost = Posts[parseInt(postId) -1];

//   return (
//     <div className="m-4">
//       <h2>{selectedPost.title}</h2>
//       <h5>{selectedPost.dateCreated}</h5>
//       <p>{selectedPost.paragraph}</p>
//     </div>
//   );
// }

export default function Post() {
  const { id } = useParams();
  // const selectedPost = Posts[parseInt(postId) - 1];

  const { loading, data, error } = useQuery(QUERY_SINGLE_POST, {
    variables: { id },
  });

  const post = data?.post || [];

  if (loading) {
    console.log("Loading:", loading);
    return <div>Loading...</div>;
  } else if (error) {
    console.error("Error fetching data:", error);
    console.log("Error:", error);
    console.log("Data:", data);
    return <div>{error}</div>;
  } else {
    return (
      <>
        <h2 className="d-flex justify-content-center m-3 Post">Post</h2>
        {post.map((post) => (
          <div className="m-3" key={post.id}>
            <Link className="post m-4" to={`/Blog/${post.id}`}>
              <h2>{post.title}</h2>
              <h5>{post.dateCreated}</h5>
              <p>{post.paragraph}</p>
            </Link>
          </div>
        ))}
      </>
    );
  }
}