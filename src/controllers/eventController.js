import Event from "../models/Event.js";

// GET ALL
export const getEvents = async (req, res) => {
  const events = await Event.find();
  res.json(events);
};

// GET BY ID
export const getEventById = async (req, res) => {
  const event = await Event.findById(req.params.id);
  res.json(event);
};

// CREATE
export const createEvent = async (req, res) => {
  const event = await Event.create(req.body);
  res.status(201).json(event);
};

// UPDATE
export const updateEvent = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!updatedEvent) {
      return res.status(404).json({ message: "Evento não encontrado" });
    }

    res.json(updatedEvent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
export const deleteEvent = async (req, res) => {
  await Event.findByIdAndDelete(req.params.id);
  res.json({ message: "Evento deletado" });
};