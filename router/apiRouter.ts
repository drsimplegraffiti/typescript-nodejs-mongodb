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