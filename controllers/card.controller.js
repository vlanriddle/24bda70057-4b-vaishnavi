import {
  getCardsWithPagination,
  getCardById,
  createCard,
  updateCard,
  deleteCard
} from "../services/card.service.js";

export const getAll = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const result = getCardsWithPagination(page, limit);
  res.json(result);
};

export const getOne = (req, res) => {
  const id = Number(req.params.id);
  const card = getCardById(id);

  if (!card) return res.status(404).json({ message: "Card not found" });

  res.json(card);
};

export const create = (req, res) => {
  const { suit, value, collection } = req.body;

  if (!suit || !value || !collection) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const newCard = {
    id: Date.now(),
    suit,
    value,
    collection
  };

  createCard(newCard);
  res.status(201).json(newCard);
};

export const update = (req, res) => {
  const id = Number(req.params.id);
  const updated = updateCard(id, req.body);

  if (!updated) return res.status(404).json({ message: "Card not found" });

  res.json(updated);
};

export const remove = (req, res) => {
  const id = Number(req.params.id);
  const deleted = deleteCard(id);

  if (!deleted) return res.status(404).json({ message: "Card not found" });

  res.json({ message: "Card deleted successfully" });
};