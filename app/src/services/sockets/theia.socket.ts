import socket from ".";
import { State, AskTheiaRet } from "../../interfaces";
import { avatarSettings } from "../store/default";

export const askTheia = (
  question: string,
  _voice = "larry",
  _speed = 1,
  _i = 0
) => {
  socket.volatile.emit("askTheia", question, _voice, _speed);
  console.log("\n", _i, question, "\n");
};
export const theiaRes = (store: State, _i = 0) => {
  socket.volatile.on("theiaRes", (res: AskTheiaRet) => {
    if (res.audio) {
      console.log(_i, "Audio completed!");
      const speech = new Audio(res.audio);
      store.chat[_i].theia.audio = res.audio;
      store.rerenderAudio++; // render audio player
      store.avatarMode = "talking";
      store.avatarConfig = avatarSettings["talking"];
      store.rerenderAvatar++;
      speech.play();
      setTimeout(() => {
        store.avatarMode = "listening";
        store.avatarConfig = avatarSettings["listening"];
        store.rerenderAvatar++;
        console.log(res.duration, " seconds");
      }, res.duration * 1000);
    } else if (res.text) {
      if (!res.text.includes("thinking")) {
        store.chat[_i].theia.text = "";
        let j = 0;
        const intervalID = setInterval(() => {
          store.chat[_i].theia.text += res.text[j] || " ";
          if (res.text.length <= j) clearInterval(intervalID);
          j++;
        }, 80);
        console.log(res.text);
      } else {
        store.chat[_i].theia.computed_in = 0.01;
        countThinking(store, _i);
      }
    }
  });
};
const countThinking = (store: State, _i = 0, _mm = 10) => {
  if (store.chat[_i].theia.computed_in > 0) {
    let secs = 0;
    const thinkingInterval = setInterval(() => {
      store.chat[_i].theia.computed_in += 0.01;
      secs = store.chat[_i].theia.computed_in;
      if (store.chat[_i].theia.computed_in < 0) {
        store.chat[_i].theia.computed_in = secs;
        clearInterval(thinkingInterval);
      }
      secs = store.chat[_i].theia.computed_in;
    }, _mm);
  }
};
