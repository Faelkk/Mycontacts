import { useRef } from "react";
import { handleCreateContacts } from "../../../services";

import { toast } from "../../Utils/toast";
import { FormInfo, RefContact } from "../../../types/type";
import { useNavigate } from "react-router-dom";

const useCreate = () => {
  const contactFormRef = useRef<RefContact | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (formData: FormInfo) => {
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
    navigate("/")
  };
  return { contactFormRef, handleSubmit };
};

export default useCreate;
