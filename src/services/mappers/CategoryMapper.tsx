import { CategoriesFetch } from "../../types/type";

class CategoryMapper {
  toDomain(persistenceCategory: CategoriesFetch) {
    return {
      id: persistenceCategory.id,
      name: persistenceCategory.name,
    };
  }
}

export const categoryMapper = new CategoryMapper();
