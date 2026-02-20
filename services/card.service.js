import {
  getAllCards,
  getCardById,
  createCard,
  updateCard,
  deleteCard
} from "../models/card.model.js";

export const getCardsWithPagination = (page = 1, limit = 10) => {
  const cards = getAllCards();

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const paginatedCards = cards.slice(startIndex, endIndex);

  return {
    totalCards: cards.length,
    totalPages: Math.ceil(cards.length / limit),
    currentPage: page,
    limit,
    cards: paginatedCards,
    next:
      endIndex < cards.length
        ? { page: page + 1, limit }
        : null,
    previous:
      startIndex > 0
        ? { page: page - 1, limit }
        : null
  };
};

export {
  getCardById,
  createCard,
  updateCard,
  deleteCard
};