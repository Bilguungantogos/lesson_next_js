// Өгөгдсөн текст утгыг файл руу бичдэг функцийг бичих
// Бичигдэж байгаа утгууд хэзээ бичигдсэнийг харах боломжтой байх

const fs = require("fs");
const data = "Өгөгдсөн текст утгыг файлруу бичдэг функцийг бичих";

const writer = () => {
  const udur = Date();
  fs.appendFile("test.txt", data + ". " + "(" + udur + ")", (err) => {
    if (err) {
      console.log("Write Err ", err);
    }
    console.log("Succeeded");
  });
};
writer();
