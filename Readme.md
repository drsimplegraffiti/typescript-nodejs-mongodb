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

---

## Create server with Express JS

```Javascript
// npm install @types/node @types/express express

import express, { response } from 'express';

const app: express.Application = express();

// Host and port
const hostname: string = '127.0.0.1';
const port: number = 5000;


app.get('/', (request: express.Request, response: express.Response) => {
    response.status(200).send(`<h3>welcome to express typescript</h3>`)
    // response.send() ---> for html tag
    // response.sendFile() ---> for html page response
    // response.json() ---> for json
    // response.download() ---> for download
})


// Listen to server
app.listen(port, hostname, () => {
    console.log(`App running on ${hostname}:${port}`);

})
```

---

## Routing in Express

- In app.ts

```javascript
import express, { response } from "express";
import apiRouter from "./router/apiRouter";

const app: express.Application = express();

// Host and port
const hostname: string = "127.0.0.1";
const port: number = 5000;

app.get("/", (request: express.Request, response: express.Response) => {
  response.status(200).send(`<h3>welcome to express typescript</h3>`);
});

// Configuration for router
app.use("/api", apiRouter);

// Listen to server
app.listen(port, hostname, () => {
  console.log(`App running on ${hostname}:${port}`);
});
```

- In Router folder/apiRouter.ts

```javascript
import express from "express";

const apiRouter: express.Router = express.Router();

// GET request
apiRouter.get("/", (request: express.Request, response: express.Response) => {
  response.status(200).send(`<h3>welcome to API ROUTER <h3>`);
});

apiRouter.get(
  "/test",
  (request: express.Request, response: express.Response) => {
    response.status(200).send(`<h3>Test API ROUTER <h3>`);
  }
);
export default apiRouter;
```

---

## Handling Form Data Express and Typescript

- In app.ts

```Javascript
import express, { response } from 'express';
import userRouter from './router/useRouter';

const app: express.Application = express();

// Host and port
const hostname: string = '127.0.0.1';
const port: number = 5000;


// middleware ---> form data
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (request: express.Request, response: express.Response) => {
    response.status(200).send(`<h3>welcome to express typescript</h3>`)
})

// Configuration for router
app.use('/api', userRouter);


// Listen to server
app.listen(port, hostname, () => {
    console.log(`App running on ${hostname}:${port}`);

})
```

- In userRouter

```javascript
import express from "express";

const useRouter: express.Router = express.Router();

/* *
    @usage: home page check
    @ url : http:127.0.0.1:5000/api/
    @ method : GET
    @ fields : none
    @ access : PUBLIC
 */
useRouter.get("/", (request: express.Request, response: express.Response) => {
  response.status(200).send(`<h3>welcome to User ROUTER <h3>`);
});

/* *
    @usage: to check form data
    @ url : http:127.0.0.1:5000/api/login
    @ method : POST
    @ fields : name , password
    @ access : PUBLIC
*/
useRouter.post(
  "/login",
  (request: express.Request, response: express.Response) => {
    const formData = request.body;
    response.status(200).json({
      message: "Form data received",
      formData: formData,
    });
  }
);
export default useRouter;
```

---

## Middleware creation

> Middleware can be specific to a route or global to the project

- In userRoute.ts

```javascript
import express from "express";
import appLogger from "../middleware/appLogger";
const useRouter: express.Router = express.Router();

/* *
    @usage: home page check
    @ url : http:127.0.0.1:5000/api/
    @ method : GET
    @ fields : none
    @ access : PUBLIC
 */
useRouter.get(
  "/",
  appLogger,
  (request: express.Request, response: express.Response) => {
    response.status(200).send(`<h3>welcome to User ROUTER <h3>`);
  }
);

/* *
    @usage: to check form data
    @ url : http:127.0.0.1:5000/api/login
    @ method : POST
    @ fields : name , password
    @ access : PUBLIC
*/
useRouter.post(
  "/login",
  (request: express.Request, response: express.Response) => {
    const formData = request.body;
    response.status(200).json({
      message: "Form data received",
      formData: formData,
    });
  }
);
export default useRouter;
```

- In app.ts

```Javascript
import express, { response } from 'express';
import userRouter from './router/useRouter';

const app: express.Application = express();

// Host and port
const hostname: string = '127.0.0.1';
const port: number = 5000;


// middleware ---> form data
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (request: express.Request, response: express.Response) => {
    response.status(200).send(`<h3>welcome to express typescript</h3>`)
})

// Configuration for router
app.use('/api', userRouter);


// Listen to server
app.listen(port, hostname, () => {
    console.log(`App running on ${hostname}:${port}`);

})
```

- In appLogger.ts

```javascript
import express from "express";

let appLogger = (
  request: express.Request,
  response: express.Response,
  next: express.NextFunction
) => {
  //track url, method, time, data
  let url = request.url;
  let method = request.method;
  let date = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();
  let result: string = `[${url}] [${method}] -[${date}] -[${time}]`;
  console.log(result);
  next();
};

export default appLogger;
```

---

## Password Encryption

> Install bcrypt --npm i bcryptjs @types/bcryptjs--> npm i bcrypt

```javascript
import express from "express";
import bcrypt from "bcryptjs";
import appLogger from "../middleware/appLogger";
const useRouter: express.Router = express.Router();

/* *
    @usage: home page check
    @ url : http:127.0.0.1:5000/api/
    @ method : GET
    @ fields : none
    @ access : PUBLIC
 */
useRouter.get(
  "/",
  appLogger,
  (request: express.Request, response: express.Response) => {
    response.status(200).send(`<h3>welcome to User ROUTER <h3>`);
  }
);

/* *
    @usage: to check form data
    @ url : http:127.0.0.1:5000/api/login
    @ method : POST
    @ fields : name , password
    @ access : PUBLIC
*/
useRouter.post(
  "/register",
  async (request: express.Request, response: express.Response) => {
    const { name, email, password } = request.body;
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      response.status(200).json({
        message: "Form data received",
        userData: { name, email, password },
        hashedPassword: hashedPassword,
      });
    } catch (error) {
      console.log(error);
    }
  }
);
export default useRouter;
```

