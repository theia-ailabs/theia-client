import socket from ".";
// import { State, AskTheiaRet } from "../../interfaces";
// import { avatarSettings } from "../store/default";

export const connectLichess = (token: string) => {
  socket.volatile.emit("connectLichess", token);
};

export const disconnectLichess = () => {
  socket.volatile.emit("disconnectLichess");
};

export const getLichessAccount = () => {
  socket.volatile.on("UserLichess", (res: any) => {
    console.log(res);
  });
};
