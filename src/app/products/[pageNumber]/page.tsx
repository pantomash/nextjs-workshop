import { notFound } from "next/navigation";
import { getProducts } from "@/api/products";
import { ProductList } from "@/components/organisms/ProductList";

export default async function PaginatedProductsPage({
	params,
	searchParams,
}: {
	params: { pageNumber: string };
	searchParams: { sort: string };
}) {
	const elementsPerPage = 10;
	const skip = (parseInt(params.pageNumber) - 1) * elementsPerPage;
	const productsResponse = await getProducts(elementsPerPage, skip, searchParams.sort);

	if (!productsResponse) {
		notFound();
	}

	return (
		<ProductList
			paginatedProducts={productsResponse}
			elementsPerPage={elementsPerPage}
			currentPage={parseInt(params.pageNumber)}
		/>
	);
}
