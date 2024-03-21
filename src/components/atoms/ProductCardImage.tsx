import Image from "next/image";
import { type FC } from "react";

type ProductCardImageProps = {
	image: string;
	title: string;
};

export const ProductCardImage: FC<ProductCardImageProps> = ({ image, title }) => {
	return (
		<div className="grid items-start gap-3 md:grid-cols-5">
			<div className="md:col-span-5">
				<Image
					alt={title}
					src={image}
					height={900}
					width={600}
					className="aspect-[2/3] w-full overflow-hidden rounded-lg border border-gray-200 object-cover dark:border-gray-800"
				/>
			</div>
		</div>
	);
};
