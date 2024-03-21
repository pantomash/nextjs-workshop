import { executeGraphql } from "@/api/graphql";
import { SearchItem } from "@/components/atoms/SearchItem";
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
			<div className="mt-6 grid items-start gap-4 md:grid-cols-3">
				<SearchItem products={products} />
			</div>
		</>
	);
}
