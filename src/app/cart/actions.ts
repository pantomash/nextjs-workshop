"use server";

import { revalidateTag } from "next/cache";
import { executeGraphql } from "@/api/graphql";
import { CartRemoveItemDocument, CartSetItemQuantityDocument } from "@/gql/graphql";

export const changeItemQuanity = (itemId: string, quantity: number) => {
	return executeGraphql({
		query: CartSetItemQuantityDocument,
		variables: { cartItemId: itemId, quantity },
		next: {
			tags: ["cart"],
		},
	});
};

export const handleItemQuantity = async (newQuantity: number, itemId: string) => {
	"use server";
	await changeItemQuanity(itemId, newQuantity);
	revalidateTag("cart");
};

export const removeCartItem = (itemId: string) => {
	return executeGraphql({ query: CartRemoveItemDocument, variables: { itemId } });
};
