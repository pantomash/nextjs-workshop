"use client";

import { type UrlObject } from "url";
import { type FC } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type ActiveLinkProps = {
	href: string;
	label: string;
};

export const ActiveLink: FC<ActiveLinkProps> = ({ href, label }) => {
	const pathName = usePathname();
	const isActive = pathName === href;
	const ariaCurrent = isActive ? "page" : undefined;
	const urlObject: UrlObject = typeof href === "string" ? { pathname: href } : href;
	return (
		<Link
			href={urlObject}
			aria-current={ariaCurrent}
			className={clsx(`text-gray-500 hover:text-gray-900`, {
				underline: isActive,
			})}
		>
			{label}
		</Link>
	);
};
