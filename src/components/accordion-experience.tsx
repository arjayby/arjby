import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import type { Experiences } from "@/lib/types";

interface AccordionExperienceProps {
  experiences: Experiences;
}

export default function AccordionExperience({
  experiences,
}: AccordionExperienceProps) {
  return (
    <Accordion
      type="multiple"
      className="w-full"
      defaultValue={experiences.map((_, index) => String(index))}
    >
      {experiences.map((experience, index) => (
        <AccordionItem key={experience.company} value={String(index)}>
          <AccordionTrigger>{experience.company}</AccordionTrigger>
          <AccordionContent>
            <div className="flex items-center gap-2">
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                {experience.role}
              </code>
              <p className="text-sm text-muted-foreground">
                {experience.yearStarted} - {experience.yearEnded}
              </p>
            </div>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              {experience.responsibilities.map((responsibility) => (
                <li key={responsibility}>{responsibility}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
