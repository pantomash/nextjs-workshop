import { redirect } from "next/navigation";

export default function CategoriesPage({ params }: { params: { slug: string } }) {
	redirect(`/categories/${params.slug}/1`);
}
