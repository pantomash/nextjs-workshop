import type { FC } from "react";
import { ProductCardDescription } from "@/components/atoms/ProductCardDescription";
import { ProductCardImage } from "@/components/atoms/ProductCardImage";
import type { ProductResponseItem } from "@/types/products";

type ProductCardProps = {
	product: ProductResponseItem;
};

// TODO: Add Add to cart button and change img to next/image

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
	return (
		<div className="mx-auto grid max-w-6xl items-start gap-6 px-4 py-6 md:grid-cols-2 lg:gap-12">
			<ProductCardDescription
				category={product.categories[0].name}
				description={product.description}
				price={product.price}
				title={product.name}
			/>
			<ProductCardImage image={product.images[0].url} title={product.images[0].alt} />
		</div>
	);
};
