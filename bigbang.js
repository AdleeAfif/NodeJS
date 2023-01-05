const fs = require("fs"); // import fs function to write json file

// assign value 1-100 in array
const num = Array(100)
  .fill(1)
  .map((n, i) => n + i);

// start loop from 1-100
for (i = 0; i < num.length; i++) {
  // check if the num is divisable by both 3 and 5
  if (num[i] % 3 == 0 && num[i] % 5 == 0) {
    num[i] = "BIGBANG";
  } else {
    // check if the num is divisable by 3 only
    if (num[i] % 3 == 0) {
      num[i] = "BIG";
      // check if the num is divisable by 5 only
    } else if (num[i] % 5 == 0) {
      num[i] = "BANG";
      // num is not divisable by 3 or 5
    } else {
      num[i] = num[i];
    }
  }
}

fs.writeFileSync("output.json", JSON.stringify(num)); //write the array into json form
