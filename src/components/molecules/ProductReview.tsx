"use client";

import { type FC, useOptimistic, useEffect, startTransition } from "react";
import { ReviewForm } from "@/components/atoms/ReviewForm";
import { ReviewList } from "@/components/atoms/ReviewList";
import { type Review } from "@/types/reviews";

type ProductReviewProps = {
	productId: string;
	productSlug: string;
	reviews: Review[];
};

export const ProductReview: FC<ProductReviewProps> = ({ productId, productSlug, reviews }) => {
	const [optimisticReview, setOptimisticReview] = useOptimistic(
		reviews,
		(_state, newReviews: Review[]) => newReviews,
	);

	useEffect(() => {
		startTransition(() => {
			setOptimisticReview(reviews);
		});
	}, [reviews, setOptimisticReview]);

	const handleReviewAdd = (newReview: Review) => {
		startTransition(() => {
			setOptimisticReview([...optimisticReview, newReview]);
		});
	};

	return (
		<div className="grid md:grid-cols-2 md:gap-6">
			<ReviewForm
				productId={productId}
				productSlug={productSlug}
				handleOptimisticReview={handleReviewAdd}
			/>
			<ReviewList reviews={optimisticReview} />
		</div>
	);
};
