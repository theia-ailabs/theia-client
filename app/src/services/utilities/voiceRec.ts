/* eslint-disable @typescript-eslint/no-explicit-any */
import useStore from "../store";
declare let webkitSpeechRecognition: any;

export default class VoiceRec {
  recognition = new webkitSpeechRecognition();
  stopRec = false;
  public textSound = "";
  tempWords!: string;

  init() {
    const store = useStore();
    this.recognition.interimResults = true;
    this.recognition.lang = store.lang;
    if (store.avatarMode === "listening") {
      this.recognition.addEventListener(
        "result",
        (e: { results: Iterable<unknown> | ArrayLike<unknown> }) => {
          const transcript = Array.from(e.results)
            .map((result: any) => result[0].transcript)
            .join("");
          this.tempWords = transcript;
          store.input = transcript;
          setTimeout(() => {
            if (store.avatarMode === "listening") store.inputMessage();
          }, 3000);
        }
      );
    }
  }

  start(): void {
    if (this.stopRec) {
      this.stopRec = false;
      this.recognition.start();
      this.recognition.addEventListener("end", (): void => {
        if (this.stopRec) {
          this.recognition.stop();
        } else {
          this.recognition.start();
        }
      });
    }
  }

  stop(): void {
    if (!this.stopRec) {
      this.stopRec = true;
      this.wordConcat();
      this.recognition.stop();
    }
  }

  wordConcat() {
    this.textSound = this.textSound + " " + this.tempWords + ".";
    this.tempWords = "";
  }
}
