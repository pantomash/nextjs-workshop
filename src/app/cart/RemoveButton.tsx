"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { removeCartItem } from "@/app/cart/actions";

export const RemoveButton = ({ itemId }: { itemId: string }) => {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();

	return (
		<Button
			disabled={isPending}
			onClick={() => {
				startTransition(async () => {
					await removeCartItem(itemId);
					router.refresh();
				});
			}}
		>
			Remove
		</Button>
	);
};
