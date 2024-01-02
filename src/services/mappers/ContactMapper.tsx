import { Contact, FormInfo } from "../../types/type";

class ContactMapper {
  toPersistence(domainContact: FormInfo) {
    return {
      id: domainContact.id,
      name: domainContact.name,
      phone: domainContact.phone,
      email: domainContact.email,
      categoryId: domainContact.category,
    };
  }
  toDomain(persitenceContact: Contact) {
    
    return {
      id: persitenceContact.id,
      name: persitenceContact.name,
      phone: persitenceContact.phone,
      email: persitenceContact.email,
      categoryId: persitenceContact.categoryId
    };
  }
}

export default new ContactMapper();
