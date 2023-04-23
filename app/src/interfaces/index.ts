export interface State {
  // login / signup
  welcome: boolean;
  newUser: boolean;
  inputUsername: string;
  usernameAv: boolean;
  // user mood
  lang: string;
  mood: string;
  voice: string;
  // user info
  userProfile: UserSettings;
  // messages
  input: string;
  chat: ChatRecord[];
  // ui config
  dark: boolean;
  sound: boolean;
  primaryColor: string;
  secondaryColor: string;
  heart1: string;
  heart2: string;
  emoji: string;
  showChat: boolean;
  showMenu: boolean;
  loading: boolean;
  // rerenders
  rerenderAvatar: number;
  rerenderAudio: number;
  // 3d avatar
  avatarConfig: AvatarConfig;
  avatarMode: string;
  // modals
  loginModal: boolean;
  settingsModal: boolean;
  // menus
  connections: SocialConnections;
}

export interface UserSettings {
  username: string;
  pfp: string;
  mood: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: Gender;
  country: string;
  timezone: string;
  website: string;
  created_on: string;
  verified: boolean;
  topics: string[];
}

type Gender = "female" | "male" | "non-binary" | "";
export interface Vector3 {
  x: number;
  y: number;
  z: number;
}

export type Vector3Key = keyof Vector3;

export interface AvatarConfig {
  color1: Vector3;
  color2: Vector3;
  vecColor1: string;
  vecColor2: string;
  colorDir: "x" | "y" | "z";
  colorSplit: number;
  sphere: Vector3;
  position: Vector3;
  material: Vector3;
  vertex: Vector3;
  speed: number;
  transparent: boolean;
  background: number;
}

export interface AvatarSettings {
  listening: AvatarConfig;
  thinking: AvatarConfig;
  talking: AvatarConfig;
  sleeping: AvatarConfig;
}

export interface SocialConnections {
  google: boolean;
  apple: boolean;
  twitter: boolean;
  instagram: boolean;
  spotify: boolean;
  youtube: boolean;
  whatsapp: boolean;
  telegram: boolean;
  solana: boolean;
  ethereum: boolean;
  lichess: boolean;
  chess: boolean;
}

export interface ChatRecord {
  user: UserMessage;
  theia: TheiaMessage;
  timestamp: bigint;
}

export interface UserMessage {
  text: string;
  audio: AudioBuffer | string | any;
  datetime: string;
  timestamp: bigint;
}

export interface TheiaMessage {
  text: string;
  audio: HTMLAudioElement | AudioBuffer | string | any;
  video: HTMLVideoElement | Buffer | string;
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

export interface AskTheiaRet {
  question: string;
  audio: string;
  answer: string;
  words: number;
  speech: string;
  duration: number;
  size: number;
  timestamp: number;
  messageId: number;
  socketId: string;
  computed_in: number;
}
export interface SpeechUrlRet {
  url: string;
  duration: number;
  size: number;
}
