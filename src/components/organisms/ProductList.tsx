import { ProductListFilter } from "@/components/atoms/ProductListFilter";
import { ProductListItem } from "@/components/molecules/ProductListItem";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
} from "@/components/ui/pagination";
import { PaginatedRoutes } from "@/types/pagination";
import { type PaginatedProductResponse } from "@/types/products";
import { createPaginatedPageUrl } from "@/utils";

type ProductListProps = {
	paginatedProducts: PaginatedProductResponse;
	elementsPerPage: number;
	currentPage: number;
};

export const ProductList = ({
	paginatedProducts,
	elementsPerPage,
	currentPage,
}: ProductListProps) => {
	return (
		<section className="flex flex-col gap-y-4">
			<div className="self-end">
				<ProductListFilter currentPage={currentPage} />
			</div>
			<div>
				<ul
					data-testid="products-list"
					className="grid grid-cols-1 gap-8 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
				>
					{paginatedProducts.edges.map((element) => {
						return <ProductListItem key={element.node.id} product={element.node} />;
					})}
				</ul>
			</div>
			<div>
				<Pagination aria-label="pagination">
					<PaginationContent>
						{/* <PaginationItem>
							<PaginationPrevious
								href={createPaginatedPageUrl(PaginatedRoutes.PRODUCTS, currentPage - 1)}
								aria-disabled={paginatedProducts.pageInfo.hasPreviousPage ? undefined : true}
								tabIndex={paginatedProducts.pageInfo.hasPreviousPage ? undefined : -1}
								className={
									paginatedProducts.pageInfo.hasPreviousPage
										? undefined
										: "pointer-events-none opacity-50 "
								}
							/>
						</PaginationItem> */}
						{Array.from({
							length: Math.ceil(paginatedProducts.aggregate.count / elementsPerPage),
						}).map((_, index) => {
							return (
								<PaginationItem key={index}>
									<PaginationLink
										href={createPaginatedPageUrl(PaginatedRoutes.PRODUCTS, index + 1)}
										isActive={currentPage === index + 1}
										className={currentPage === index + 1 ? "pointer-events-none opacity-50" : ""}
									>
										{index + 1}
									</PaginationLink>
								</PaginationItem>
							);
						})}
						{/* <PaginationItem>
							<PaginationNext
								href={createPaginatedPageUrl(PaginatedRoutes.PRODUCTS, currentPage + 1)}
								aria-disabled={paginatedProducts.pageInfo.hasNextPage ? undefined : true}
								tabIndex={paginatedProducts.pageInfo.hasNextPage ? undefined : -1}
								className={
									paginatedProducts.pageInfo.hasNextPage
										? undefined
										: "pointer-events-none opacity-50"
								}
							/>
						</PaginationItem> */}
					</PaginationContent>
				</Pagination>
			</div>
		</section>
	);
};
