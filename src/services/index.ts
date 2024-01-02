import { CategoriesFetch, ContactsArray, CreateInfo } from "../types/type";
import { categoryMapper } from "./mappers/CategoryMapper";

import ContactMaper from "./mappers/ContactMaper";
import httpClient from "./utils/httpClient";

export const handleGetContacts = async (orderBy = "asc") => {
  const { GET } = httpClient();

  const contacts = await GET(`/contacts?sortOrder=${orderBy}`);

  return contacts.map((contact: ContactsArray) => {
    return ContactMaper.toDomain(contact);
  });
};

export const handleGetContactById = async (id: string) => {
  const { GET } = httpClient();

  const contactById = await GET(`/contacts/${id}`);

  
  return ContactMaper.toDomain(contactById);
};

export const handleDeleteContactById = (id: string) => {
  const { DELETE } = httpClient();

  return DELETE(`/contacts/${id}`);
};
export const handleUpdateContacts = (id: string, contact: CreateInfo) => {
  const { PUT } = httpClient();

  return PUT(`/contacts/${id}`, { body: contact });
};

export const handleCreateContacts = (contact: CreateInfo) => {
  const body = ContactMaper.toPersistence(contact);

  
  const { POST } = httpClient();

  return POST(`/contacts`, body);
};

export const HandleGetCategories = async () => {
  const { GET } = httpClient();
  const categories = await GET("/categories");

  return categories.map((category: CategoriesFetch) => {
    return categoryMapper.toDomain(category);
  });
};
