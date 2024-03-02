import { executeGraphql } from "@/api/graphql";
import { CategoriesGetListDocument } from "@/gql/graphql";

export const getCategories = async () => {
	const categoriesGraphqlResponse = await executeGraphql(CategoriesGetListDocument);

	return categoriesGraphqlResponse.categories;
};
