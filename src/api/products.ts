import { executeGraphql } from "@/api/graphql";
import { ProductsGetListDocument } from "@/gql/graphql";

// export interface ProductResponseItem {
// 	id: string;
// 	title: string;
// 	price: number;
// 	description: string;
// 	category: string;
// 	// rating: {
// 	// 	rate: number;
// 	// 	count: number;
// 	// };
// 	image: {
// 		alt: string;
// 		url: string;
// 	};
// 	// longDescription: string;
// }

export interface SearchedProduct {
	name: string;
	slug: string;
	price: number;
	description: string;
}

export const getProducts = async () => {
	const productsGraphqlResponse = await executeGraphql(ProductsGetListDocument);

	return productsGraphqlResponse.products;
};

// export const getProductById = async (id: string) => {
// 	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
// 	const product = (await res.json()) as ProductResponseItem;
// 	return product;
// };
