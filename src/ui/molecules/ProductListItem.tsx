import { ProductItemCover } from "@/ui/atoms/ProductItemCover";
import { ProductItemDescription } from "@/ui/atoms/ProductItemDescription";
import { ProductItemType } from "@/ui/types";

type ProductListItemProps = {
	product: ProductItemType;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li>
			<article>
				<ProductItemCover src={product.coverImage.src} alt={product.coverImage.alt} />
				<ProductItemDescription
					title={product.title}
					description={product.description}
					price={product.price}
				/>
			</article>
		</li>
	);
};
