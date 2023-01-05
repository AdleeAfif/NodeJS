const fs = require("fs");

num = [];

for (i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("BIGBANG");
    num[i - 1] = "BIGBANG";
  } else {
    if (i % 3 == 0) {
      console.log("BIG, ");
      num[i - 1] = "BIGB";
    } else if (i % 5 == 0) {
      console.log("BANG, ");
      num[i - 1] = "BANG";
    } else {
      console.log(i);
      num[i - 1] = i;
    }
  }
}

fs.writeFileSync("output.json", JSON.stringify(num));
