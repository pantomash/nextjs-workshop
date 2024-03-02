import { formatMoney } from "@/utils";

type ProductItemDescriptionProps = {
	title: string;
	price: number;
};

export const ProductItemDescription = (props: ProductItemDescriptionProps) => {
	const { title, price } = props;
	return (
		<div className="mt-2 flex flex-row justify-around">
			<h3 className="text-sm font-semibold text-gray-700">{title}</h3>
			<p className="text-sm font-medium text-gray-900">{formatMoney(price)}</p>
		</div>
	);
};
