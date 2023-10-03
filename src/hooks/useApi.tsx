import { useEffect, useState } from "react";
import { CategoriesFetch, TypeContactsById, typeContacts } from "../types/type";

import {
  HandleGetCategories,
  handleGetContactById,
  handleGetContacts,
} from "../services";

const useApi = (orderBy?: string) => {
  const [contacts, setContacts] = useState<typeContacts>([]);
  const [categorysFetch, setCategoryFetch] = useState<CategoriesFetch[]>([]);
  const [contactById, setContactById] = useState<TypeContactsById>();
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
      const contactById = await handleGetContactById(id);
      setContactById(contactById);
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
