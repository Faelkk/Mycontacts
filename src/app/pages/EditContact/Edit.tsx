import ContactForm from "../../components/ContactForm/ContactForm";
import PageHeader from "../../components/Helpers/pageHeader/PageHeader";
import Loader from "../../components/Helpers/Loading/Loader";
import useEditContact from "./useEditContact";

const Edit = () => {
  const { loading, contactById, contactForm, handleSubmit } = useEditContact();

  return (
    <>
      <Loader />
      <PageHeader
        title={`${loading ? "carregando contato..." : "editar contato"} ${
          contactById ? contactById.name : ""
        }`}
      />
      <ContactForm
        buttonText="Salvar alterações"
        onSubmit={handleSubmit}
        ref={contactForm}
      />
    </>
  );
};

export default Edit;
