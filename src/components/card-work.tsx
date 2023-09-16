import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import type { Work } from "@/types";

interface CardWorkProps {
  work: Work;
}

export default function CardWork({ work }: CardWorkProps) {
  return (
    <Card>
      <CardHeader className="pb-0">
        <CardTitle>{work.title}</CardTitle>
        <CardDescription className="py-2">{work.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <a
          className={cn(buttonVariants({ variant: "link" }) + " p-0")}
          href={work.link.url}
          target="_blank"
        >
          {work.link.name}
        </a>
        <Separator className="mt-2" />
      </CardContent>
      <CardFooter>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          {work.technologies.map((technology, index) => (
            <div key={technology} className="flex h-5 flex-row gap-4">
              <div>{technology}</div>
              {index !== work.technologies.length - 1 && (
                <Separator orientation="vertical" />
              )}
            </div>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
