// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const { exec } = require('child_process');

var mybutton = document.getElementById('mybutton');

mybutton.onclick = function(){

    var command = '.\\node_modules\\.bin\\cucumber-electron'
    exec(command, (err, stdout, stderr) => {
        if (err) {
          console.log(err);
          return;
        }
      
        // the *entire* stdout and stderr (buffered)
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
      });

    // Once I get the entire output from cucumber HTML I want to display it on the inner DIV
    // document.getElementById("mydiv").innerHTML = "Hello World";

}