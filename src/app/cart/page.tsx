import { redirect } from "next/navigation";
import { getCartFromCookies } from "@/api/cart";
import { TableBody, TableHead, TableHeader, TableRow, Table } from "@/components/ui/table";
import { IncrementProductQuantity } from "@/app/cart/IncrementProductQuantity";
import { RemoveButton } from "@/app/cart/RemoveButton";

export default async function CartPage() {
	const cart = (await getCartFromCookies())?.cart;
	if (!cart) redirect("/");
	console.log(cart, "cart");
	return (
		<div>
			<h1>Cart</h1>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Name</TableHead>
						<TableHead>Quantity</TableHead>
						<TableHead>Price</TableHead>
						<TableHead></TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{cart?.items.map((item, length) => (
						<TableRow key={`table-row-${length}`}>
							<TableHead>{item.product?.name}</TableHead>
							<TableHead>
								<IncrementProductQuantity itemId={item.id} quantity={item.quantity} />
							</TableHead>
							<TableHead>{item.totalPrice}</TableHead>
							<TableHead>
								<RemoveButton itemId={item.id} />
							</TableHead>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
