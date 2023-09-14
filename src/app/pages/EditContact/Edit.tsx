import ContactForm from "../../components/ContactForm/ContactForm";

import PageHeader from "../../components/Helpers/pageHeader/PageHeader";

const Edit = () => {
  return (
    <>
      <PageHeader title="Editar contato" />
      <ContactForm buttonText="Salvar alterações" />
    </>
  );
};

export default Edit;
