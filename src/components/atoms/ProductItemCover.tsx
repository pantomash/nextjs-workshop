type ProductItemCoverProps = {
	src: string;
	alt: string;
};

export const ProductItemCover = (props: ProductItemCoverProps) => {
	const { src, alt } = props;
	return (
		<div className="aspect-square overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100">
			<img
				className="h-full w-full object-center p-4 transition-transform hover:scale-105"
				width={320}
				height={320}
				src={src}
				alt={alt}
			/>
		</div>
	);
};
