"use client";

import { useRouter } from "next/navigation";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export const ProductListFilter = () => {
	const router = useRouter();

	const handleChangeValue = (value: string) => {
		router.push(`/products?sort=${value}`);
	};

	return (
		<Select onValueChange={handleChangeValue}>
			<SelectTrigger className="w-[120px]">
				<SelectValue placeholder="Sort by" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem data-testid="sort-by-price" value="price_ASC">
					price asc
				</SelectItem>
				<SelectItem data-testid="sort-by-price" value="price_DESC">
					price desc
				</SelectItem>
				<SelectItem data-testid="sort-by-rating" value="rating_ASC">
					rating asc
				</SelectItem>
				<SelectItem data-testid="sort-by-rating" value="rating_DESC">
					rating desc
				</SelectItem>
			</SelectContent>
		</Select>
	);
};
