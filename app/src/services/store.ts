import { defineStore } from "pinia";
import { State, ChatRecord, UserMessage, TheiaMessage } from "../interfaces";
import { getDate, getTime } from "../utils";

const useStore = defineStore("main", {
  state: (): State => {
    return {
      // user mood
      mood: "curious",
      // web3 login
      connected: false,
      pubkey: "",
      balance: 0,
      ccy: "SOL",
      // web2 login
      loggedIn: false,
      email: "",
      name: "",
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
      primaryColor: "blue-500",
      secondaryColor: "blue-500",
      heart: "💙",
      emoji: "",
      // signup
      newUser: false,
      signup: true,
      usernameAv: false,
    };
  },
  actions: {
    connect(): void {
      this.connected = true;
    },
    inputMessage(): void {
      const userMsg: UserMessage = {
        text: this.input,
        audio: "",
        datetime: `${getDate()} ${getTime()}`,
        timestamp: BigInt(Date.now()),
      };
      const chatRec: ChatRecord = {
        user: userMsg,
        theia: {} as TheiaMessage,
        timestamp: BigInt(Date.now()),
      };
      console.log(chatRec);
      this.chat.push(chatRec);
    },
    scrollTop(): void {
      window.scrollTo(document.body.scrollHeight, 0);
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
  },
});

export default useStore;
