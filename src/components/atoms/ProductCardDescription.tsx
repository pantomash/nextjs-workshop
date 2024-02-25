import { formatMoney } from "@/utils";
import { FC } from "react";

type ProductCardDescriptionProps = {
	category: string;
	description: string;
	price: number;
	title: string;
};

export const ProductCardDescription: FC<ProductCardDescriptionProps> = ({
	category,
	description,
	price,
	title,
}) => {
	return (
		<div className="flex flex-col items-start justify-between gap-4 md:gap-3">
			<div className="grid items-start gap-4">
				<span>{category}</span>
				<h1 className="text-2xl font-bold sm:text-3xl">{title}</h1>
				<div>
					<p>{description}</p>
				</div>
				<div className="flex items-center gap-4"></div>
			</div>
			<div className="text-4xl font-bold">{formatMoney(price)}</div>
			{/* <Button size="lg">Add to cart</Button> */}
		</div>
	);
};
