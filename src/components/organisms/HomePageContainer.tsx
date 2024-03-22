import { type FC } from "react";
import { type CollectionsGetListQuery } from "@/gql/graphql";
import { type PaginatedProductResponse } from "@/types/products";
import { ProductListItem } from "@/components/molecules/ProductListItem";

type HomePageContainerProps = {
	collections: CollectionsGetListQuery;
	exampleProducts: PaginatedProductResponse;
};

export const HomePageContainer: FC<HomePageContainerProps> = ({ collections, exampleProducts }) => {
	return (
		<main className="flex flex-1 items-center justify-center p-4">
			<div className="grid w-full max-w-3xl gap-4">
				<h1 className="text-center text-3xl font-bold leading-tight">
					Welcome to Acme Marketplace
				</h1>
				<p className="text-center text-gray-500 dark:text-gray-400">
					The best place to find amazing products and services.
				</p>
				<p className="text-center text-gray-500 dark:text-gray-400">Check out collections:</p>
				<ul className="flex justify-center gap-x-4 text-center">
					{collections.collections.map((collection) => (
						<li className="hover:underline" key={collection.id}>
							<a href={`/collections/${collection.slug}`}>{collection.name}</a>
						</li>
					))}
				</ul>
				<ul
					data-testid="products-list"
					className="grid grid-cols-1 gap-8 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
				>
					{exampleProducts.edges.map((element) => (
						<ProductListItem key={element.node.id} product={element.node} />
					))}
				</ul>
			</div>
		</main>
	);
};
