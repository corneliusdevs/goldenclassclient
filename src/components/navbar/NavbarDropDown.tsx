import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
import Link from "next/link";
  
  export type MenuOptions = {
    text: string;
    clickHandler?: Function;
    link:string;
  }[];
  
  interface NavbarDropdownProps {
    triggerComponent: React.ReactNode;
    menuOptions: MenuOptions;
  }
  
  const NavbarDropdown = ({
    triggerComponent,
    menuOptions,
  }: NavbarDropdownProps) => {
    return (
      <div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="max-h-[50px]">{triggerComponent}</AccordionTrigger>
            <AccordionContent>
              {menuOptions.map((option, index) => {
                return (
                  <div
                    key={index + option.text}
                    onClick={() => {
                      // if a click handler is defined, execute it onClick.
                      option?.clickHandler && option.clickHandler();
                    }}
  
                    className="w-full flex items-center justify-center hover:cursor-pointer hover:border py-1"
                  >
                    <Link href={option.link}>
                    <span className="">{option.text}</span>
                    </Link>
                  </div>
                );
              })}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  };
  
  export default NavbarDropdown;
  