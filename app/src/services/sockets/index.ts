import { io, Socket } from "socket.io-client";
import { SERVER_URL } from "../../../config";
// import { User } from "../../types";
// import useStore from "./store";

export function socketConnection(): Socket {
  // const store = useStore();
  console.log(SERVER_URL);
  const socket: Socket = io(SERVER_URL, {
    transports: ["websocket"],
    autoConnect: true,
  });
  socket.on("serverConnection", (message: string) => {
    console.log(message);
  });
  // socket.on("nUsers", (nUsers: number) => {
  //   store.dispatch("nUsers", nUsers);
  // });
  // socket.on("isNewUser", (isNew: boolean) => {
  //   store.dispatch("switchSignup", isNew);
  // });
  // socket.on("getUserRes", (userInfo: User) => {
  //   if (userInfo) {
  //     store.dispatch("dispatchUsername", userInfo._username_);
  //   } else {
  //     console.log("User does not exist. Please sign up and try again.");
  //   }
  // });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // socket.on("getTokenHoldersRes", (holders: any) => {
  //   console.log("holders:", holders);
  //   store.dispatch("setTokenHolders", holders);
  // });
  // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // socket.on("getUserFlagsRes", (flags: any) => {
  //   console.log("flags:", flags);
  //   store.dispatch("setUserFlags", flags);
  // });

  return socket;
}

export const socket: Socket = socketConnection();
