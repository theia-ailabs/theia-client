import { AvatarSettings, SocialConnections } from "../../interfaces";

export const avatarSettings: AvatarSettings = {
  listening: {
    color1: {
      x: 0.7,
      y: 0,
      z: 1,
    },
    color2: {
      x: 0.89,
      y: 0.6,
      z: 0,
    },
    vecColor1: "",
    vecColor2: "",
    colorDir: "z",
    colorSplit: 0.5,
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
    speed: 3,
    transparent: false,
    background: 0.1, // 0 black 1 white
  },
  thinking: {
    color1: {
      x: 0.7,
      y: 0,
      z: 1,
    },
    color2: {
      x: 0.89,
      y: 0.6,
      z: 0,
    },
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
      x: -33,
      y: -204,
      z: -44,
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
    color1: {
      x: 0.7,
      y: 0,
      z: 1,
    },
    color2: {
      x: 0.89,
      y: 0.6,
      z: 0,
    },
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
      z: 0.1,
    },
    vertex: {
      x: 2,
      y: 10,
      z: 100,
    },
    speed: 10,
    transparent: false,
    background: 0.1, // 0 black 1 white
  },
  sleeping: {
    color1: {
      x: 0.7,
      y: 0,
      z: 1,
    },
    color2: {
      x: 0.89,
      y: 0.6,
      z: 0,
    },
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
avatarSettings.listening.vecColor1 = `vec3(
  ${avatarSettings.listening.color1.x},
  ${avatarSettings.listening.color1.y},
  ${avatarSettings.listening.color1.z})`;
avatarSettings.listening.vecColor2 = `vec3(
  ${avatarSettings.listening.color2.x},
  ${avatarSettings.listening.color2.y},
  ${avatarSettings.listening.color2.z})`;

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