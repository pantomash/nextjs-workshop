import { ProductItemType } from "@/components/types";

export interface ProductResponseItem {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
}

export const getProductsList = async () => {
	const res = await fetch("https://naszsklep-api.vercel.app/api/products?take=20");
	const productsResponse = (await res.json()) as ProductResponseItem[];
	const products = productsResponse.map(
		(product): ProductItemType => ({
			id: product.id,
			title: product.title,
			description: product.description,
			price: product.price,
			coverImage: {
				src: product.image,
				alt: product.title,
			},
		}),
	);
	return products;
};

export const getProductById = async (id: string) => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const product = (await res.json()) as ProductResponseItem;
	return product;
};
