import { AvatarConfig, SocialConnections } from "../../interfaces";

export const avatarConfigDefault: AvatarConfig = {
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
  vertex: {
    x: 10,
    y: 10,
    z: 10,
  },
  speed: 5,
  transparent: false,
};

export const socialConnections: SocialConnections = {
  google: true,
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
