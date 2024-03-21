"use client";

import { type FC } from "react";
import { RatingStarWrapper } from "@/components/atoms/RatingStarWrapper";
import { type Review } from "@/types/reviews";

type ReviewListProps = {
	reviews: Review[];
};

export const ReviewList: FC<ReviewListProps> = ({ reviews }) => {
	return (
		<div className="space-y-8">
			<h2 className="text-lg font-semibold">Reviews</h2>
			<div className="space-y-4">
				{reviews.map((review) => (
					<div key={review.id}>
						<div className="flex items-center space-x-4">
							<div className="flex items-center space-x-2">
								<div className="font-medium">{review.author}</div>
							</div>
							<div className="flex items-center space-x-2">
								<div className="flex items-center space-x-1">
									<RatingStarWrapper rating={review.rating} />
								</div>
							</div>
						</div>
						<div className="min-h-6 space-y-2 text-sm leading-relaxed">{review.description}</div>
						<hr className="border-gray-200 dark:border-gray-800" />
					</div>
				))}
			</div>
		</div>
	);
};
