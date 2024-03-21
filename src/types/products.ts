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

export interface PaginatedProductResponse {
	edges: {
		node: ProductResponseItem & { slug: string; rating: number };
	}[];
	pageInfo: {
		hasNextPage: boolean;
		hasPreviousPage: boolean;
	};
	aggregate: {
		count: number;
	};
}
