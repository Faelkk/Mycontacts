import { ChangeEvent, useMemo, useState } from "react";

import { handleDeleteContactById } from "../../../services";

import { toast } from "../../Utils/toast";
import useApi from "../../../hooks/useApi";
import { ContactsArray } from "../../../types/type";

const useHome = () => {
  const [orderBy, setOrderBy] = useState("asc");
  const [searchTerms, setSearchTerms] = useState("");
  const { contacts, loading, error, FetchContacts, setContacts } =
    useApi(orderBy);
  const [contactBeingDeleted, setContactBeingDeleted] =
    useState<ContactsArray | null>(null);
  const [isLoadingDelete, setIsloadingDelete] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  const filteredContacts = useMemo(
    () =>
      contacts?.filter((contact: ContactsArray) =>
        contact.name.toLowerCase().includes(searchTerms.toLowerCase())
      ),
    [contacts, searchTerms]
  );

  const handleToggleOrderBy = () => {
    setOrderBy((prevState: string) => (prevState === "asc" ? "desc" : "asc"));
  };

  const handleChangeSearchTerm = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerms(event.target.value);
  };

  const handleTryAgain = () => {
    FetchContacts();
  };

  const handleCancelClickModal = () => {
    setIsDeleteModalVisible(true);
    setContactBeingDeleted(null)
  };

  const handleClickDeleteModal = (contact: ContactsArray) => {
    setContactBeingDeleted(contact);
    setIsDeleteModalVisible(!isDeleteModalVisible);
  };

  const handleConfirmDeleteClick = async () => {
    try {
      setIsloadingDelete(true);
      if (contactBeingDeleted)
        await handleDeleteContactById(contactBeingDeleted.id);

      setContacts((prevState) =>
        prevState.filter(
          (contact: ContactsArray) => contact.id !== contactBeingDeleted?.id
        )
      );
      setIsDeleteModalVisible(!isDeleteModalVisible);

      toast({
        type: "success",
        text: "Contato deletado com sucesso",
        duration: 5000,
      });
    } catch {
      toast({
        type: "danger",
        text: "ocorreu um erro ao deletar o contato",
        duration: 5000,
      });
    } finally {
      setIsloadingDelete(false);
    }
  };

  return {
    filteredContacts,
    contactBeingDeleted,
    isDeleteModalVisible,
    contacts,
    searchTerms,
    loading,
    error,
    orderBy,
    isLoadingDelete,
    handleClickDeleteModal,
    handleChangeSearchTerm,
    handleTryAgain,
    handleCancelClickModal,
    handleConfirmDeleteClick,
    handleToggleOrderBy,
  };
};

export default useHome;
