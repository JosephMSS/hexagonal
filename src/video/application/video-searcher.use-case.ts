import { Video, VideoRepository } from "../domain"

export class VideoSearcherUseCase {
  constructor(private readonly videoRepository: VideoRepository) {}
  async execute(id: string): Promise<Video | null> {
    return await this.videoRepository.search(id)
  }
}
