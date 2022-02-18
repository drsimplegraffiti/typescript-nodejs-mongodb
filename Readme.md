# Backend Server NodeJS, Typescript, MongoDb

## Software installation

> Nodejs
> Typescript
> Ts-node & nodemon
> Postman
> MongodDb

## Install Typescript globally

> npm install -g typescript
> tsc --version

## Install Ts-node & nodemon

> npm install -g ts-node
> npm install -g nodemon

## Check version of Ts-node and nodemon

> ts-node --version
> nodemon --version

## Start a node-typescript project

> npm init -y
> tsc --init for tsconfig.json
> npm install @types/node

## Configure tsconfig.json

> change target to "ES2017"

---

## How to run a typescript program ---> 4 methods

> tsc app.ts node app.js
> ts-node app.ts
> nodemon app.ts (server)
> npm start

```
ts-node app.ts
```

---

## Create a nodejs server ---> Typescript

```javascript
import http, { Server, IncomingMessage, ServerResponse } from "http";

const hostname: string = "127.0.0.1";
const port: number = 5000;

const server: Server = http.createServer(
  (request: IncomingMessage, response: ServerResponse) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");
    response.end(`<h3 style="font-family: Lato; color:green">Welcome</h3>`);
  }
);

server.listen(port, hostname, () => {
  console.log(`server running on ${hostname}:${port}`);
});

// start server
// nodemon app.ts
```

## Execute server with a script

```javascript
{
  "name": "typescript-2022",
  "version": "1.0.0",
  "description": "> Nodejs\r > Typescript\r > Ts-node & nodemon\r > Postman\r > MongodDb",
  "main": "index.js",
  "scripts": {
    "start": "nodemon app.ts"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@types/node": "^17.0.18"
  }
}
```

> And run npm start

---

## OS module

```javascript
import http, { Server, IncomingMessage, ServerResponse } from "http";
import os from "os";

const hostname: string = "127.0.0.1";
const port: number = 5000;

const server: Server = http.createServer(
  (request: IncomingMessage, response: ServerResponse) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");

    // os module
    let osData = {
      totalMemory: os.totalmem(),
      freeMemory: os.freemem(),
      homedir: os.homedir(),
      computerName: os.hostname(),
      platform: os.platform(),
    };

    response.end(`<pre>${JSON.stringify(osData)}</pre>`);
  }
);

server.listen(port, hostname, () => {
  console.log(`server running on ${hostname}:${port}`);
});
```

---

## File system module

- Reading

```javascript
import http, { Server, IncomingMessage, ServerResponse } from "http";
import fs from "fs";
import path from "path";

const hostname: string = "127.0.0.1";
const port: number = 5000;

const server: Server = http.createServer(
  (request: IncomingMessage, response: ServerResponse) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");

    // fs module ---> read file
    fs.readFile(
      path.join(__dirname, "data", "note.txt"),
      "utf-8",
      (error, result) => {
        if (error) throw error;
        response.end(`<pre>${result}</pre>`);
      }
    );
  }
);

server.listen(port, hostname, () => {
  console.log(`server running on ${hostname}:${port}`);
});
```

- Writing to files

```javascript
import http, { Server, IncomingMessage, ServerResponse } from "http";
import fs from "fs";
import path from "path";

const hostname: string = "127.0.0.1";
const port: number = 5000;

const server: Server = http.createServer(
  (request: IncomingMessage, response: ServerResponse) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");

    // fs module ---> write file
    fs.readFile(
      path.join(__dirname, "data", "note.txt"),
      "utf-8",
      (error, result) => {
        if (error) throw error;
        fs.writeFile(
          path.join(__dirname, "data", "data.txt"),
          result,
          "utf-8",
          (error) => {
            if (error) throw error;
          }
        );
        response.end(`<pre>Data is written successfully</pre>`);
      }
    );
  }
);

server.listen(port, hostname, () => {
  console.log(`server running on ${hostname}:${port}`);
});
```

---

## Reading json data

```javascript
import http, { Server, IncomingMessage, ServerResponse } from "http";
import fs from "fs";
import path from "path";

const hostname: string = "127.0.0.1";
const port: number = 5000;

const server: Server = http.createServer(
  (request: IncomingMessage, response: ServerResponse) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");

    //reading json data
    fs.readFile(
      path.join(__dirname, "data", "MOCK_DATA.json"),
      "utf-8",
      (error, result) => {
        if (error) throw error;
        response.end(`<pre>${result}</pre>`);
      }
    );
  }
);

server.listen(port, hostname, () => {
  console.log(`server running on ${hostname}:${port}`);
});
```

---

## Custom Module with String Util
