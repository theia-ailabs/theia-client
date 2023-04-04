import { Socket } from 'socket.io-client';

export default function createSocketStore (socket: Socket) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (store: any) => {
    store.state.$socket = socket;
  };
}