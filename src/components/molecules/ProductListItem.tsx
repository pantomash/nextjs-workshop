import { ProductItemCover } from "@/components/atoms/ProductItemCover";
import { ProductItemDescription } from "@/components/atoms/ProductItemDescription";
import { ProductItemType } from "@/components/types";
import Link from "next/link";

type ProductListItemProps = {
	product: ProductItemType;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li>
			<Link href={`/products/${product.id}`}>
				<article>
					<ProductItemCover src={product.coverImage.src} alt={product.coverImage.alt} />
					<ProductItemDescription
						title={product.title}
						description={product.description}
						price={product.price}
					/>
				</article>
			</Link>
		</li>
	);
};
