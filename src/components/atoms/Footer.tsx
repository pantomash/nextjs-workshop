import Link from "next/link";

export const Footer = () => {
	return (
		<footer className="flex h-14 items-center border-t px-4">
			<p className="text-sm text-gray-500">
				© {new Date().getFullYear()} Acme Inc. All rights reserved.
			</p>
			<div className="ml-auto flex items-center gap-4">
				<Link className="text-sm font-medium" href="#">
					Terms & Conditions
				</Link>
				<Link className="text-sm font-medium" href="#">
					Privacy Policy
				</Link>
			</div>
		</footer>
	);
};
