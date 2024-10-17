export class Video {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly duration: number,
    public readonly category: string
  ) {}
}
export class VideoId {
  constructor(public readonly value: string) {}
  valueOf() {
    return this.value
  }
}
