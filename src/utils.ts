import { type PaginatedRoutes } from "@/types/pagination";

export const formatMoney = (amount: number) => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(amount);
};

export const createPaginatedPageUrl = (route: PaginatedRoutes, pageNumber: number) => {
	return `${route}/${pageNumber}`;
};
