import socket from ".";
import { State } from "../../interfaces";
// import { State, AskTheiaRet } from "../../interfaces";
// import { avatarSettings } from "../store/default";

export const connectLichess = (token: string) => {
  socket.volatile.emit("connectLichess", token);
};

export const disconnectLichess = () => {
  socket.volatile.emit("disconnectLichess");
};

export const getLichessAccount = () => {
  socket.emit("lichessAccount");
  socket.volatile.on("lichessAccountRes", (res: any) => {
    console.log(res);
  });
};
