"use client";

import { type UrlObject } from "url";
import { type FC } from "react";

import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import clsx from "clsx";

type ActiveLinkProps = {
	href: string;
	label: string;
};

export const ActiveLink: FC<ActiveLinkProps> = ({ href, label }) => {
	const pathName = usePathname();
	const segment = useSelectedLayoutSegment();

	const matchActiveLink = () => {
		if (pathName.split("/").length > 3) {
			return pathName.split("/")[2] === href.split("/")[2];
		} else {
			return `/${segment || ""}` === href;
		}
	};
	const ariaCurrent = matchActiveLink() ? "true" : undefined;
	const urlObject: UrlObject = typeof href === "string" ? { pathname: href } : href;

	return (
		<Link
			href={urlObject}
			aria-current={ariaCurrent}
			className={clsx(`text-gray-500 hover:text-gray-900`, {
				underline: matchActiveLink(),
			})}
		>
			{label}
		</Link>
	);
};
