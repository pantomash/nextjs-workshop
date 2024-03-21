import { formatMoney } from "@/utils";

type ProductItemDescriptionProps = {
	title: string;
	price: number;
	rating: number;
};

export const ProductItemDescription = (props: ProductItemDescriptionProps) => {
	const { title, price, rating } = props;
	return (
		<div className="mt-2 flex flex-col">
			<h3 className="font-semibold text-gray-700">{title}</h3>
			<p data-testid="product-price" className="text-sm font-medium text-gray-900">
				{formatMoney(price)}
			</p>
			<p data-testid="product-price" className="text-sm italic">
				{Number(rating).toFixed(2)}
			</p>
		</div>
	);
};
