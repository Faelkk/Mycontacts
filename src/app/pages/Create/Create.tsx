import ContactForm from "../../components/ContactForm/ContactForm";
import PageHeader from "../../components/Helpers/pageHeader/PageHeader";
import useCreate from "./useCreate";

const Create = () => {
  const { contactFormRef, handleSubmit } = useCreate();
  return (
    <>
      <PageHeader title="Novo contato" />
      <ContactForm
        buttonText="Criar contato"
        onSubmit={handleSubmit}
        ref={contactFormRef}
      />
    </>
  );
};

export default Create;
