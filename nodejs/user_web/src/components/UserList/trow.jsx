import React from "react";

const TRow = ({ user }, { users }) => {
  const getDepartment = (department) => {
    switch (department) {
      case "human resource": {
        return (
          <div className={`badge badge-primary badge-outline`}>
            {user.department}
          </div>
        );
      }
      case "technology": {
        return (
          <div className={`badge badge-secondary badge-outline`}>
            {user.department}
          </div>
        );
      }
      default: {
        return (
          <div className={`badge badge-accent badge-outline`}>
            {user.department}
          </div>
        );
      }
    }
  };

  const delete1 = (e) => {
    console.log(user);
  };
  const edit = () => {};

  return (
    <tr className="hover:bg-slate-100">
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={user.avatarUrl} alt={user.firstName} />
            </div>
          </div>
        </div>
      </td>
      <td>
        <span className="font-bold">{user.firstName}</span>
      </td>
      <td>
        <span className="font-bold">{user.lastName}</span>
      </td>
      <td>
        <span className="font-bold">{user.email}</span>
      </td>
      <td>
        <button className="btn btn-ghost btn-xs">{user.birthDate}</button>
      </td>
      <td>{getDepartment(user.department)}</td>
      <td>
        <button className=" btn btn-warning  mx-2" onClick={edit}>
          засах
        </button>
        <button className="  btn btn-error " onClick={delete1}>
          устгах
        </button>
      </td>
    </tr>
  );
};

export default TRow;
