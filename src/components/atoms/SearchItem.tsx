import type { FC } from "react";
import Link from "next/link";
import type { SearchedProduct } from "@/api/products";
import { formatMoney } from "@/utils";

type SearchItemProps = {
	products: SearchedProduct[];
};

export const SearchItem: FC<SearchItemProps> = ({ products }) => {
	return (
		<>
			{products.map((product) => (
				<Link
					className="[&:hover] .content-underline hidden items-start gap-4 md:col-span-2 md:grid"
					key={product.slug}
					href={`/product/${product.slug}`}
				>
					<div className="grid gap-2.5">
						<h2 className="text-base font-semibold leading-tight sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
							{product.name}
						</h2>
						<div className="text-left font-semibold md:text-lg lg:text-xl xl:text-2xl">
							{formatMoney(product.price)}
						</div>
						<p className="text-muted-foreground dark:text-muted-foreground-contrast text-sm">
							{product.description}
						</p>
					</div>
				</Link>
			))}
		</>
	);
};
