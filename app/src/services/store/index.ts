import { defineStore } from "pinia";
import { State } from "../../interfaces";
const useStore = defineStore("main", {
  state: (): State => {
    return {
      // web3 login
      connected: false,
      pubkey: "",
      balance: "0",
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
      // messages
      chat: [],
      // ui config
      dark: true,
      sound: true,
      primaryColor: "blue-500",
      secondaryColor: "blue-500",
      heart: "💙",
    };
  },
  actions: {
    foo(): void {
      return;
    },
  },
});

export default useStore;
