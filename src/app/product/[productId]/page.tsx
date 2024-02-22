import { getProductById, getProductsList } from "@/api/products";
import { ProductCard } from "@/components/organisms/ProductCard";
import { Metadata } from "next";

export async function generateMetadata({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const product = await getProductById(params.productId);
	return {
		title: `${product.title} - Sklep internetowy`,
		description: product.description,
		openGraph: {
			title: `${product.title} - Sklep internetowy`,
			description: product.description,
		},
	};
}

export default async function ProductDetailsPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);
	return <ProductCard product={product} />;
}
