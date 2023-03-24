//Node.js로 만드는 클래식한 앱 서버
import http from "http"
import fs from "fs"
import url, { URL } from 'url'
import path from "path"

function serverStaticFile(response,path,contentType,responseCode){
    fs.readFile(path,function(err,data){
        if(err){
            //인터넷 서버 에러를 뜻하는 500코드(http code)
            response.writeHead(500,{"Content-Type":"text/plain"})
            response.end('500 - Internet Error')
        }else{
            response.writeHead(responseCode,{'Content-Type': contentType})
            response.end(data)
        }
    })
}

const server = http.createServer((request, response)=>{
    const url = request.url.toLowerCase(); //소문자로 변환.
    // const url2 = path.parse(request.url).ext.toLowerCase();//안됨. node.js deprecated
    const reqSplit = request.url.split("?")[0]
    console.log(reqSplit)
    switch(reqSplit){ //조건문이 다양하거나(if문) 복잡할때는 switch문 사용
        case '/':
            serverStaticFile(response, './index.html','text/html',200);
            break
        case '/index':
            serverStaticFile(response, './index.html','text/html',200);
            break
        case '/favicon.ico':
            serverStaticFile(response, './favicon.png','text/html',200);
            break
        case '/about':
            serverStaticFile(response, './about.html','text/html',200);
            break
        case '/content':
            serverStaticFile(response, './content.html','text/html',200);
            break
        case '/style.css':
            serverStaticFile(response, './style.css','text/css',200);
            break
        case '/script.js':
            serverStaticFile(response, './script.js','text/javascript',200);
            break
        default:
            serverStaticFile(response, './404.html','text/html',404);
            break
        
    }
})

server.listen(2080,()=>{
    console.log('2080번 포트')
})