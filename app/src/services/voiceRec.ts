/* eslint-disable @typescript-eslint/no-explicit-any */
declare let webkitSpeechRecognition: any;

export default class VoiceRec {
  recognition = new webkitSpeechRecognition();
  stopRec = false;
  public textSound = "";
  tempWords!: string;

  init() {
    this.recognition.interimResults = true;
    this.recognition.lang = "en-US";
    this.recognition.addEventListener(
      "result",
      (e: { results: Iterable<unknown> | ArrayLike<unknown> }) => {
        const transcript = Array.from(e.results)
          .map((result: any) => result[0])
          .map((result: any) => result.transcript)
          .join("");
        this.tempWords = transcript;
        console.log(transcript);
      }
    );
  }

  start(): string {
    this.stopRec = false;
    this.recognition.start();
    console.log("Speech recognition started");
    this.recognition.addEventListener("end", (): string | void => {
      if (this.stopRec) {
        this.recognition.stop();
        console.log("End speech recognition");
      } else {
        this.recognition.start();
        console.log(this.tempWords);
      }
    });
    return this.textSound;
  }

  stop(): void {
    this.stopRec = true;
    this.wordConcat();
    this.recognition.stop();
    console.log("End speech recognition");
  }

  wordConcat() {
    this.textSound = this.textSound + " " + this.tempWords + ".";
    this.tempWords = "";
  }
}
