import React from "react";
import TRow from "./trow";

const TBody = ({ users, handleUpdate, handleDelete }) => {
  return (
    <tbody>
      {users.map((user) => (
        <TRow
          user={user}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
      ))}
    </tbody>
  );
};

export default TBody;
