import React from "react";
import { Link } from "react-router";

const PostDetails = ({ use }) => {
  let { id } = use;
  return (
    <div className="border border-red-800 p-5">
      <p>{use.title}</p>
      <p>{use.body}</p>
      <Link to={`/post/${id}`}>
        <button className="btn mt-5">posted</button>
      </Link>
    </div>
  );
};

export default PostDetails;
