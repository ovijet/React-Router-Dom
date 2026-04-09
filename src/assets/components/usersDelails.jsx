import React from "react";
import { useLoaderData } from "react-router";

const UsersDelails = () => {
  const userData = useLoaderData();
  console.log(userData);
  let { name, email } = userData;

  return (
    <div>
      <p>name: {name}</p>
      <p>email: {email}</p>
    </div>
  );
};

export default UsersDelails;



