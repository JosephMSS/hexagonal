import { Video } from "./video.entity"

export interface VideoRepository {
  save(video: Video): Promise<void>
  search: (id: string) => Promise<Video | null>
}
