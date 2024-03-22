"use server";

import { revalidatePath } from "next/cache";
import { executeGraphql } from "@/api/graphql";
import { ReviewCreateDocument, ReviewPublishDocument } from "@/gql/graphql";
import { type CreateReview } from "@/types/reviews";

export const createReview = (review: CreateReview) => {
	return executeGraphql({
		query: ReviewCreateDocument,
		variables: { ...review, productId: review.productId as string },
	});
};

export const publishReview = (id: string) => {
	return executeGraphql({ query: ReviewPublishDocument, variables: { id } });
};

export async function addReviewAction(data: CreateReview) {
	"use server";
	await createReview(data);
	// const review = await createReview(data);
	// if (review.createReview) {
	// 	console.log("review", review.createReview);
	// }
	revalidatePath("singleProduct");
}
