import { VideoSearcherUseCase } from "./application/video-searcher.use-case"
import { MongoVideoRepository } from "./infrastructure/mongo-video.repository"

const compositionRoot = () => {
  const videoRepository = new MongoVideoRepository()
  const videoService = new VideoSearcherUseCase(videoRepository)
  return {
    videoService,
  }
}
