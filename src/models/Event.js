import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: String,
    date: String,
    location: String,
    description: String,
    category: String,
    banner: String,
    doc: String,
    lat: Number,
    lng: Number,
  },
  { timestamps: true }
);

export default mongoose.model("Event", eventSchema);