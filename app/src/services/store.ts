import { defineStore } from "pinia";
import { State } from "../interfaces";
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
      login: false,
      email: "",
      name: "",
      // user info
      country: "",
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
      chat: [],
      // ui config
      dark: true,
      sound: true,
      primaryColor: "blue-500",
      secondaryColor: "blue-500",
      heart: "💙",
      emoji: "",
    };
  },
  actions: {
    connect(): void {
      this.connected = true;
    },
  },
});

export default useStore;
