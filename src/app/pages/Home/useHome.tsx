import { ChangeEvent, useMemo, useState } from "react";

import { handleDeleteContactById } from "../../../services";

import { toast } from "../../Utils/toast";
import useApi from "../../../hooks/useApi";
import { ContactsArray } from "../../../types/type";

const useHome = () => {
  const [orderBy, setOrderBy] = useState("asc");
  const [searchTerms, setSearchTearms] = useState("");
  const { contacts, loading, error, FetchContacts, setContacts } =
    useApi(orderBy);
  const [contactBeingDeleted, setContatBeingDeleted] =
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
    setSearchTearms(event.target.value);
  };

  const handleTryAgain = () => {
    FetchContacts();
  };

  const handleDeleteClickModal = (contact: ContactsArray) => {
    setContatBeingDeleted(contact);
    setIsDeleteModalVisible(true);
  };

  const handleClickDeleteModal = () => {
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
    handleDeleteClickModal,
    handleConfirmDeleteClick,
    handleToggleOrderBy,
  };
};

export default useHome;
