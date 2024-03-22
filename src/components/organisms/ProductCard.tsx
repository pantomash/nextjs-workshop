import type { FC } from "react";
import { ProductCardDescription } from "@/components/atoms/ProductCardDescription";
import { ProductCardImage } from "@/components/atoms/ProductCardImage";
import type { PaginatedProductResponse, ProductResponseItem } from "@/types/products";
import { ProductReview } from "@/components/molecules/ProductReview";
import { type Review } from "@/types/reviews";
import { ProductListItem } from "@/components/molecules/ProductListItem";

type ProductCardProps = {
	product: ProductResponseItem;
	reviews: Review[];
	productSlug: string;
	relatedProducts: PaginatedProductResponse;
};

export const ProductCard: FC<ProductCardProps> = ({
	product,
	reviews,
	productSlug,
	relatedProducts,
}) => {
	return (
		<>
			<div className="mx-auto grid max-w-6xl items-start gap-6 px-4 pb-8 pt-6 md:grid-cols-2 lg:gap-12">
				<ProductCardDescription
					id={product.id}
					category={product.categories[0].name}
					description={product.description}
					price={product.price}
					title={product.name}
					rating={product.rating}
				/>
				<ProductCardImage image={product.images[0].url} title={product.images[0].alt} />
			</div>
			<ProductReview productId={product.id} productSlug={productSlug} reviews={reviews} />
			<div>
				<h2>Related products: </h2>
				<ul
					data-testid="related-products"
					className="grid grid-cols-1 gap-8 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
				>
					{relatedProducts.edges.map((element) => (
						<ProductListItem key={element.node.id} product={element.node} />
					))}
				</ul>
			</div>
		</>
	);
};
