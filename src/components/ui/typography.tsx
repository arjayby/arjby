import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

const typographyVariants = cva("text-foreground", {
	variants: {
		variant: {
			h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
			h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
			h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
			h4: "scroll-m-20 text-xl font-semibold tracking-tight",
			p: "leading-7 [&:not(:first-child)]:mt-6",
			blockquote: "mt-6 border-l-2 pl-6 italic",
			code: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
			lead: "text-xl text-muted-foreground",
			large: "text-lg font-semibold",
			small: "text-sm font-medium leading-none",
			muted: "text-sm text-muted-foreground"
		}
	},
	defaultVariants: {
		variant: "p"
	}
});

type VariantPropType = VariantProps<typeof typographyVariants>;

const variantElementMap: Record<
	NonNullable<VariantPropType["variant"]>,
	string
> = {
	h1: "h1",
	h2: "h2",
	h3: "h3",
	h4: "h4",
	p: "p",
	blockquote: "blockquote",
	code: "code",
	large: "div",
	small: "small",
	lead: "p",
	muted: "p"
};

export interface TypographyProps
	extends React.HTMLAttributes<HTMLElement>,
		VariantProps<typeof typographyVariants> {
	asChild?: boolean;
	as?: string;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
	({ className, variant, as, asChild, ...props }, ref) => {
		const Comp = asChild
			? Slot
			: as ?? (variant ? variantElementMap[variant] : undefined) ?? "div";
		return (
			<Comp
				className={cn(typographyVariants({ variant, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);

Typography.displayName = "Typography";

export { Typography, typographyVariants };
