export interface ProductResponseItem {
	id: string;
	name: string;
	description: string;
	price: number;
	images: {
		url: string;
		alt: string;
	}[];
	categories: {
		id: string;
		name: string;
	}[];
}
