import { TypeForm, typeCategory } from "../../types/type";

class ContactMapper {
  toPersistence(domainContact: TypeForm) {
    return {
      id: domainContact.id,
      name: domainContact.name,
      phone: domainContact.phone,
      email: domainContact.email,
      category_id: domainContact.category,
    };
  }
  toDomain(persitenceContact: typeCategory) {
    return {
      id: persitenceContact.id,
      name: persitenceContact.name,
      phone: persitenceContact.phone,
      email: persitenceContact.email,
      categoryId: persitenceContact.category_id,
    };
  }
}

export default new ContactMapper();
