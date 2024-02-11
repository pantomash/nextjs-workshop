import { ProductList } from "@/ui/organisms/ProductList";
import { ProductItemType } from "@/ui/types";

const products: ProductItemType[] = [
	{
		id: "1",
		title: "Product 1",
		description: "Description 1",
		price: 100,
		coverImage: {
			src: "https://via.placeholder.com/150",
			alt: "Product 1",
		},
	},
	{
		id: "2",
		title: "Product 2",
		description: "Description 2",
		price: 200,
		coverImage: {
			src: "https://via.placeholder.com/150",
			alt: "Product 2",
		},
	},
	{
		id: "3",
		title: "Product 3",
		description: "Description 3",
		price: 300,
		coverImage: {
			src: "https://via.placeholder.com/150",
			alt: "Product 3",
		},
	},
	{
		id: "4",
		title: "Product 4",
		description: "Description 4",
		price: 400,
		coverImage: {
			src: "https://via.placeholder.com/150",
			alt: "Product 4",
		},
	},
];

export default function Home() {
	return (
		<section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
			<ProductList products={products} />
		</section>
	);
}
