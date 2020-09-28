import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";

import { TouchTransition, MouseTransition } from "dnd-multi-backend";

export const ItemTypes = {
  INCOME: "income",
  ACCOUNT: "account",
  SPENDING: "spending"
};

export const HTML5toTouch = {
  backends: [
    {
      backend: HTML5Backend,
      transition: MouseTransition
    },
    {
      backend: TouchBackend,
      options: { enableMouseEvents: true },
      preview: true,
      transition: TouchTransition
    }
  ]
};
