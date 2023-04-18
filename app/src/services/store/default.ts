import { AvatarSettings, SocialConnections } from "../../interfaces";

export const avatarSettings: AvatarSettings = {
  listening: {
    vecColor1: "vec3(0.7, 0, 1)",
    vecColor2: "vec3(0.89, 0.6, 0)",
    colorDir: "z",
    colorSplit: 0.2,
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
    material: {
      x: 1.5,
      y: 1,
      z: 1,
    },
    vertex: {
      x: 10,
      y: 10,
      z: 10,
    },
    speed: 5,
    transparent: false,
    background: 0.1, // 0 black 1 white
  },
  thinking: {
    vecColor1: "vec3(0.7, 0, 1)",
    vecColor2: "vec3(0.89, 0.6, 0)",
    colorDir: "x",
    colorSplit: 1,
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
    material: {
      x: 1.5,
      y: 1,
      z: 1,
    },
    vertex: {
      x: 10,
      y: 10,
      z: 10,
    },
    speed: 10,
    transparent: false,
    background: 0.1, // 0 black 1 white
  },
  talking: {
    vecColor1: "vec3(0.7, 0, 1)",
    vecColor2: "vec3(0.89, 0.6, 0)",
    colorDir: "z",
    colorSplit: 0.2,
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
    material: {
      x: 1.5,
      y: 1,
      z: 1,
    },
    vertex: {
      x: 10,
      y: 10,
      z: 10,
    },
    speed: 10,
    transparent: false,
    background: 0.1, // 0 black 1 white
  },
  sleeping: {
    vecColor1: "vec3(0.7, 0, 1)",
    vecColor2: "vec3(0.89, 0.6, 0)",
    colorDir: "z",
    colorSplit: 0.2,
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
    material: {
      x: 1.5,
      y: 1,
      z: 1,
    },
    vertex: {
      x: 10,
      y: 10,
      z: 10,
    },
    speed: 10,
    transparent: false,
    background: 0.1, // 0 black 1 white
  },
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
