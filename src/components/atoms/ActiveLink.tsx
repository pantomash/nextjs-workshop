"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import clsx from "clsx";
import { Route } from "next";

type ActiveLinkProps = {
	href: Route;
	label: string;
};

export const ActiveLink: FC<ActiveLinkProps> = ({ href, label }) => {
	const pathName = usePathname();
	const isActive = pathName === href;
	const ariaCurrent = isActive ? "page" : undefined;
	return (
		<Link
			href={href}
			aria-current={ariaCurrent}
			className={clsx(`text-blue-400 hover:text-blue-600`, {
				underline: isActive,
			})}
		>
			{label}
		</Link>
	);
};
