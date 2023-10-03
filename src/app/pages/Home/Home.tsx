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

const Home = () => {
  const {
    filteredContacts,
    contactBeingDeleted,
    isDeleteModalVisible,
    contacts,
    loading,
    error,
    isLoadingDelete,
    handleClickDeleteModal,
    handleConfirmDeleteClick,
  } = useHome();

  return (
    <Container>
      <Loader />

      <Modal
        isLoading={isLoadingDelete}
        danger
        title={contactBeingDeleted ? contactBeingDeleted.name : ""}
        onCancel={() => handleClickDeleteModal()}
        onConfirm={() => handleConfirmDeleteClick()}
        isModalVisible={isDeleteModalVisible}
      >
        <div className="modal-body">
          <ContentText>Essa ação não poderá ser desfeita!</ContentText>
        </div>
      </Modal>

      <InputSearch />

      <HeaderHome />

      {error && <ErrorStatus />}

      {!error && (
        <>
          {contacts?.length < 1 && !loading && <EmptyList />}

          {contacts.length > 0 && filteredContacts.length < 1 && (
            <ContactNotFound />
          )}

          {filteredContacts && filteredContacts.length > 0 && (
            <ListHeadersHome />
          )}

          {filteredContacts &&
            filteredContacts.map((contact) => (
              <CardCreate
                key={contact.id}
                contact={contact}
                handleClickDeleteModal={handleClickDeleteModal}
              />
            ))}
        </>
      )}
    </Container>
  );
};

export default Home;
