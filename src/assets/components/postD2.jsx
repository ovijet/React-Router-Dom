import React from "react";
import { useLoaderData } from "react-router";

const PostD2 = () => {
  const userData = useLoaderData();
  console.log(userData);

  return (
    <div>
      <p>{userData.title}</p>
      <p>{userData.body}</p>
    </div>
  );
};

export default PostD2;
