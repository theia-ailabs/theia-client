import { defineStore } from "pinia";
import { State, ChatRecord, UserMessage, TheiaMessage } from "../../interfaces";
import { getDate, getTime } from "../../utils";
import { askTheia } from "../sockets/theia.socket";

const useStore = defineStore("main", {
  state: (): State => {
    return {
      // user mood
      mood: "curious",
      // user info
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
      rerenderKey: 0,
      // 3d avatar
      avatarConfig: {
        vecColor1: "vec3(0.7, 0, 1)",
        vecColor2: "vec3(0.89, 0.6, 0)",
        colorDir: "z",
        colorsSplit: 0.2,
        sphere: {
          x: 23,
          y: 300,
          z: 300,
        },
        position: {
          x: 0,
          y: 150,
          z: 150,
        },
        energy: {
          x: 1.5,
          y: 1,
          z: 0.1,
        },
        speed: 5,
        transparent: false,
      },
      // modals
      loginModal: false,
      settingsModal: false,
      // signup
      welcome: false,
      newUser: false,
      usernameAv: false,
      // menu
      google: false,
      apple: false,
      twitter: false,
      instagram: false,
      spotify: false,
      youtube: false,
      whatsapp: false,
      telegram: false,
      solana: false,
      ethereum: false,
    };
  },
  actions: {
    connect(): void {
      this.connected = true;
    },
    reRender(): void {
      console.log("Rerendering...");
      this.rerenderKey++;
    },
    inputMessage(): void {
      askTheia(this.input);
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
        audio: "",
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
