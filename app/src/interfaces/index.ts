export interface State {
  // user mood
  mood: string;
  // web3 login
  connected: boolean;
  pubkey: string;
  balance: number;
  ccy: string;
  // web2 login
  loggedIn: boolean;
  email: string;
  name: string;
  // user info
  username: string;
  country: string;
  flag: string;
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
  input: string;
  chat: ChatRecord[];
  // ui config
  dark: boolean;
  sound: boolean;
  primaryColor: string;
  secondaryColor: string;
  heart: string;
  emoji: string;
  // signup
  newUser: boolean;
  signup: boolean;
  usernameAv: boolean;
  // menu
  showChat: boolean;
  hello: boolean;
}

export interface ChatRecord {
  user: UserMessage;
  theia: TheiaMessage;
  timestamp: bigint;
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

export interface User {
  __pubkey__: string;
  _username_: string;
  _pfp: string;
  _name: string;
  _lastname: string;
  _description: string;
  _birthdate: string;
  _country: string;
  _flag: string;
  _city: string;
  _phone: string;
  _email: string;
  _verified: boolean;
  _twitter: string;
  _instagram: string;
  _discord: string;
  _telegram: string;
  _youtube: string;
  _tiktok: string;
  _magiceden: string;
  _opensea: string;
  _appuser: boolean;
  _created_at: number;
  _timestamp: number;
}

export interface UserState {
  user?: User;
  error: boolean;
}

export interface UsersFlags {
  pubkey: string;
  flag: string;
}
