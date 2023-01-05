const fs = require("fs"); // import fs function to write json file

num = []; //initialize empty array

// start loop from 1-100
for (i = 1; i <= 100; i++) {
  // check if the num is divisable by both 3 and 5
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("BIGBANG");
    num[i - 1] = "BIGBANG";
  } else {
    // check if the num is divisable by 3 only
    if (i % 3 == 0) {
      console.log("BIG, ");
      num[i - 1] = "BIGB";
      // check if the num is divisable by 5 only
    } else if (i % 5 == 0) {
      console.log("BANG, ");
      num[i - 1] = "BANG";
      // num is not divisable by 3 or 5
    } else {
      console.log(i);
      num[i - 1] = i;
    }
  }
}

fs.writeFileSync("output.json", JSON.stringify(num)); //write the array into json form
