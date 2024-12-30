const express = require("express");
const http = require("http");
const WebSocket = require("ws");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

let clients = new Map();

app.use(express.static("public"));

wss.on("connection", (ws) => {
  console.log("New client connnected");
  ws.on("message", (message) => {
    const parsedMessage = JSON.parse(message);
    if (!clients.has(ws)) {
      if (parsedMessage.type === "setName") {
        console.log("Parsed", parsedMessage);
        const username = parsedMessage.username;
        clients.set(ws, username);
        console.log(`Vartotojas prisijunge: ${username}`);
        ws.send(
          JSON.stringify({ type: "system", message: `${username} prisijunge` })
        );
      }
      return;
    }
    const username = clients.get(ws);
    if (parsedMessage.type === "chat") {
      const chatMessage = JSON.stringify({
        type: "chat",
        username,
        message: parsedMessage.message,
      });

      for (const [client, name] of clients) {
        if (client.readyState === WebSocket.OPEN) {
          client.send(chatMessage);
        }
      }
    }
  });

  ws.on("close", () => {
    console.log(`Vartotojas atsijungė: ${clients.get(ws)}`);
    clients.delete(ws);
  });
  ws.on("error", (error) => {
    console.error(`Klaida: ${error.message}`);
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost: ${PORT}`);
});
