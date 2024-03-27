import express from "express";

import contactsController from "../controllers/contactsController.js";

import isValidId from "../middlewares/isValidId.js";

const contactsRouter = express.Router();

contactsRouter.get("/", contactsController.getAllContacts);

contactsRouter.get("/:id", isValidId, contactsController.getOneContact);

contactsRouter.delete("/:id", isValidId, contactsController.deleteContact);

contactsRouter.post("/", contactsController.createContact);

contactsRouter.put("/:id", isValidId, contactsController.updateContact);

contactsRouter.patch(
  "/:id/favorite",
  isValidId,
  contactsController.updateFavorite
);

export default contactsRouter;
