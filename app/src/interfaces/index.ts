export interface State {
  console: string;
  number: string;
  decimals: string;
  operator: string;
  operations: string;
  history: History[];
  idx: number;
  dark: boolean;
  sound: boolean;
  color: string;
  heart: string;
  message: string;
  cursor: number;
  startMsg: string;
  endMsg: string;
  animate: boolean;
  backBtn: boolean;
  openPar: boolean;
}

export interface History {
  operations: string;
  result: string;
}

export interface MoveCursor {
  startMsg: string;
  endMsg: string;
}
