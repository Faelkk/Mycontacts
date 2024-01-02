import { useCallback, useEffect, useState } from "react";
import {
  CategoriesFetch,
  ContactsArrayWithCategoryId,
  DomainInfo,
} from "../types/type";

import {
  HandleGetCategories,
  handleGetContactById,
  handleGetContacts,
} from "../services";

const useApi = (orderBy?: string) => {
  const [contacts, setContacts] = useState<ContactsArrayWithCategoryId[]>([]);
  const [categoryFetch, setCategoryFetch] = useState<CategoriesFetch[]>([]);
  const [contactById, setContactById] = useState<DomainInfo>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const FetchContacts = useCallback(async () => {
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
  }, [orderBy]);


  const fetchContactById = async (id: string) => {

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
    categoryFetch,
    loading,
    error,
    setContacts,
    setContactById,
    FetchContacts,
    fetchContactById,
  };
};

export default useApi;
