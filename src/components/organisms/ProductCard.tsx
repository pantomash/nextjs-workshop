import type { FC } from "react";
import { ProductCardDescription } from "@/components/atoms/ProductCardDescription";
import { ProductCardImage } from "@/components/atoms/ProductCardImage";
import type { ProductResponseItem } from "@/types/products";
import { ProductReview } from "@/components/molecules/ProductReview";
import { type Review } from "@/types/reviews";

type ProductCardProps = {
	product: ProductResponseItem;
	reviews: Review[];
	productSlug: string;
};

export const ProductCard: FC<ProductCardProps> = ({ product, reviews, productSlug }) => {
	return (
		<>
			<div className="mx-auto grid max-w-6xl items-start gap-6 px-4 pb-8 pt-6 md:grid-cols-2 lg:gap-12">
				<ProductCardDescription
					id={product.id}
					category={product.categories[0].name}
					description={product.description}
					price={product.price}
					title={product.name}
				/>
				<ProductCardImage image={product.images[0].url} title={product.images[0].alt} />
			</div>
			<ProductReview productId={product.id} productSlug={productSlug} reviews={reviews} />
		</>
	);
};
