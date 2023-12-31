import mongoose from "npm:mongoose@7.6.3";
import { Pet } from "../types.ts";

const Schema = mongoose.Schema;

const MascotaSchemaDef = new Schema(
  {
    name: { type: String, required: true },
    bread: { type: String, required: true }, 
  },
  {
    timestamps: true,
  }
);

export type MascotaModelType = mongoose.Document & Omit<Pet, "id">;
export default mongoose.model<MascotaModelType>("Mascota", MascotaSchemaDef);
