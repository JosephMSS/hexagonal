import { VideoModel } from "../../data"
import { Video, VideoRepository } from "../domain"

export class MongoVideoRepository implements VideoRepository {
  constructor(private readonly videoModel = VideoModel) {}
  async save(video: Video): Promise<void> {
    await this.videoModel.create(video)
  }
  async search(id: string): Promise<Video | null> {
    const video = await this.videoModel.findById(id)
    if (!video) return null
    return {
      id: video.id,
      title: video.title,
      duration: video.duration,
      category: video.category,
    }
  }
}
