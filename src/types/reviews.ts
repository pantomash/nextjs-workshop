export interface Review {
	author: string;
	description: string;
	id: string;
	rating: number;
	title: string;
}

export interface CreateReview {
	author: string;
	description: string;
	rating: number;
	title: string;
	productId?: string;
}
