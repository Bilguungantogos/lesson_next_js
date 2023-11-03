import React, { useEffect, useState } from "react";

import UserList from "@/components/UserList";
import Form from "@/components/Form";
import Toast from "@/components/Toast";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const [userList, setUserList] = useState([]);

  const closeForm = () => {
    console.log("Formee");
    setOpen(false);
    setCount(5);
    setRefresh(!refresh);
  };

  const getAllUser = async () => {
    const { users } = await fetch("http://localhost:8008/api/users").then(
      (res) => res.json()
    );
    setUserList(users);
  };

  useEffect(() => {
    getAllUser();
  }, [refresh]);

  return (
    <main className={``}>
      <h1 className="text-center text-2xl font-bold my-4">
        Хэрэглэгчийн жагсаалт
      </h1>

      {/* <Form open={open} closeForm={closeForm} />
      <Toast message={"Шинэ хэрэглэгчийг амжилттай нэмлээ"} count={count} /> */}
      <div className=" m-5 flex justify-end">
        <button
          className="btn btn-primary"
          onClick={() => {
            setOpen(true);
          }}
        >
          Шинэ хэрэглэгч нэмэх {count}
        </button>
      </div>
      <Form open={open} closeForm={closeForm} />
      <UserList users={userList} />
    </main>
  );
}

// useEffect(() => {
//   const interval = setInterval(() => {
//     console.log("working");
//     setCount((count) => count - 1);
//   }, 1000);

//   if (count <= 0) {
//     clearInterval(interval);
//   }

//   return () => clearInterval(interval);
// }, [count]);
