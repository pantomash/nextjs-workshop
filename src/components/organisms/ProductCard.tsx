import { ProductDetailType } from "@/components/types";
import { FC } from "react";
import { ProductCardDescription } from "@/components/atoms/ProductCardDescription";
import { ProductCardImage } from "@/components/atoms/ProductCardImage";

type ProductCardProps = {
	product: ProductDetailType;
};

// TODO: Add Add to cart button and change img to next/image

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
	return (
		<div className="mx-auto grid max-w-6xl items-start gap-6 px-4 py-6 md:grid-cols-2 lg:gap-12">
			<ProductCardDescription
				category={product.category}
				description={product.description}
				price={product.price}
				title={product.title}
			/>
			<ProductCardImage image={product.image} title={product.title} />
		</div>
	);
};
