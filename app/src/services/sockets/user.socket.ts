import { socket } from "./";
import useStore from "../store";
import { useNotification } from "@kyvg/vue3-notification";
import { User } from "../../interfaces";

const store = useStore();
const { notify } = useNotification();

export const onServerConnection = () => {
  socket.on("serverConnection", (message: string) => {
    console.log(message);
  });
};

export const onIsNewUser = () => {
  socket.on("isNewUser", (isNew: boolean) => {
    store.newUser = isNew;
    socket.off("isNewUser");
  });
};

export const emitConnection = (pubkey: string) => {
  socket.emit("newConnection", pubkey);
  socket.off("newConnection");
  console.log(pubkey);
  socket.off("newConnection");
};

export const emitDisconnection = (pubkey: string) => {
  socket.emit("newDisconnection", pubkey);
  socket.off("newDisonnection");
};

export const searchUsersSocket = (username: string) => {
  socket.emit("searchUsers", username);
  socket.on("searchUsersRes", (res: Array<User>) => {
    if (res.length === 0) {
      store.usernameAv = true;
    } else {
      store.usernameAv = false;
    }
  });
};

export const createUserSocket = (username: string) => {
  if (store.pubkey) {
    socket.emit("newUser", store.pubkey, username, false);
    socket.on("newUserCreated", (created: boolean) => {
      if (created) {
        notify({
          title: "Congrats! 🎉",
          text: "New user created!",
          type: "success",
        });
        store.signup = false;
        store.usernameAv = false;
      } else {
        console.log("ERROR: Could not create user. Please try again.");
        notify({
          title: "Error",
          text: "Your account creation failed. Please try again.",
          type: "error",
        });
      }
    });
  } else {
    console.log("ERROR: Could not create user. Connect your wallet first!");
  }
};

export const userInfo = () => {
  socket.on("userInfo", (userInfo: User) => {
    console.log("userInfo", userInfo);
    const username = userInfo._username_;
    store.username = username;
    socket.off("userInfo");
  });
};

export const getUserInfo = (pubkey: string) => {
  socket.emit("getUser", pubkey);
};
