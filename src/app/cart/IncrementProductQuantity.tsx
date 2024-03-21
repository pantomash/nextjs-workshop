"use client";
import { useOptimistic } from "react";
import { handleItemQuantity } from "@/app/cart/actions";

export const IncrementProductQuantity = ({
	quantity,
	itemId,
}: {
	quantity: number;
	itemId: string;
}) => {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
		quantity,
		(_state, newQuantity: number) => newQuantity,
	);
	console.log("quantity", quantity);
	console.log("itemId", itemId);

	return (
		<form>
			<button
				className="mr-2 w-8 border bg-slate-50"
				formAction={async () => {
					const newQuantity = optimisticQuantity > 0 ? optimisticQuantity - 1 : 0;
					setOptimisticQuantity(newQuantity);
					await handleItemQuantity(newQuantity, itemId);
				}}
				data-testid="decrement"
			>
				-
			</button>
			<span data-testid="quantity">{optimisticQuantity}</span>
			<button
				className="ml-2 w-8 border bg-slate-50"
				formAction={async () => {
					const newQuantity = optimisticQuantity + 1;
					setOptimisticQuantity(newQuantity);
					await handleItemQuantity(newQuantity, itemId);
				}}
				data-testid="increment"
			>
				+
			</button>
		</form>
	);
};
