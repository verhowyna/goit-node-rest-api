import Contact from "../models/Contact.js";

export const listContacts = () => Contact.find();

export const getOneContactById = (id) => Contact.findById(id);

export const addContact = (data) => Contact.create(data);

export const updateContactById = (id, data) =>
  Contact.findByIdAndUpdate(id, data);

export const deleteContactById = (id) => Contact.findByIdAndDelete(id);

export const updateStatusContact = (id, body) =>
  Contact.findByIdAndUpdate(id, body);
