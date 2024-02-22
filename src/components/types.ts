import { ProductResponseItem } from "@/api/products";

export type ProductItemType = {
	id: string;
	title: string;
	description: string;
	price: number;
	coverImage: {
		src: string;
		alt: string;
	};
};

export type ProductDetailType = ProductResponseItem;
