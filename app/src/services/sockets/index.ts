import { io, Socket } from "socket.io-client";
import { SERVER_URL } from "../../config";
import useStore from "../store";

export function socketConnection(): Socket {
  const store = useStore();
  console.log(SERVER_URL);
  const socket: Socket = io(SERVER_URL, {
    transports: ["websocket"],
    autoConnect: true,
  });
  // Connection
  socket.on("serverConnection", (message: string) => {
    console.log(message);
  });
  // Theia responses
  socket.on("theiaRes", (res: string) => {
    console.log(res);
    store.theia = res;
  });

  return socket;
}

export const socket: Socket = socketConnection();
// export default socket;
