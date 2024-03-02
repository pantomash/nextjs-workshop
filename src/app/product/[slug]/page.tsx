import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { executeGraphql } from "@/api/graphql";
import { ProductCard } from "@/components/organisms/ProductCard";
import { ProductGetBySlugDocument } from "@/gql/graphql";

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const { product } = await executeGraphql(ProductGetBySlugDocument, { slug: params.slug });
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
	const { product } = await executeGraphql(ProductGetBySlugDocument, { slug: params.slug });
	if (!product) {
		notFound();
	}
	return <ProductCard product={product} />;
}
