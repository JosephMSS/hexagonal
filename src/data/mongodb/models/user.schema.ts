import { model, Schema } from "mongoose"

/**
 * Schema define como va a ser el modelo
 */
export enum Role {
  ADMIN_ROLE = "ADMIN_ROLE",
  USER_ROLE = "USER_ROLE",
}
export interface UserSchema {
  email: string
  name: string
  password: string
  img: string
  role: Role[]
}
export const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email is already in use"],
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  img: {
    type: String,
    required: false,
  },
  role: {
    type: [String],
    required: true,
    default: Role.USER_ROLE,
    enum: Object.values(Role) as Role[],
  },
})
export const UserModel = model("User", userSchema)
