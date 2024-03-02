import { getProducts } from "@/api/products";
import { ProductList } from "@/components/organisms/ProductList";

export default async function ProductsPage() {
	const products = await getProducts();

	return <ProductList products={products} />;
}
