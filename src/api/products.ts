import { executeGraphql } from "@/api/graphql";
import { type ProductOrderByInput, ProductsGetPaginatedListDocument } from "@/gql/graphql";

export interface SearchedProduct {
	name: string;
	slug: string;
	price: number;
	description: string;
}

export const getProducts = async (first: number, skip: number, sort?: string) => {
	const variables = sort ? { orderBy: sort } : { orderBy: "id_ASC" };
	const productsGraphqlResponse = await executeGraphql({
		query: ProductsGetPaginatedListDocument,
		variables: {
			first,
			skip,
			orderBy: variables.orderBy as ProductOrderByInput,
		},
	});

	return productsGraphqlResponse.productsConnection;
};
