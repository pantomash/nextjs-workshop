import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/atoms/Footer";
import { Navbar } from "@/components/atoms/Navbar";
import { getCategories } from "@/api/categories";

export const metadata: Metadata = {
	title: "Acme Marketplace",
	description: "New fancy marketplace site",
};

export default async function RootLayout({
	children,
	modal,
}: Readonly<{
	children: React.ReactNode;
	modal: React.ReactNode;
}>) {
	const categories = await getCategories();

	return (
		<html lang="pl">
			<body>
				<Navbar categories={categories} />
				<section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
					{children}
				</section>
				<Footer />
				{modal}
			</body>
		</html>
	);
}
