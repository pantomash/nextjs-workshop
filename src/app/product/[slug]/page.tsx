import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { executeGraphql } from "@/api/graphql";
import { ProductCard } from "@/components/organisms/ProductCard";
import {
	ProductGetBySlugDocument,
	ProductsGetPaginatedListDocument,
	ReviewsGetListByProductIdDocument,
} from "@/gql/graphql";

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const { product } = await executeGraphql({
		query: ProductGetBySlugDocument,
		variables: { slug: params.slug },
	});
	if (!product) {
		notFound();
	}
	return {
		title: `${product.name} - Sklep internetowy`,
		description: product.description,
		openGraph: {
			title: `${product.name} - Sklep internetowy`,
			description: product.description,
		},
	};
}

export default async function ProductDetailsPage({ params }: { params: { slug: string } }) {
	const { product } = await executeGraphql({
		query: ProductGetBySlugDocument,
		variables: { slug: params.slug },
		next: {
			tags: ["singleProduct"],
		},
	});

	if (!product) {
		notFound();
	}

	const { reviews } = await executeGraphql({
		query: ReviewsGetListByProductIdDocument,
		variables: { productId: product.id },
	});

	const relatedProducts = await executeGraphql({
		query: ProductsGetPaginatedListDocument,
		variables: { first: 4, skip: 0, orderBy: "createdAt_DESC" },
	});

	return (
		<ProductCard
			product={product}
			reviews={reviews}
			productSlug={params.slug}
			relatedProducts={relatedProducts.productsConnection}
		/>
	);
}
