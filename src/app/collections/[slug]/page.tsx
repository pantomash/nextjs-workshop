import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { executeGraphql } from "@/api/graphql";
import { CollectionsGetBySlugDocument } from "@/gql/graphql";
import { ProductListItem } from "@/components/molecules/ProductListItem";

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const collectionReponse = await executeGraphql({
		query: CollectionsGetBySlugDocument,
		variables: { slug: params.slug },
	});

	if (!collectionReponse) {
		notFound();
	}

	return {
		title: collectionReponse.collections[0].name,
	};
}

export default async function CollectionsPage({ params }: { params: { slug: string } }) {
	const collectionsResponse = await executeGraphql({
		query: CollectionsGetBySlugDocument,
		variables: { slug: params.slug },
	});

	if (!collectionsResponse) {
		notFound();
	}

	return (
		<div className="flex flex-col gap-y-4">
			<h1>{collectionsResponse.collections[0].name}</h1>
			<ul
				data-testid="products-list"
				className="grid grid-cols-1 gap-8 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
			>
				{collectionsResponse.collections.map((element) => (
					<>
						{element.products.map((product) => (
							<ProductListItem key={product.id} product={product} />
						))}
					</>
				))}
			</ul>
		</div>
	);
}
