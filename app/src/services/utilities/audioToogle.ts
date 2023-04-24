export class AudioRecorder {
  private isRecording = false;
  private mediaRecorder: MediaRecorder;
  private chunks: Blob[] = [];

  constructor(private readonly constraints: MediaStreamConstraints) {
    this.mediaRecorder = new MediaRecorder(new MediaStream());
  }

  public startRecording(): void {
    navigator.mediaDevices
      .getUserMedia(this.constraints)
      .then((stream) => {
        const audioContext = new AudioContext();
        const source = audioContext.createMediaStreamSource(stream);
        const destination = audioContext.createMediaStreamDestination();
        source.connect(destination);

        this.mediaRecorder = new MediaRecorder(destination.stream);

        this.mediaRecorder.ondataavailable = (event) => {
          this.chunks.push(event.data);
        };

        this.mediaRecorder.onstop = () => {
          const blob = new Blob(this.chunks, {
            type: "audio/ogg; codecs=opus",
          });
          const audioUrl = URL.createObjectURL(blob);
          console.log(audioUrl); // do something with the recorded audio
          this.chunks = [];
        };

        this.mediaRecorder.start();
        this.isRecording = true;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  public stopRecording(): void {
    this.mediaRecorder.stop();
    this.isRecording = false;
  }

  public toggleRecording(): void {
    if (this.isRecording) {
      this.stopRecording();
    } else {
      this.startRecording();
    }
  }
}
