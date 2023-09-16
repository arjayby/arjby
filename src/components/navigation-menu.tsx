import { scroller } from "react-scroll";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Menu } from "lucide-react";

interface NavigationMenuProps {
  menus: string[];
}

export default function NavigationMenu({ menus }: NavigationMenuProps) {
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
      <div className="block pt-2 md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {menus.map((menu) => (
              <DropdownMenuItem
                key={menu}
                className="cursor-pointer p-2 font-medium"
                onClick={scrollTo(menu)}
              >
                {menu}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
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
