import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
// import Posts from "../Blog/Posts";

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


const SinglePost = () => {
  const { postId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_POST, {
    variables: { postId },
  });

  const post = data?.post || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="m-4">
      <h2>{post.titlePost}</h2>
      <h5>{post.dateCreated}</h5>
      <p>{post.paragraph}</p>
    </div>
  );
};

export default SinglePost;