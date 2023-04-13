/* eslint-disable @typescript-eslint/no-explicit-any */
import { io, Socket } from "socket.io-client";
import { SERVER_URL } from "../../config";
import { theiaRes } from "./theia.socket";

export function socketConnection(): Socket {
  const socket: Socket = io(SERVER_URL, {
    transports: ["websocket"],
    autoConnect: true,
  });
  // Connection
  socket.on("serverConnection", (message: string) => {
    console.log(message);
  });
  // Theia responses

  return socket;
}

const socket: Socket = socketConnection();
export default socket;
