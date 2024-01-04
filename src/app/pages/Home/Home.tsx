import Loader from "../../components/Helpers/Loading/Loader";
import Modal from "../../components/Modal/Modal";
import { Container } from "./style";
import { ContentText } from "../../components/Modal/style";
import HeaderHome from "./components/Header/Header";
import InputSearch from "./components/InputSearch/InputSearch";
import ErrorStatus from "./components/ErrorStatus/ErrorStatus";
import EmptyList from "./components/EmptyList/EmptyList";
import ContactNotFound from "./components/ContactNotFound/ContactNotFound";
import ListHeadersHome from "./ListHeader/ListHeader";
import CardCreate from "./components/Card/CardCreate";
import useHome from "./useHome";
import { ContactsArray } from "../../../types/type";
import { useEffect } from "react";

const Home = () => {
  const {
    orderBy,
    filteredContacts,
    contactBeingDeleted,
    isDeleteModalVisible,
    contacts,
    loading,
    error,
    isLoadingDelete,
    searchTerms,
    handleCancelClickModal,
    handleClickDeleteModal,
    handleChangeSearchTerm,
    handleConfirmDeleteClick,
    handleToggleOrderBy,
  } = useHome();

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <Container>
      <Loader loading={loading} />

      <Modal
        isLoading={isLoadingDelete}
        danger
        title={contactBeingDeleted ? contactBeingDeleted.name : ""}
        onCancel={() => handleCancelClickModal()}
        onConfirm={() => handleConfirmDeleteClick()}
        isModalVisible={isDeleteModalVisible}
      >
        <div className="modal-body">
          <ContentText>Essa ação não poderá ser desfeita!</ContentText>
        </div>
      </Modal>

      <InputSearch
        searchTerms={searchTerms}
        handleChangeSearchTerm={handleChangeSearchTerm}
      />

      <HeaderHome
        contacts={contacts}
        filteredContacts={filteredContacts}
        error={error}
      />

      {error && <ErrorStatus />}

      {contacts && (
        <>
          {!loading && contacts?.length < 1 && <EmptyList />}

          {contacts.length > 0 &&
            filteredContacts &&
            filteredContacts.length < 1 && <ContactNotFound />}

          {filteredContacts && filteredContacts.length > 0 && (
            <ListHeadersHome
              orderBy={orderBy}
              handleToggleOrderBy={handleToggleOrderBy}
            />
          )}

          {filteredContacts &&
            filteredContacts.map((contact: ContactsArray) => (
              <CardCreate
                key={contact.id}
                contact={contact}
                handleClickDeleteModal={() => handleClickDeleteModal(contact)}
              />
            ))}
        </>
      )}
    </Container>
  );
};

export default Home;
