import { app } from "./app";
import { createServer } from "http";
import { config } from "dotenv";
config({ path: "./config.env" });

// // Create http server [non ssl]
const Port: number = process.env.PORT ? + process.env.PORT : 8000;

const server = createServer(app);


server.listen(Port, async () => {
    console.info(`Listening on http://localhost:${Port}`);
});


