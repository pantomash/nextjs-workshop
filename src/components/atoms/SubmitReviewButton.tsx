import { useFormStatus } from "react-dom";
import { type FC } from "react";
import { Button } from "@/components/ui/button";

export const SubmitReviewButton: FC = () => {
	const { pending } = useFormStatus();

	return (
		<Button type="submit" size="lg" disabled={pending}>
			Submit
		</Button>
	);
};
