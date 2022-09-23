import http from "http";
import app from "./src/app";

const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0";

app.set("port", PORT);
const server = http.createServer(app);

server.listen(PORT, HOST);
server.on('listening', () => {
    console.log(`Listening on ${PORT}`);
});
