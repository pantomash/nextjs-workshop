import { type FC } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { v4 } from "uuid";
import { SubmitReviewButton } from "@/components/atoms/SubmitReviewButton";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { type Review } from "@/types/reviews";
import { addReviewAction } from "@/api/review";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";

const FormSchema = z.object({
	headline: z.string(),
	name: z.string(),
	content: z.string().min(10).max(600),
	rating: z.string(),
});

type ReviewFormProps = {
	handleOptimisticReview: (newReview: Review) => void;
	productId: string;
	productSlug: string;
};

export const ReviewForm: FC<ReviewFormProps> = ({ handleOptimisticReview, productId }) => {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			content: "",
			headline: "",
			name: "",
			rating: "",
		},
	});

	const handleSubmit = async (values: z.infer<typeof FormSchema>) => {
		handleOptimisticReview({
			id: v4(),
			author: values.name,
			description: values.content,
			rating: parseInt(values.rating),
			title: values.headline,
		});

		await addReviewAction({
			author: values.name,
			description: values.content,
			rating: parseInt(values.rating),
			title: values.headline,
			productId: productId,
		});
	};

	return (
		<Form {...form}>
			<form
				data-testid="add-review-form"
				className="mb-4 space-y-4"
				onSubmit={form.handleSubmit(handleSubmit)}
			>
				<h2 className="text-lg font-semibold">Add a review</h2>
				<div className="space-y-4">
					<div className="space-y-2">
						<FormField
							control={form.control}
							name="headline"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Title</FormLabel>
									<FormControl>
										<Input {...field} placeholder="Enter review title" />
									</FormControl>
								</FormItem>
							)}
						/>
					</div>
					<div className="space-y-2">
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Author</FormLabel>
									<FormControl>
										<Input {...field} placeholder="Enter your name" />
									</FormControl>
								</FormItem>
							)}
						/>
					</div>
					<div className="space-y-2">
						<FormField
							control={form.control}
							name="content"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Description</FormLabel>
									<FormControl>
										<Textarea
											className="min-h-[100px] resize-none"
											{...field}
											placeholder="Enter your review"
										/>
									</FormControl>
								</FormItem>
							)}
						/>
					</div>
					<div className="space-y-2">
						<Input type="email" name="email" />
					</div>
					<div className="space-y-2">
						<FormField
							control={form.control}
							name="rating"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Rating</FormLabel>
									<Select name="rating" onValueChange={field.onChange} defaultValue="field.value">
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select a rating" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectItem value="5">5 - Excellent</SelectItem>
											<SelectItem value="4">4 - Good</SelectItem>
											<SelectItem value="3">3 - Average</SelectItem>
											<SelectItem value="2">2 - Not great</SelectItem>
											<SelectItem value="1">1 - Terrible</SelectItem>
										</SelectContent>
									</Select>
								</FormItem>
							)}
						/>
					</div>
				</div>
				<div className="flex space-x-4">
					<SubmitReviewButton />
				</div>
			</form>
		</Form>
	);
};
