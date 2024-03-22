import { cookies } from "next/headers";
import { executeGraphql } from "@/api/graphql";
import {
	CartAddItemDocument,
	CartGetByIdDocument,
	ProductGetByIdDocument,
	CartCreateDocument,
} from "@/gql/graphql";

export const getOrCreateCart = async () => {
	"use server";

	const existingCart = await getCartFromCookies();
	if (existingCart) return existingCart.cart;

	const cart = await createCart();
	if (!cart) throw new Error("Failed to create cart");
	cookies().set("cartId", cart.id);
	return cart;
};

const createCart = async () => {
	const { createCart: newCart } = await executeGraphql({
		query: CartCreateDocument,
	});

	return newCart;
};

export const getCartFromCookies = async () => {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const cart = await executeGraphql({
			query: CartGetByIdDocument,
			variables: { id: cartId },
			cache: "no-store",
			next: { tags: ["cart"] },
		});
		if (cart) return cart;
	}
};

export const addProductToCart = async (cartId: string, productId: string) => {
	"use server";
	const { product } = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: { id: productId },
		cache: "no-store",
	});
	if (!product) throw new Error(`Product with ${productId} not found`);

	await executeGraphql({
		query: CartAddItemDocument,
		variables: { cartId, productId, totalPrice: product.price },
		cache: "no-store",
	});
};
