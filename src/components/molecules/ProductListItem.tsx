import Link from "next/link";
import { ProductItemCover } from "@/components/atoms/ProductItemCover";
import { ProductItemDescription } from "@/components/atoms/ProductItemDescription";
import type { ProductListItemFragmentFragment } from "@/gql/graphql";

type ProductListItemProps = {
	product: ProductListItemFragmentFragment;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li>
			<Link href={`/product/${product.slug}`}>
				<article>
					<ProductItemCover src={product.images[0].url} alt={product.images[0].alt} />
					<ProductItemDescription title={product.name} price={product.price} />
				</article>
			</Link>
		</li>
	);
};
