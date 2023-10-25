const express = require("express");

const app = express();

app.use(express.json()); //middleware

// const users = [
//   { id: 1, username: "naraa", password: "123" },
//   { id: 2, username: "saraa", password: "123" },
//   { id: 3, username: "baraa", password: "123" },
//   { id: 4, username: "haraa", password: "123" },
// ];

// app.get("/", (req, res) => {
//   res.send("Hello Express Server");
// });

// app.get("/about", (req, res) => {
//   res.status(200).json({
//     name: "Naraa",
//     age: 20,
//     isVerified: true,
//     score: [100, 102],
//     address: {
//       no: 100,
//     },
//   });
// });

// JSON.parse(); JSON TO OBJECT
// JSON.stringify(); OBJECT to JSON

const fs = require("fs");

// app.get("/wordCount", (req, res) => {
//   const data = fs.readFileSync("test.txt", { encoding: "utf-8" });
//   const parsedData = data.split(" ");
//   const count = parsedData.reduce((prev, cur) => {
//     return prev + cur.length;
//   }, 0);
//   res.send(`Нийт үгийн тоо: ${count}`);
// });

// app.get("/letterCount", (req, res) => {
//   const data = fs.readFileSync("test.txt", { encoding: "utf-8" });
//   const parsedData = data.split(" ");
//   res.send(`Нийт үсгийн тоо: ${parsedData.length}`);
// });

app.get("/user/:userId", (req, res) => {
  const { users } = JSON.parse(fs.readFileSync("data.json", "utf-8"));
  const { userId } = req.params;
  const findUser = users.filter((user) => {
    return user.id === Number(userId);
  });
  if (findUser.length === 0) {
    res.status(404).json({ message: "Олдсонгүй ээ хө" });
  } else {
    res.status(200).json({ message: "Олдлоо хө", user: findUser[0] });
  }
});

app.get("/users", (req, res) => {
  const { users } = JSON.parse(fs.readFileSync("data.json", "utf-8"));
  res.status(200).json({ message: "All-user", users });
});

app.post("/users", (req, res) => {
  const { users } = JSON.parse(fs.readFileSync("data.json", "utf-8"));
  const body = req.body;
  const newUser = {
    id: users.length + 1,
    username: body.username,
    password: body.password,
  };
  users.push(newUser);
  console.log(users);
  const { writeFile } = require("fs");
  writeFile("./data.json", JSON.stringify({ users }), (error) => {
    if (error) {
      console.log("An error has occurred ", error);
      return;
    }
    console.log("Data written successfully to disk");
  });
});

//2023.10.25 put delete

const PORT = 8008;

app.get("/", (req, res) => {
  res.send("Hello Get Method");
});

app.post("/", (req, res) => {
  res.send("Hello Post Method");
});

app.put("/", (req, res) => {
  res.send("Hello Put Method");
});

app.delete("/", (req, res) => {
  res.send("Hello Delete Method");
});

app.listen(PORT, () => {
  return console.log(`Server is listening at ${PORT} port`);
});
