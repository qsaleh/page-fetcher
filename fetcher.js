const request = require('request');
const fs = require('fs');
const inputURL = process.argv[2];
const outputFile = process.argv[3];

request(inputURL, (error, body) => {
  if (error === null){
    fs.writeFile(outputFile, body,() => {
      if (error) throw err;
    console.log(`Downloaded and saved ${fs.statSync(outputFile).size} bytes to ${outputFile}`);
  });
} else {
    console.log(`Download failed.`);
  }
});
