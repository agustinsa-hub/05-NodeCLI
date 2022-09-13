const commands = require("./commands");
const fs = require("fs");

const done = function (output) {
  process.stdout.write(output + "\n");
  process.stdout.write("prompt > ");
};

// Un prompt como output
process.stdout.write("prompt > ");

// El evento STDIN 'data' se dispara cuando el usuario escribe una línea
process.stdin.on("data", function (data) {
  let cmd = data.toString().trim(); // Remueve la nueva línea
  let arr = cmd.split(" ");
  if (arr[0] === "pwd") {
    commands.pwd(done);
  } else if (arr[0] === "date") {
    commands.date(done);
  } else if (arr[0] === "ls") {
    commands.ls(done);
  } else if (arr[0] === "echo") {
    commands.echo(arr, done);
  } else if (arr[0] === "cat") {
    for (let i = 1; i < arr.length; i++) {
      commands.cat(arr[i], done);
    }
  } else if (arr[0] === "head") {
    commands.head(arr[1], done);
  } else if (arr[0] === "tail") {
    commands.tail(arr[1], done);
  } else if (arr[0] === "sort") {
    commands.sort(arr[1], done);
  } else if (arr[0] === "wc") {
    commands.wc(arr[1], done);
  } else if (arr[0] === "uniq") {
    commands.uniq(arr[1], done);
  } else if (arr[0] === "curl") {
    commands.curl(arr[1], done);
  }
});
