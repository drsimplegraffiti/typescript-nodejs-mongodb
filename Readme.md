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

- create a class in utils folder and create a file StringUtil.ts
- in StringUtil

```

export class StringUtil {
    public static printLength(str: string): number {
        return str.length
    }
}
```

```javascript
import http, { Server, IncomingMessage, ServerResponse } from "http";
import { StringUtil } from "./utils/StringUtils";

const hostname: string = "127.0.0.1";
const port: number = 5000;

const server: Server = http.createServer(
  (request: IncomingMessage, response: ServerResponse) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");
    // string util
    let customerName: string = "Joseph";
    let length: number = StringUtil.printLength(customerName);
    response.end(`<pre>Length is ${length}</pre>`);
  }
);

server.listen(port, hostname, () => {
  console.log(`server running on ${hostname}:${port}`);
});
```

---

## Exercise with Math util (custom modules)

- Create a MathUtil.ts in the utils folder

```
export class MathUtil {
    public static printMathTable(value: number): string {
        let tempStr: string = '';
        for (let i: number = 1; i <= 10; i++) {
            tempStr += `${value} * ${i} = ${value * i}`
        }
        return tempStr
    }
}
```

```javascript
import http, { Server, IncomingMessage, ServerResponse } from "http";
import { MathUtil } from "./utils/MathUtil";

const hostname: string = "127.0.0.1";
const port: number = 5000;

const server: Server = http.createServer(
  (request: IncomingMessage, response: ServerResponse) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");
    // math util
    let theNumber: number = 5;
    let result = MathUtil.printMathTable(theNumber);
    response.end(`<pre>${result}</pre>`);
  }
);

server.listen(port, hostname, () => {
  console.log(`server running on ${hostname}:${port}`);
});
```

---

## Routing in Node js

```javascript
import http, { Server, IncomingMessage, ServerResponse } from "http";

const hostname: string = "127.0.0.1";
const port: number = 5000;

const server: Server = http.createServer(
  (request: IncomingMessage, response: ServerResponse) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");

    //Node js routing
    let url: string | undefined = request.url;
    let method: string | undefined = request.method;
    let result: string = "";
    if (url === "/" && method === "GET") {
      result = `<h3 style="font-family: Lato; color: green;">Welcome to the typescript page</h3>`;
    } else if (url === "/about" && method === "GET") {
      result = `<h3 style="font-family: Lato; color: green;">About PAGE</h3>`;
    } else if (url === "/contact" && method === "GET") {
      result = `<h3 style="font-family: Lato; color: green;">Contact PAGE</h3>`;
    } else {
      result = `<h3 style="font-family: Lato; color: green;">...404 PAGE</h3>`;
    }
    response.end(`<pre>${result}</pre>`);
  }
);

server.listen(port, hostname, () => {
  console.log(`server running on ${hostname}:${port}`);
});
```

---

## Optimizing routing with class

- Create a router folder and apiRouter.ts file

```
import http from 'http';

export class ApiRouter {
    public static mapRoutes(request: http.IncomingMessage, response: http.ServerResponse) {

        //Node js routing
        let url: string | undefined = request.url;
        let method: string | undefined = request.method;
        let result: string = "";
        if (url === "/" && method === "GET") {
            result = `<h3 style="font-family: Lato; color: green;">Welcome to the typescript page</h3>`;
        } else if (url === "/about" && method === "GET") {
            result = `<h3 style="font-family: Lato; color: green;">About PAGE</h3>`;
        } else if (url === "/contact" && method === "GET") {
            result = `<h3 style="font-family: Lato; color: green;">Contact PAGE</h3>`;
        } else {
            result = `<h3 style="font-family: Lato; color: green;">...404 PAGE</h3>`;
        }
        response.end(`<pre>${result}</pre>`);
    }
}
```

In app.ts

```javascript
import http, { Server, IncomingMessage, ServerResponse } from "http";
import { ApiRouter } from "./router/apiRouter";
const hostname: string = "127.0.0.1";
const port: number = 5000;

const server: Server = http.createServer(
  (request: IncomingMessage, response: ServerResponse) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");

    // routes
    ApiRouter.mapRoutes(request, response);
  }
);

server.listen(port, hostname, () => {
  console.log(`server running on ${hostname}:${port}`);
});
```

---

## Handling POST Request ----> Form Data Handling

```javascript
import http, { Server, IncomingMessage, ServerResponse } from "http";
const hostname: string = "127.0.0.1";
const port: number = 5000;

const server: Server = http.createServer(
  (request: IncomingMessage, response: ServerResponse) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");

    // url and post request
    try {
      if (request.url === "/user" && request.method === "POST") {
        let body: any = "";
        request
          .on("data", (chunk) => {
            body += chunk;
          })
          .on("end", () => {
            let formData = JSON.parse(body);
            response.end(`<pre>${JSON.stringify(formData)}</pre>`);
          });
      }
    } catch (error) {
      console.log(error);
    }
  }
);

server.listen(port, hostname, () => {
  console.log(`server running on ${hostname}:${port}`);
});
```

- Result
  <kbd><pre>{"name":"joe","age":67}</pre></kbd>

---

## Login functionality using NodeJs with Typescript

```javascript
import http, { Server, IncomingMessage, ServerResponse } from "http";
const hostname: string = "127.0.0.1";
const port: number = 5000;

const server: Server = http.createServer(
  (request: IncomingMessage, response: ServerResponse) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");

    // url and post request
    try {
      if (request.url === "/login" && request.method === "POST") {
        let body: any = "";
        request
          .on("data", (chunk) => {
            body += chunk;
          })
          .on("end", () => {
            let formData = JSON.parse(body);
            if (formData.name === "Joe" && formData.password === "ad1234") {
              response.end(`<pre>login successful</pre>`);
            } else {
              response.end(`<pre>login denied</pre>`);
            }
          });
      }
    } catch (error) {
      console.log(error);
    }
  }
);

server.listen(port, hostname, () => {
  console.log(`server running on ${hostname}:${port}`);
});
```
