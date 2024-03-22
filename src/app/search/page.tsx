import { executeGraphql } from "@/api/graphql";
import { ProductListItem } from "@/components/molecules/ProductListItem";
import { SearchGetListDocument } from "@/gql/graphql";

export default async function SearchPage({ searchParams }: { searchParams: { query: string } }) {
	const { products } = await executeGraphql({
		query: SearchGetListDocument,
		variables: { query: searchParams.query },
	});

	return (
		<>
			<h1 className="text-lg font-semibold leading-tight sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
				Search results:
			</h1>
			<ul
				data-testid="products-list"
				className="grid grid-cols-1 gap-8 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
			>
				{products.map((product) => (
					<ProductListItem key={product.name} product={product} />
				))}
			</ul>
			{/* <div className="mt-6 grid items-start gap-4 md:grid-cols-3">
				<SearchItem products={products} />
			</div> */}
		</>
	);
}
