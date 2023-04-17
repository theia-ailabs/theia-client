import socket from ".";
import { State } from "../../interfaces";

export const askTheia = (question: string) => {
  socket.emit("askTheia", question);
};
export const theiaRes = (store: State) => {
  socket.on("theiaRes", (res: any) => {
    console.log(res);
    store.chat[0].theia.text = res.text;
    store.chat[0].theia.audio = res.audio;
  });
};
