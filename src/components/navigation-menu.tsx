import { scroller } from "react-scroll";

import { Button } from "@/components/ui/button";
import { type LucideIcon, Briefcase, Mail, Hammer } from "lucide-react";

import type { menus } from "@/lib/data";

interface NavigationMenuProps {
  menus: typeof menus;
}

export default function NavigationMenu({ menus }: NavigationMenuProps) {
  const menusWithIcons: Record<
    (typeof menus)[number],
    React.ReactElement<LucideIcon>
  > = {
    Works: <Hammer />,
    Experience: <Briefcase />,
    Contact: <Mail />,
  };

  const scrollTo = (element: string) => () => {
    scroller.scrollTo(element, {
      duration: 400,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -120,
    });
  };

  return (
    <div className="flex items-center">
      <div className="ml-[-1rem] block pt-2 md:hidden">
        {menus.map((menu) => (
          <Button
            key={menu}
            variant="ghost"
            onClick={scrollTo(menu)}
            className="p-2"
            aria-label={menu}
          >
            {menusWithIcons[menu]}
          </Button>
        ))}
      </div>
      <div className="hidden gap-1 md:block">
        {menus.map((menu) => (
          <Button key={menu} variant="ghost" onClick={scrollTo(menu)}>
            {menu}
          </Button>
        ))}
      </div>
    </div>
  );
}
