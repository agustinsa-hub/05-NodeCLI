const fs = require("fs");
const request = require("request");

module.exports = {
  pwd: function (done) {
    let path = process.cwd();
    done(path);
  },
  date: function (done) {
    done(Date());
  },
  ls: function (done) {
    let final = "";
    fs.readdir(".", function (err, files) {
      if (err) throw err;
      files.forEach(function (file) {
        final += file.toString() + "\n";
      });
      done(final);
    });
  },
  echo: function (arr, done) {
    let str = "";
    for (let i = 1; i < arr.length; i++) {
      str = str + arr[i] + " ";
    }
    done(str);
  },
  cat: function (file, done) {
    fs.readFile(file, function (err, data) {
      if (err) throw err;
      done(data);
    });
  },
  head: function (file, done) {
    let final = "";
    fs.readFile(file, "utf-8", function (err, data) {
      if (err) throw err;
      let lines = data.split("\n");
      for (let i = 0; i < 5; i++) {
        final += lines[i].toString() + "\n";
      }
      done(final);
    });
  },
  tail: function (file, done) {
    fs.readFile(file, "utf-8", function (err, data) {
      let final = "";
      if (err) throw err;
      let lines = data.split("\n");
      for (let i = lines.length - 5; i < lines.length; i++) {
        final += lines[i].toString() + "\n";
      }
      done(final);
    });
  },
  sort: function (file, done) {
    fs.readFile(file, "utf-8", function (err, data) {
      if (err) throw err;
      let lines = data.split("\n");
      let linesOrd = lines.sort();
      let linesFinal = linesOrd.join("\n");
      done(linesFinal);
    });
  },
  wc: function (file, done) {
    fs.readFile(file, "utf-8", function (err, data) {
      if (err) throw err;
      let lines = data.split("\n");
      done(lines.length);
    });
  },
  uniq: function (file, done) {
    let final = "";
    fs.readFile(file, "utf-8", function (err, data) {
      if (err) throw err;
      let lines = data.split("\n");
      for (let i = 0; i < lines.length; i++) {
        if (lines[i] !== lines[i - 1]) {
          final += lines[i].toString() + "\n";
        }
      }
      done(final);
    });
  },
  curl: function (url, done) {
    request(url.toString(), function (err, response, body) {
      if (err) throw err;
      done(body);
    });
  },
};
