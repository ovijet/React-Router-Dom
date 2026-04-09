// import React, { use } from 'react';
import { useLoaderData } from "react-router";
import PostDetails from "./PostDetails";

const Post = () => {
  let use = useLoaderData();
  console.log(use);
  return (
    <div>
      {use.map((use) => (
        <PostDetails use={use}></PostDetails>
      ))}
    </div>
  );
};

export default Post;
