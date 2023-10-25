const express = require("express");

const app = express();
const PORT = 8008;
app.use(express.json()); //middleware

const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
///////////////////////////////
app.get("/api/users", (req, res) => {
  const { users } = JSON.parse(
    fs.readFileSync("users.json", { encoding: "utf-8" })
  );
  res.status(200).json({ message: "success", users });
});
///////////////////////////////
app.post("/api/users", (req, res) => {
  const newUser = { id: uuidv4(), ...req.body };

  const { users } = JSON.parse(
    fs.readFileSync("users.json", { encoding: "utf-8" })
  );
  users.push(newUser);
  fs.writeFileSync("./users.json", JSON.stringify({ users }), {
    encoding: "utf-8",
  });
  res.status(201).json({ message: "success" });
});
///////////////////////////////
app.put("/api/users/:userId", (req, res) => {
  const { userId } = req.params;
  const { users } = JSON.parse(
    fs.readFileSync("users.json", { encoding: "utf-8" })
  );
  const index = users.findIndex((el) => el.id === userId);
  if (index < 0) {
    res.status(400).json({
      message: `${userId}-tai hereglegch oldsongui tul uurchilj chadsangui`,
    });
  } else {
    users[index] = { userId, ...req.body };
    fs.writeFileSync("./users.json", JSON.stringify({ users }), {
      encoding: "utf-8",
    });
    res.status(200).json({ message: `${userId}-tai hereglegchiig zaslaa` });
  }
});
///////////////////////////////

///////////////////////////////
app.delete("/api/users/:userId", (req, res) => {
  const { userId } = req.params;
  const { users } = JSON.parse(
    fs.readFileSync("users.json", { encoding: "utf-8" })
  );
  const index = users.findIndex((el) => el.id === userId);

  if (index < 0) {
    res.status(400).json({ message: `${userId}-tai hereglegch oldsongui` });
  } else {
    users.splice(index, 1);
    fs.writeFileSync("./users.json", JSON.stringify({ users }), {
      encoding: "utf-8",
    });
    res.status(200).json({ message: `${userId}-tai hereglegchiig ustgalaa` });
  }
});
///////////////////////////////
app.listen(PORT, () => {
  return console.log(`Server is listening at ${PORT} port`);
});
