import { formatMoney } from "@/utils";

type ProductItemDescriptionProps = {
	title: string;
	description: string;
	price: number;
};

export const ProductItemDescription = (props: ProductItemDescriptionProps) => {
	const { title, description, price } = props;
	return (
		<div className="mt-2 flex justify-between">
			<h3 className="text-sm font-semibold text-gray-700">{title}</h3>
			<p className="text-sm text-gray-500">{description}</p>
			<p className="text-sm font-medium text-gray-900">{formatMoney(price)}</p>
		</div>
	);
};
