//Node.js로 만드는 클래식한 앱 서버
import http from "http"
import fs from "fs"
import url from "url"
import path from "path"

function serverStaticFile(response, path, contentType, responseCode) {
    fs.readFile(path, function (err, data) {
      if (err) {
        response.writeHead(500, { "Content-Type": "text/plain" });
        response.end("500 - Internet Error");
      } else {
        response.writeHead(responseCode, { "Content-Type": contentType });
        response.end(data);
      }
    });
  }

const server = http.createServer((request, response)=>{
    const urlParse = url.parse(request.url).pathname.toLowerCase(); //소문자로 변환.

    switch (urlParse) {
        case "/":
          serverStaticFile(response, "./index.html", "text/html", 200);
          break;
        case "/index":
          serverStaticFile(response, "./index.html", "text/html", 200);
          break;
        case "/about":
          serverStaticFile(response, "./about.html", "text/html", 200);
          break;
        case "/content":
          serverStaticFile(response, "./content.html", "text/html", 200);
          break;
        case "/style.css":
          serverStaticFile(response, "./style.css", "text/css", 200);
          break;
        case "/script.js":
          serverStaticFile(response, "./script.js", "text/javascript", 200);
          break;
        default:
          serverStaticFile(response, "./404.html", "text/html", 404);
          break;
      }
})

server.listen(2080,()=>{
    console.log('2080번 포트')
})