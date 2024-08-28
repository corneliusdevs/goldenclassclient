import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import React from "react";

interface HoverCardComponentProps {
  triggerComponent: React.ReactNode;
}

const HoverCardComponent = ({ triggerComponent }: HoverCardComponentProps) => {
  return (
    <div>
      <HoverCard>
        <HoverCardTrigger>{triggerComponent}</HoverCardTrigger>
        <HoverCardContent>
          <div>Sort by Price(asc)</div>
          <div>Sort by Price(desc)</div>
          <div>Sort by Price(custom)</div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default HoverCardComponent;
