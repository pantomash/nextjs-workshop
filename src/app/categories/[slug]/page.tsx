import { notFound } from "next/navigation";
import { executeGraphql } from "@/api/graphql";
import { ProductListItem } from "@/components/molecules/ProductListItem";
import { CategoryGetBySlugDocument } from "@/gql/graphql";

export default async function CategoriesPage({ params }: { params: { slug: string } }) {
	const { category } = await executeGraphql({
		query: CategoryGetBySlugDocument,
		variables: { slug: params.slug },
	});
	if (!category) {
		notFound();
	}

	return (
		<section>
			<h2>{category.name}</h2>
			<ul
				data-testid="products-list"
				className="grid grid-cols-1 gap-8 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
			>
				{category.products.map((product) => {
					return <ProductListItem key={product.id} product={product} />;
				})}
			</ul>
		</section>
	);
}
