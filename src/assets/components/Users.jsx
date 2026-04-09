import React from "react";
import { Link } from "react-router";

const Users = ({ users }) => {
  let { name, email, phone, id } = users;
  return (
    <div className="border border-red p-3 text-center">
      <div className="">
        <p>{name}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <Link to={`/users/${id}`}>show now</Link>
      </div>
    </div>
  );
};

export default Users;
