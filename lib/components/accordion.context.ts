import { createContext } from "react";
import { AccordionType } from "./accordion.type";

interface ContextProps {
  variant: AccordionType;
  openingItems: string[];
  toggleItem: (key: string) => void;
}

export const AccordionContext = createContext<ContextProps>({
  variant: "light",
  openingItems: [],
  toggleItem: () => {},
});