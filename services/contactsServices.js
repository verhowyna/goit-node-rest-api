import Contact from "../models/Contact.js";

export const listContacts = (filter = {}) => Contact.find(filter);

export const getOneContact = (filter) => Contact.findOne(filter);

export const addContact = (data) => Contact.create(data);

export const updateOneContact = (filter, data) =>
  Contact.findOneAndUpdate(filter, data);

export const deleteOneContact = (filter) => Contact.findOneAndDelete(filter);

export const updateStatusContact = (id, body) =>
  Contact.findByIdAndUpdate(id, body);
