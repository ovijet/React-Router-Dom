import React from "react";
import { useLoaderData } from "react-router";
import Users from "../assets/components/Users";

const Books = () => {
  let useLode = useLoaderData();
  console.log(useLode);
  return (
    <div>
      {
        useLode.map(users=> <Users users={users}></Users>)
      }
      <h1>this is a book</h1>
    </div>
  );
};

export default Books;
