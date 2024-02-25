import { ActiveLink } from "@/components/atoms/ActiveLink";
import { BasketIcon } from "@/components/svgIcons/basket";
import Link from "next/link";

export const Navbar = () => {
	return (
		<header className="flex h-14 items-center border-b px-4">
			<nav className=" flex items-center gap-4 text-sm font-medium">
				<ActiveLink label="Home" href="/" />
				<ActiveLink label="All" href="/products" />
			</nav>
			<Link className="ml-auto flex items-center gap-2 text-sm font-semibold" href="#">
				<BasketIcon />
				<span className="sr-only">Acme Inc</span>
			</Link>
		</header>
	);
};
