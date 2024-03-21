import { type FC } from "react";
import Link from "next/link";
import { ActiveLink } from "@/components/atoms/ActiveLink";
import { SearchInput } from "@/components/atoms/SearchInput";
import { BasketIcon } from "@/components/svgIcons/basket";
import { getCartFromCookies } from "@/api/cart";

type NavbarProps = {
	categories: { id: string; name: string; slug: string }[];
};

export const Navbar: FC<NavbarProps> = async ({ categories }) => {
	const cart = await getCartFromCookies();
	const quantity = cart?.cart?.items.length ?? 0;

	return (
		<header className="flex h-14 items-center border-b px-4">
			<nav className=" flex items-center gap-4 text-sm font-medium">
				<ActiveLink label="Home" href="/" />
				<ActiveLink label="All" href="/products" />
				{categories.map((category) => (
					<ActiveLink
						key={category.id}
						label={category.name}
						href={`/categories/${category.slug}`}
					/>
				))}
			</nav>
			<div className="ml-auto flex items-center gap-2 text-sm font-semibold">
				<SearchInput />
				<Link href="/cart">
					<div className="flex flex-row">
						<BasketIcon />
						<span className="ml-2 self-center text-sm font-medium">{quantity}</span>
						<span className="sr-only">Acme Inc</span>
					</div>
				</Link>
			</div>
		</header>
	);
};
