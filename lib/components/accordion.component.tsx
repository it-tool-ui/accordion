import clsx from "clsx";
import { useState } from "react";
import type { AccordionProps } from "./accordion.type";
import { AccordionContext } from "./accordion.context";

const Accordion: React.FC<AccordionProps> = ({
  variant = "light",
  selectMode = "single",
  className,
  children,
}) => {
  const [openingItems, setOpeningItems] = useState<string[]>([]);

  const toggleItem = (key: string) => {
    if (selectMode === "single") {
      if (openingItems.includes(key)) setOpeningItems([]);
      else setOpeningItems([key]);
    } else {
      if (openingItems.includes(key))
        setOpeningItems(openingItems.filter((item) => item !== key));
      else setOpeningItems([...openingItems, key]);
    }
  };

  return (
    <AccordionContext.Provider value={{ variant, openingItems, toggleItem }}>
      <div
        className={clsx(
          {
            "rounded-lg border border-neutral-200 px-4 py-2 shadow-sm":
              variant === "bordered",
            "grid grid-cols-1 gap-2": variant === "splitted",
          },
          className
        )}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

Accordion.displayName = "Accordion";

export default Accordion;
