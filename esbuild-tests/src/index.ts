import { join } from "lodash";

function connectToServer(): WebSocket {
  const serverUrl = "wss://socketsbay.com/wss/v2/1/demo/"; // Replace 'your-server-url' with the actual server URL
  const socket = new WebSocket(serverUrl);

  socket.onopen = () => {
    console.log("Connected to server.");
    // You can perform any action here upon successful connection
  };

  socket.onmessage = (event) => {
    console.log("Message received from server:", event.data);
    // Handle incoming messages from the server
  };

  socket.onerror = (error) => {
    console.error("WebSocket error:", error);
    // Handle any errors that occur
  };

  socket.onclose = () => {
    console.log("Connection to server closed.");
    // Handle closure of the connection
  };

  return socket;
}

// Example usage:
const websocketClient = connectToServer();

// You can send messages to the server like this:
websocketClient.send("Hello, server!");

join(["a", "b", "c"], "~");
