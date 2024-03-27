import express from "express";

import contactsControllers from "../controllers/contactsControllers.js";

import isValidId from "../middlewares/isValidId.js";

const contactsRouter = express.Router();

contactsRouter.get("/", contactsControllers.getAllContacts);

contactsRouter.get("/:id", isValidId, contactsControllers.getOneContact);

contactsRouter.delete("/:id", isValidId, contactsControllers.deleteContact);

contactsRouter.post("/", contactsControllers.createContact);

contactsRouter.put("/:id", isValidId, contactsControllers.updateContact);

contactsRouter.patch("/:id/favorite", isValidId, contactsControllers.updateFavorite)

export default contactsRouter;
