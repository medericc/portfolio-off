import { Section } from "./Section";
import { CustomIcons } from "./icons/CustomIcons";
import { buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="sticky top-0 py-4">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold text-primary-foreground">
          médéric.com
        </h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <Link
            href="https://github.com/medericc"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <CustomIcons name="github" size={12} className="mr-0 text-foreground" />
          </Link>
          <Link
            href="https://www.linkedin.com"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <CustomIcons name="linkedin" size={12} className="mr-0 text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  );
};
