"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const SHEET_SIDES = ["top", "right", "bottom", "left"] as const;

interface SlideInMenuProps {
  direction?: "left" | "right" | "bottom" | "left";
  triggerComponent: React.ReactNode;
  title?: string;
  description?: string;
  mainContentComponent?: React.ReactNode;
  footerComponent?: React.ReactNode;
  closeTriggerComponent?: React.ReactNode;
}

const SlideInMenu = ({
  direction,
  triggerComponent,
  title,
  description,
  mainContentComponent,
  footerComponent,
  closeTriggerComponent,
}: SlideInMenuProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{triggerComponent}</SheetTrigger>
      <SheetContent side={direction ? direction : "left"}>
        <SheetHeader>
          {title && <SheetTitle>{title}</SheetTitle>}
          {description && <SheetDescription>{description}</SheetDescription>}
        </SheetHeader>
          {
            mainContentComponent && mainContentComponent
          }
        <SheetFooter>
          {footerComponent && footerComponent}
          {closeTriggerComponent && (
            <SheetClose asChild>{closeTriggerComponent}</SheetClose>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default SlideInMenu;
