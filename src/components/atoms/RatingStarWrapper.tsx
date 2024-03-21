import { type FC } from "react";
import { StarIcon } from "@/components/svg/StarIcon";

type RatingStarWrapperProps = {
	rating: number;
};

export const RatingStarWrapper: FC<RatingStarWrapperProps> = ({ rating }) => {
	const totalStars = 5;
	return (
		<>
			{Array.from({ length: totalStars }, (_, i) => {
				return <StarIcon key={i} text={`h-4 w-4 ${rating > i ? "opacity-100" : "opacity-30"}`} />;
			})}
		</>
	);
};
