import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { executeGraphql } from "@/api/graphql";
import { ProductListItem } from "@/components/molecules/ProductListItem";
import { CategoryGetBySlugDocument } from "@/gql/graphql";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const categoriesResponse = await executeGraphql({
		query: CategoryGetBySlugDocument,
		variables: { slug: params.slug, first: 1, skip: 0 },
	});
	if (!categoriesResponse) {
		notFound();
	}
	return {
		title: categoriesResponse.categoriesConnection.edges[0].node.name,
	};
}

export default async function PaginatedCategoriesPage({
	params,
}: {
	params: { slug: string; pageNumber: string };
}) {
	const elementsPerPage = 10;
	const skip = (parseInt(params.pageNumber) - 1) * elementsPerPage;
	const currentPage = parseInt(params.pageNumber);

	const categoryResponse = await executeGraphql({
		query: CategoryGetBySlugDocument,
		variables: { slug: params.slug, first: elementsPerPage, skip },
	});

	if (!categoryResponse) {
		notFound();
	}

	return (
		<section>
			<h2>{categoryResponse.categoriesConnection.edges[0].node.name}</h2>
			<ul
				data-testid="products-list"
				className="grid grid-cols-1 gap-8 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
			>
				{categoryResponse.categoriesConnection.edges[0].node.products.map((product) => {
					return <ProductListItem key={product.id} product={product} />;
				})}
			</ul>
			<Pagination aria-label="pagination">
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious
							href={`/categories/${params.slug}/${currentPage - 1}`}
							aria-disabled={currentPage === 1 ? true : undefined}
							tabIndex={currentPage === 1 ? -1 : undefined}
							className={currentPage === 1 ? "pointer-events-none opacity-50" : undefined}
						/>
					</PaginationItem>
					{Array.from({
						length: Math.ceil(
							categoryResponse.categoriesConnection.aggregate.count / elementsPerPage,
						),
					}).map((_, index) => {
						return (
							<PaginationItem key={index}>
								<PaginationLink
									href={`/categories/${params.slug}/${index + 1}`}
									aria-current={currentPage === index + 1 ? "page" : undefined}
									className={currentPage === index + 1 ? "pointer-events-none opacity-50" : ""}
								>
									{index + 1}
								</PaginationLink>
							</PaginationItem>
						);
					})}
					<PaginationItem>
						<PaginationNext
							href={`/categories/${params.slug}/${currentPage + 1}`}
							aria-disabled={
								categoryResponse.categoriesConnection.pageInfo.hasNextPage ? undefined : true
							}
							className={
								categoryResponse.categoriesConnection.pageInfo.hasNextPage
									? undefined
									: "pointer-events-none opacity-50"
							}
						/>
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</section>
	);
}
