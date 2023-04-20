import socket from ".";
import { State } from "../../interfaces";
import { avatarSettings } from "../store/default";

export const askTheia = (question: string, _voice = "elena", _speed = 1) => {
  socket.volatile.emit("askTheia", question, _voice, _speed);
};
export const theiaRes = (store: State) => {
  socket.volatile.on("theiaRes", (res: any) => {
    console.log(res);
    store.chat[0].theia.text = res.text;
    if (res.audio) {
      console.log("audio received");
      console.log(res.audio);
      store.chat[0].theia.audio = res.audio;
      store.rerenderAudio++; // render audio player
      store.avatarMode = "talking";
      store.avatarConfig = avatarSettings["talking"];
    }
  });
};
