import socket from ".";
import { State, AskTheiaRet } from "../../interfaces";
import { avatarSettings } from "../store/default";

export const askTheia = (
  question: string,
  _voice = "denis",
  _speed = 1,
  _userVoice = "larry"
) => {
  socket.volatile.emit("askTheia", question, _voice, _speed, _userVoice);
};

export const theiaRes = (store: State) => {
  socket.volatile.on("theiaRes", (res: AskTheiaRet, _i = 0) => {
    if (res.speech && res.speech != "Error" && res.speech.length > 22) {
      console.log(_i, "Audio completed!");
      const speech = new Audio(res.speech);
      speech.play();
      store.chat[_i].theia.audio = res.speech;
      store.rerenderAudio++; // rerender audio player
      store.avatarMode = "talking";
      store.avatarConfig = avatarSettings["talking"];
      store.rerenderAvatar++; // rerender audio avatar
      setTimeout(() => {
        store.avatarMode = "listening";
        store.avatarConfig = avatarSettings["listening"];
        store.rerenderAvatar++;
        console.log(res.duration, " seconds");
      }, res.duration * 1000);
      return;
    } else if (res.answer || res.answer != "Error") {
      if (!res.answer.includes("thinking")) {
        store.chat[_i].theia.text = "";
        let j = 0;
        const intervalID = setInterval(() => {
          store.chat[_i].theia.text += res.answer[j] || " ";
          if ([".", "!", "?", ";", ":"].includes(res.answer[j]))
            store.chat[_i].theia.text += "\n\n";
          if (res.answer.length <= j) clearInterval(intervalID);
          j++;
        }, 80);
        // console.log(res.answer);
      } else {
        store.chat[_i].theia.computed_in = 0.01;
        countThinking(store, _i);
      }
      return;
    } else if (res.audio && res.audio != "Error" && res.audio.length > 22) {
      store.chat[_i].user.audio = res.audio;
      store.rerenderAudio++; // rerender audio player
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
