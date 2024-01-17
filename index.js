import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Type your URL here: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    var qr_svg = qr.image(answers.URL);
    qr_svg.pipe(fs.createWriteStream("qr_image.png"));
    fs.writeFile("URL.txt", answers.URL, (err) => {
      console.log("URL saved");
    });
  })
  .catch((error) => {
    console.log("Something went wrong");
  });
