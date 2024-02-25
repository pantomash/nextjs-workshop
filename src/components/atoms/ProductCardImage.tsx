import { FC } from "react";

type ProductCardImageProps = {
	image: string;
	title: string;
};

export const ProductCardImage: FC<ProductCardImageProps> = ({ image, title }) => {
	return (
		<div className="grid items-start gap-3 md:grid-cols-5">
			<div className="md:col-span-5">
				<img
					alt={title}
					className="aspect-[2/3] w-full overflow-hidden rounded-lg border border-gray-200 object-cover dark:border-gray-800"
					height={900}
					src={image}
					width={600}
				/>
			</div>
		</div>
	);
};
