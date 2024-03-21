"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

export const AddToCartButton = () => {
	const formStatus = useFormStatus();

	return (
		<Button data-testid="add-to-cart-button" type="submit" size="lg" disabled={formStatus.pending}>
			Add to cart
		</Button>
	);
};
