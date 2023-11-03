import React from "react";
import THead from "./thead";
import TBody from "./tbody";

const Table = ({ users }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="table">
        <THead />
        <TBody users={users} />
      </table>
    </div>
  );
};

export default Table;
