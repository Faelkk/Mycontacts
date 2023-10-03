import { useEffect, useState } from "react";
import { CategoriesFetch, ContactsArrayWithCategoryId } from "../types/type";

import {
  HandleGetCategories,
  handleGetContactById,
  handleGetContacts,
} from "../services";

export interface ArrayContactsById {
  id: string;
  name: string;
  phone: string | undefined;
  email: string | undefined;
  categoryId: string | undefined;
  category_name?: string;
}

const useApi = (orderBy?: string) => {
  const [contacts, setContacts] = useState<ContactsArrayWithCategoryId[]>([]);
  const [categorysFetch, setCategoryFetch] = useState<CategoriesFetch[]>([]);
  const [contactById, setContactById] = useState<ArrayContactsById>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const FetchContacts = async () => {
    setLoading(true);
    setError(false);

    try {
      const contactList = await handleGetContacts(orderBy);
      setContacts(contactList);
    } catch (err) {
      setError(true);
      setContacts([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchContatById = async (id: string) => {
    setLoading(true);
    setError(false);

    try {
      const contactForm = await handleGetContactById(id);
      setContactById(contactForm);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const FetchCategories = async () => {
    setLoading(true);
    setError(false);

    try {
      const Categories = await HandleGetCategories();
      setCategoryFetch(Categories);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchContacts();
    FetchCategories();
  }, [orderBy]);

  return {
    contacts,
    contactById,
    categorysFetch,
    loading,
    error,
    setContacts,
    setContactById,
    FetchContacts,
    fetchContatById,
  };
};

export default useApi;
