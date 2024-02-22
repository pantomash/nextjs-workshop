import { ProductDetailType } from "@/components/types";
import { FC } from "react";
import Image from "next/image";
import { formatMoney } from "@/utils";

type ProductCardProps = {
	product: ProductDetailType;
};

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
	return (
		<div className="flex rounded-lg border border-gray-200 bg-white shadow-sm">
			<div className="relative h-72 w-52">
				<Image src={product.image} alt={product.title} layout="fill" objectFit="center" />
			</div>
			<div className="w-2/3 p-4">
				<h1 className="text-lg font-semibold">{product.title}</h1>
				<div className="text-gray-500">{product.longDescription}</div>
				<div className="text-lg font-semibold">{formatMoney(product.price)}</div>
				<div className="text-lg font-semibold">{product.rating.rate}</div>
				<div className="text-gray-500">{product.category}</div>
			</div>
		</div>
	);
};
