import { defineStore } from "pinia";
import { State, ChatRecord, UserMessage, TheiaMessage } from "../../interfaces";
import { getDate, getTime } from "../../utils";
import { askTheia } from "../sockets/theia.socket";
import { avatarSettings, socialConnections } from "./default";

const useStore = defineStore("main", {
  state: (): State => {
    return {
      // user mood
      mood: "curious",
      // user info
      pfp: "",
      username: "",
      country: "",
      flag: "🇺🇳",
      gender: "",
      age: "",
      phone: "",
      topics: [],
      created: "",
      verified: false,
      // web3 login
      connected: false,
      pubkey: "",
      balance: 0,
      ccy: "SOL",
      // web2 login
      loggedIn: false,
      email: "",
      name: "",
      // clock
      gmt: 0,
      timezone: "",
      alarm: "",
      // messages
      input: "",
      chat: [],
      // ui config
      dark: true,
      sound: true,
      primaryColor: "purple-500",
      secondaryColor: "yellow-500",
      heart: "💙",
      emoji: "",
      showChat: true,
      showMenu: false,
      // rerenders
      rerenderAvatar: 0,
      rerenderAudio: 0,
      // 3d avatar
      avatarConfig: avatarSettings["listening"],
      avatarMode: "listening",
      // modals
      loginModal: false,
      settingsModal: false,
      // signup
      welcome: false,
      newUser: false,
      usernameAv: false,
      // menus
      connections: socialConnections,
    };
  },
  actions: {
    connect(): void {
      this.connected = true;
    },
    reAvatar(): void {
      console.log("Rerendering...");
      this.rerenderAvatar++;
    },
    reAudio(): void {
      console.log("Rerendering...");
      this.rerenderAudio++;
    },
    inputMessage(): void {
      askTheia(this.input);
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
      if (this.dark) this.avatarConfig.background = 0.1;
      else this.avatarConfig.background = 0.9;
      this.reAvatar();
    },
    switchSound(): void {
      this.sound = !this.sound;
    },
    setPrimaryColor(color: string): void {
      this.primaryColor = color;
    },
    setSecondaryColor(color: string): void {
      this.secondaryColor = color;
    },
    setHeart(heart: string): void {
      this.heart = heart;
    },
    searchUser(): void {
      console.log(this.username);
      // socket.emit("newUsername", this.username);
    },
  },
});

export default useStore;