```

### Result
{
  "message": "Form data received",
  "userData": {
    "name": "Joe",
    "email": "ta@u.com",
    "password": "ad1234"
  },
  "hashedPassword": "$2a$10$e6tVd9JbruZTYyYvP4Dv7OmCLnCmiqBl68tVj7YSTVPwyOuLLwtXm"
}
```

---

## Server side form validations

[] Express Validator

> npm install express-validator @types/express-validator

```javascript
import express from "express";
import { body, validationResult } from "express-validator";
import appLogger from "../middleware/appLogger";
const useRouter: express.Router = express.Router();

/* *
    @usage: home page check
    @ url : http:127.0.0.1:5000/api/
    @ method : GET
    @ fields : none
    @ access : PUBLIC
 */
useRouter.get(
  "/",
  appLogger,
  (request: express.Request, response: express.Response) => {
    response.status(200).send(`<h3>welcome to User ROUTER <h3>`);
  }
);

useRouter.post(
  "/register",
  [
    body("name").not().isEmpty().withMessage("Name is Required"),
    body("email").isEmail().withMessage("Valid email is Required"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Minimum 5 character required fro password"),
  ],
  appLogger,
  async (request: express.Request, response: express.Response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = request.body;
    try {
      response.status(200).json({
        message: "Form data received",
        userData: { name, email, password },
      });
    } catch (error) {
      console.log(error);
    }
  }
);

export default useRouter;
```

---

```mermaid
hello
  hello
```

---

## Chaining routes

```javascript
import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import appLogger from "../middleware/appLogger";
const useRouter: express.Router = express.Router();

useRouter
  .route("/users")
  .get((request: Request, response: Response) => {
    return response.send("get path....");
  })
  .post((request: Request, response: Response) => {
    return response.send("post path....");
  })
  .delete((request: Request, response: Response) => {
    return response.send("delete path....");
  })
  .all((request: Request, response: Response) => {
    return response.send("X path....");
  });

export default useRouter;
```

---

## Route path

> Paths can be strings pattern or regex pattern

```javascript
import express, { Request, Response } from "express";

app.get("/profile", (request: Request, response: Response) => {
  return response.send("get path....");
});

app.get("/ab*cd", (request: Request, response: Response) => {
  // if you hit localhost:6767/abcd or  localhost:6767/absdgsdgsdscd it will return true (Ok)
  return response.send("get path....");
});

app.get(/abc/, (request: Request, response: Response) => {
  return response.send("get path....");
});
```

---

## Route parameters

```javascript
app.get("/profile/:userId", (request: Request, response: Response) => {
  console.log(req.params.bookId);
  return response.send(req.params.bookId);
});

// Multiple params

app.get("/profile/:userId/:ageId", (request: Request, response: Response) => {
  console.log(req.params.bookId, req.params.ageId);
  return response.send(req.params.bookId, req.params.ageId);
});
```

---

---

## Function Handlers

```Javascript
import express, { Request, Response } from "express";

function profileHandler(request: Request, response: Response) => {
  console.log(req.params.bookId, req.params.ageId);
  return response.send(req.params.bookId, req.params.ageId);
}

app.get("/profile/:userId/:ageId", profileHandler);
```

---

## Multiple handlers

```Javascript
import express, { Request, Response } from "express";

function profileHandler(request: Request, response: Response, next:NextFunction) => {
  console.log(req.params.bookId, req.params.ageId);
  next()
}

function bioHandler(request: Request, response: Response,  next:NextFunction) => {
  console.log(req.params.bookId, req.params.ageId);
  return response.send(req.params.bookId, req.params.ageId);
}
app.get("/profile/:userId/:ageId", [profileHandler, bioHandler]);
```

---

## Ignoring errors using ---> @ts-ignore

```javascript
    //@ts-ignore
    cont user  = 'abayomi'  // This will ignore the 'const' typo
```

---

## Request params interface

```javascript
import express, { Request, Response } from "express";
const useRouter: express.Router = express.Router();

useRouter.get(
  "/api/users/:userId/:bookId",
  (
    request: Request<{ userId: string, bookId: string }>,
    response: Response
  ) => {
    const bookId = request.params.bookId;
    const userId = request.params.userId;
  }
);

export default useRouter;
```

---

## Req body interfaces

```javascript
import express, { Request, Response } from "express";
const useRouter: express.Router = express.Router();

useRouter.get(
  "/api/users/:userId/:bookId",
  (
    request: Request<{ userId: string, bookId: string }, {}, { name: string }>,
    response: Response
  ) => {
    const body = request.body.name;
  }
);

export default useRouter;
```

---

## Error handling

```javascript
import express, { Request, Response } from "express";
const useRouter: express.Router = express.Router();

useRouter.get("/error", (request: Request, response: Response) => {
  throw new Error("Something went wrong ...");
});

export default useRouter;
```

## Throwing async errors

```javascript
import express, { Request, Response } from "express";
const useRouter: express.Router = express.Router();

async function throwsError() {
  throw new Error("Server error....");
}

useRouter.get("/error", async (request: Request, response: Response) => {
  try {
    await throwsError();
    response.status(200);
  } catch (error) {
    response.status(500).json({
      msg: "something went wrong",
    });
  }
});

export default useRouter;
```

---

## Folder structure ----> Service , Routes, Controller, Model

```mermaid
- Services
  - Controller
    - Models
      - Routes
        - Main entry file

```
