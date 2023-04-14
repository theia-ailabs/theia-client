import socket from ".";
import { State } from "../../interfaces";

export const askTheia = (question: string) => {
  socket.emit("askTheia", question);
};
export const theiaRes = (store: State) => {
  socket.on("theiaRes", (res: string) => {
    store.chat[0].theia.text = res;
  });
};
