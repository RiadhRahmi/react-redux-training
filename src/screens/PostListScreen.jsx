import React, { useEffect } from "react";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { listPosts } from "../actions/postsActions";



function PostListScreen() {

  const dispatch = useDispatch();

  const postList = useSelector((state) => state.postList);
  const { posts, loading, error } = postList;


  useEffect(() => {
     dispatch(listPosts());
  }, [dispatch]);

 

  return (
    <div>
      <h1>List of Posts</h1>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>TITILE</th>
              <th>BODY</th>
            </tr>
          </thead>

          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default PostListScreen;
