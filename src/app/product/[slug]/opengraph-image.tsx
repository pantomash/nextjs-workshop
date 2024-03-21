import { ImageResponse } from "next/og";
import { executeGraphql } from "@/api/graphql";
import { ProductGetBySlugDocument } from "@/gql/graphql";

export default async function Image({ params }: { params: { slug: string } }) {
	const { product } = await executeGraphql({
		query: ProductGetBySlugDocument,
		variables: { slug: params.slug },
	});
	return new ImageResponse(
		(
			<div
				tw="w-full text-white h-full flex flex-col items-center justify-center text-8xl"
				style={{ background: "linear-gradient(90deg, #FF00FF 0%, #FF00FF 100%)" }}
			>
				{product && (
					<>
						<p>{product.name}</p>
						<p>{product.description}</p>
						<p>{product.categories[0].name}</p>
					</>
				)}
			</div>
		),
	);
}
