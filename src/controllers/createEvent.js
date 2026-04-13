import { v4 as uuidv4 } from "uuid";

export const createEvent = async (req, res) => {
  try {
    const newEvent = new Event({
      id: uuidv4(), // 🔥 GARANTE ID
      ...req.body,
    });

    await newEvent.save();

    res.status(201).json(newEvent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};