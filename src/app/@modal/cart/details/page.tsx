import Link from "next/link";
import { getCartFromCookies } from "@/api/cart";
import { Overlay } from "@/app/@modal/cart/details/Overlay";
import { Button } from "@/components/ui/button";

export default async function CartModalPage() {
	const cart = await getCartFromCookies();
	return (
		<section>
			<Overlay />
			<div className="absolute right-0 top-0 z-40 h-screen w-full max-w-sm bg-white">
				<div className="flex flex-col gap-y-4">
					<ul>{cart?.cart?.items.map((item) => <li key={item.id}>{item.product?.name}</li>)}</ul>
					<Link href="/cart">
						<Button>To Full Cart</Button>
					</Link>
				</div>
			</div>
		</section>
	);
}
