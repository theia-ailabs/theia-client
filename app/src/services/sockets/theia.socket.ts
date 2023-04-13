import { socket } from ".";

export const askTheia = (question: string) => {
  socket.emit("askTheia", question);
};
