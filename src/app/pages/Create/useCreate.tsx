import { useRef } from "react";
import { handleCreateContacts } from "../../../services";
import { typeRefContact, TypeForm } from "../../../types/type";
import { toast } from "../../Utils/toast";

const useCreate = () => {
  const contactFormRef = useRef<typeRefContact | null>(null);

  const handleSubmit = async (formData: TypeForm) => {
    try {
      await handleCreateContacts(formData);
      if (contactFormRef && contactFormRef.current) {
        contactFormRef.current.resetFields();
      }

      toast({
        type: "success",
        text: "contato cadastrado com sucesso!",
      });
    } catch {
      toast({
        type: "danger",
        text: "Ocorreu um erro ao cadastrar contato!",
      });
    }
  };
  return { contactFormRef, handleSubmit };
};

export default useCreate;
