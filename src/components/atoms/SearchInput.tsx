"use client";

import { type FC, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";

export const SearchInput: FC = () => {
	const [inputValue, setValue] = useState("");
	const router = useRouter();

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.currentTarget.value);
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			if (inputValue !== "") {
				router.push(`/search?query=${inputValue}`);
			}
		}, 500);

		return () => clearTimeout(timer);
	}, [inputValue, router]);

	return (
		<div>
			<Input type="search" placeholder="Search" onChange={handleInputChange} />
		</div>
	);
};
