import socket from ".";
import { State } from "../../interfaces";
import { avatarSettings } from "../store/default";

export const askTheia = (question: string, _voice = "larry", _speed = 1) => {
  socket.volatile.emit("askTheia", question, _voice, _speed);
};
export const theiaRes = (store: State) => {
  socket.volatile.on("theiaRes", (res: any) => {
    console.log(res);
    let i = 0;
    if (res.audio) {
      console.log("audio received");
      console.log(res.audio);
      store.chat[0].theia.audio = res.audio;
      store.rerenderAudio++; // render audio player
      store.avatarMode = "listening";
      store.avatarConfig = avatarSettings["listening"];
      store.rerenderAvatar++;
    } else {
      if (res.text) {
        store.chat[0].theia.text = "";
        const intervalID = setInterval(() => {
          store.chat[0].theia.text += res.text[i] || " ";
          if (res.text.length <= i) clearInterval(intervalID);
          i++;
        }, 80);
        console.log(res.text);
      }
    }
  });
};
