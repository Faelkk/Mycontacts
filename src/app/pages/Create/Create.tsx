import ContactForm from "../../components/ContactForm/ContactForm";
import PageHeader from "../../components/Helpers/pageHeader/PageHeader";

const Create = () => {
  return (
    <>
      <PageHeader title="Novo contato" />
      <ContactForm buttonText="Criar contato" />
    </>
  );
};

export default Create;
