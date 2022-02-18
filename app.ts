
import http, { Server, IncomingMessage, ServerResponse } from "http";
const hostname: string = "127.0.0.1";
const port: number = 5000;

const server: Server = http.createServer(
    (request: IncomingMessage, response: ServerResponse) => {
        response.statusCode = 200;
        response.setHeader("Content-Type", "text/html");

        // url and post request
        try {
            if (request.url === '/login' && request.method === 'POST') {
                let body: any = '';
                request.on('data', (chunk) => {
                    body += chunk;
                }).on('end', () => {
                    let formData = JSON.parse(body);
                    if (formData.name === "Joe" && formData.password === 'ad1234') {
                        response.end(`<pre>login successful</pre>`)
                    } else {
                        response.end(`<pre>login denied</pre>`)
                    }
                })
            }
        } catch (error) {
            console.log(error);

        }
    }
);

server.listen(port, hostname, () => {
    console.log(`server running on ${hostname}:${port}`);
});

