"use client";

import { useRouter } from "next/navigation";
import { type FC } from "react";

type ProductListFilterProps = {
	currentPage: number;
};

export const ProductListFilter: FC<ProductListFilterProps> = ({ currentPage }) => {
	const router = useRouter();

	const handleChangeValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
		router.push(`/products/${currentPage}?sort=${event.target.value}`);
	};

	return (
		<>
			<select onChange={handleChangeValue}>
				<option>none</option>
				<option data-testid="sort-by-price" value="price_ASC">
					price asc
				</option>
				<option data-testid="sort-by-price" value="price_DESC">
					price desc
				</option>
				<option data-testid="sort-by-rating" value="rating_ASC">
					rating asc
				</option>
				<option data-testid="sort-by-rating" value="rating_DESC">
					rating desc
				</option>
			</select>
			{/* <Select onValueChange={handleChangeValue}>
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
			</Select> */}
		</>
	);
};
