export interface State {
  // user mood
  mood: string;
  // web3 login
  connected: boolean;
  pubkey: string;
  balance: number;
  ccy: string;
  // web2 login
  login: boolean;
  email: string;
  name: string;
  // user info
  country: string;
  gender: string;
  age: string;
  phone: string;
  topics: string[];
  created: string;
  verified: boolean;
  // clock
  gmt: number;
  timezone: string;
  alarm: string;
  // messages
  chat: ChatRecord[];
  // ui config
  dark: boolean;
  sound: boolean;
  primaryColor: string;
  secondaryColor: string;
  heart: string;
  emoji: string;
}

export interface ChatRecord {
  user: UserMessage;
  theia: TheiaMessage;
}

export interface UserMessage {
  text: string;
  audio: AudioBuffer | string;
  datetime: string;
  timestamp: bigint;
}

export interface TheiaMessage {
  text: string;
  audio: AudioBuffer | string;
  video: Buffer | string;
  image: HTMLImageElement | string;
  links: string;
  datetime: string;
  timestamp: bigint;
  computed_in: number; // how long took to answer in seconds
}
