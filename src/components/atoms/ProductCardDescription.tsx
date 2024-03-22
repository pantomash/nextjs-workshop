import { type FC } from "react";
import { revalidateTag } from "next/cache";
import { formatMoney } from "@/utils";
import { AddToCartButton } from "@/components/atoms/AddToCartButton";
import { addProductToCart, getOrCreateCart } from "@/api/cart";
import { changeItemQuanity } from "@/app/cart/actions";

type ProductCardDescriptionProps = {
	id: string;
	category: string;
	description: string;
	price: number;
	title: string;
	rating: number;
};

export const ProductCardDescription: FC<ProductCardDescriptionProps> = ({
	id,
	category,
	description,
	price,
	title,
	rating,
}) => {
	async function addProductToCartAction() {
		"use server";
		const cart = await getOrCreateCart();

		if (cart && cart.items) {
			const productAlreadyExistInCart = cart.items.find(
				(item) =>
					(
						item.product as {
							id: string;
							slug: string;
							name: string;
							description: string;
							price: number;
							images: {
								url: string;
								alt: string;
							}[];
							categories: {
								id: string;
								name: string;
							}[];
						}
					).id === id,
			);

			if (productAlreadyExistInCart) {
				await changeItemQuanity(
					productAlreadyExistInCart.id,
					productAlreadyExistInCart.quantity + 1,
				);
				return;
			}
		}
		await addProductToCart((cart as { id: string }).id, id);
		revalidateTag("cart");
	}

	return (
		<form
			action={addProductToCartAction}
			className="flex flex-col items-start justify-between gap-4 md:gap-3"
		>
			<div className="grid items-start gap-4">
				<span>{category}</span>
				<h1 className="text-2xl font-bold sm:text-3xl">{title}</h1>
				<div>
					<p>{description}</p>
				</div>
				<div className="flex items-center gap-4">{rating}</div>
			</div>
			<div className="mb-4 text-4xl font-bold">{formatMoney(price)}</div>
			<AddToCartButton />
		</form>
	);
};
