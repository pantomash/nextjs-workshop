import { executeGraphql } from "@/api/graphql";
import { HomePageContainer } from "@/components/organisms/HomePageContainer";
import { CollectionsGetListDocument, ProductsGetPaginatedListDocument } from "@/gql/graphql";

export default async function Home() {
	const collections = await executeGraphql({ query: CollectionsGetListDocument });
	const exampleProducts = await executeGraphql({
		query: ProductsGetPaginatedListDocument,
		variables: { first: 5, skip: 0, orderBy: "createdAt_DESC" },
	});
	return (
		<HomePageContainer
			collections={collections}
			exampleProducts={exampleProducts.productsConnection}
		/>
	);
}
