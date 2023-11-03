const fs = require("fs");
exports.MyLog = class MyLog {
  constructor() {
    this.fileName = "";
  }

  log(message, level = "success") {
    //null coelesing
    console.log("L", level);
    switch (level) {
      case "info": {
        fs.appendFileSync("info.log", message);
        break;
      }
      case "error": {
        fs.appendFileSync("error.log", message);
        break;
      }
      case "success": {
        fs.appendFileSync("success.log", message);
        break;
      }
      default: {
      }
    }
  }
};
