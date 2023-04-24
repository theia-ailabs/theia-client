import { defineStore } from "pinia";
import { State, ChatRecord, UserMessage, TheiaMessage } from "../../interfaces";
import { getDate, getTime } from "../../utils";
import { askTheia } from "../sockets/theia.socket";
import { userSettings, avatarSettings, socialConnections } from "./default";
import { AudioRecorder } from "../utilities/audioToogle";
import VoiceRec from "../utilities/voiceRec";

const useStore = defineStore("store", {
  state: (): State => {
    return {
      // login / signup
      login: false,
      inputUsername: "",
      newUser: false,
      usernameAv: false,
      // user mood
      lang: "en",
      mood: "curious",
      voice: "denis",
      // user info
      userProfile: userSettings,
      // messages
      input: "",
      chat: [],
      // ui config
      dark: true,
      sound: true,
      recorder: new VoiceRec(),
      primaryColor: "purple-500",
      secondaryColor: "yellow-500",
      heart1: "💜",
      heart2: "💛",
      emoji: "",
      showChat: true,
      showMenu: false,
      loading: false,
      // rerenders
      rerenderAvatar: 0,
      rerenderAudio: 0,
      // 3d avatar
      avatarConfig: avatarSettings["listening"],
      avatarMode: "listening",
      // modals
      loginModal: false,
      settingsModal: false,
      // menus
      connections: socialConnections,
      // real estate
      realEstate: [],
      showEstate: true,
    };
  },
  actions: {
    reAvatar(): void {
      console.log("Rerendering...");
      this.rerenderAvatar++;
    },
    reAudio(): void {
      console.log("Rerendering...");
      this.rerenderAudio++;
    },
    inputMessage(): void {
      askTheia(this.input, "denis", 1, "larry");
      this.avatarMode = "thinking";
      this.avatarConfig = avatarSettings["thinking"];
      this.reAvatar();
      const theiaMsg: TheiaMessage = {
        text: "Thinking...",
        audio: "",
        video: "",
        image: "",
        links: "",
        datetime: `${getDate()} ${getTime()}`,
        timestamp: BigInt(Date.now()),
        computed_in: 0,
      };
      const userMsg: UserMessage = {
        text: this.input,
        audio:
          "https://peregrine-results.s3.amazonaws.com/pigeon/8CCgMLeZiZnzrrELvl_0.mp3",
        datetime: `${getDate()} ${getTime()}`,
        timestamp: BigInt(Date.now()),
      };
      const chatRec: ChatRecord = {
        user: { ...userMsg },
        theia: { ...theiaMsg },
        timestamp: BigInt(Date.now()),
      };
      this.chat.unshift({ ...chatRec });
      console.log(this.chat[0].theia);
      this.input = "";
    },
    scrollTop(): void {
      window.scrollTo(document.body.scrollHeight, 0);
    },
    switchShowChat(): void {
      this.showChat = !this.showChat;
    },
    switchDark(): void {
      this.dark = !this.dark;
      if (this.dark) this.avatarConfig.background = 0.07;
      else this.avatarConfig.background = 0.95;
      this.reAvatar();
    },
    switchSound(): void {
      this.sound = !this.sound;
      this.recorder.init();
      if (this.sound) this.recorder.start();
      else this.recorder.stop();
    },

    setPrimaryColor(color: string): void {
      this.primaryColor = color;
    },
    setSecondaryColor(color: string): void {
      this.secondaryColor = color;
    },
    setHeart(heart: string, _i = 1): void {
      if (_i === 1 || _i === 0) this.heart1 = heart;
      else this.heart2 = heart;
    },
    searchUser(): void {
      console.log(this.inputUsername);
      // socket.emit("newUsername", this.username);
    },
    // Connection functions
    connectLichess(): boolean {
      return true;
    },
  },
});

export default useStore;
