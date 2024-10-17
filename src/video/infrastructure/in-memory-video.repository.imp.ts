import { Video, VideoRepository } from "../domain"

export class InMemoryVideoRepository implements VideoRepository {
  videos: Video[] = []
  async save(video: Video): Promise<void> {
    this.videos.push(video)
  }
  async search(id: string): Promise<Video | null> {
    const video = this.videos.find((video) => video.id === id)
    if (!video) return null
    return video
  }
}
