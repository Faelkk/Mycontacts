import { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UseApi from "../../../hooks/useApi";
import { handleUpdateContacts } from "../../../services";

import { toast } from "../../Utils/toast";
import { FormInfo, RefContact } from "../../../types/type";

const useEditContact = () => {
  const contactForm = useRef<RefContact | null>(null);

  const { id } = useParams();
  const { contactById, loading, error,  fetchContactById, setContactById } =
    UseApi();

  const navigate = useNavigate();

  useEffect(() => {
    id && fetchContactById(id);
  }, [id]);
  
  const handleSubmit = async (formData: FormInfo) => {
  
    
    try {
      const contact = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        categoryId: formData.category,
      };
      
      

      if (id) {
        const contactData = await handleUpdateContacts(id, contact);
        setContactById(contactData);
     
      }

      toast({
        type: "success",
        text: "contato editado com sucesso!",
      });
    } catch {
      toast({
        type: "danger",
        text: "Ocorreu um erro ao editado contato!",

      });
    }
   finally {
    navigate("/")
   }
  };

  if (error) {
    navigate("/");
    toast({
      type: "danger",
      text: "contato nao encontrado",
  
    });
  }

  if (contactById && contactForm.current) {

    contactForm.current.setFieldsValue(contactById);
    
  }


  return {
    loading,
    contactById,
    contactForm,
    handleSubmit,
  };
};

export default useEditContact;
