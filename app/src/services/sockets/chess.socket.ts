import socket from ".";
// import { State, AskTheiaRet } from "../../interfaces";
// import { avatarSettings } from "../store/default";

export const connectLichess = (token: string) => {
  socket.volatile.emit("connectLichess", token);
};
