import socket from ".";
import { State } from "../../interfaces";

export const askTheia = (question: string) => {
  socket.volatile.emit("askTheia", question);
};
export const theiaRes = (store: State) => {
  socket.volatile.on("theiaRes", (res: any) => {
    console.log(res);
    store.chat[0].theia.text = res.text;
    store.chat[0].theia.audioBuffer = res.audio;
  });
};
