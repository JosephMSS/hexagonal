import { model, Schema } from "mongoose"

/**
 * Schema define como va a ser el modelo
 */
export const VIDEO_SCHEMA_NAME = "Video"
export interface VideoSchema {
  title: string
  duration: number
  category: string
}
export const videoSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    unique: [true, "Title is already in use"],
  },
  duration: {
    type: Number,
    required: [true, "Duration is required"],
  },
  category: {
    type: String,
    required: [true, "Category is required"],
  },
})

export const VideoModel = model(VIDEO_SCHEMA_NAME, videoSchema)
