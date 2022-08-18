import { methodDelete, methodGet, methodPatch, methodPost } from './api/methods';

export const getAllContacts = (token) => {
  return methodGet('contact/find', '', token);
};

export const getContactById = (id, token) => {
  return methodGet('contact/' + id, '', token);
};

export const getContactByQuery = (req, token) => {
  return methodGet('contact/find', req, token);
};

export const createContact = (data, token) => {
  return methodPost('contact/create', data, token);
};

export const patchContact = (id, data, token) => {
  return methodPatch('contact/update/' + id, data, token);
};

export const deleteContact = (id, token) => {
  return methodDelete('contact/delete/' + id, token);
};
