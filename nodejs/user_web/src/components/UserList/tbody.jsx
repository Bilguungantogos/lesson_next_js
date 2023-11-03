import React from "react";
import TRow from "./trow";

const TBody = ({ users }) => {
  return (
    <tbody>
      {users.map((user) => (
        <TRow user={user} />
      ))}
    </tbody>
  );
};

export default TBody;
