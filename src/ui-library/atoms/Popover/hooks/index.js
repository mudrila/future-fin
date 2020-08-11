import { useState } from "react";

export function useHoverablePopover() {
  const [popoverAnchorEl, setAnchorEl] = useState(null);
  const popoverOpen = Boolean(popoverAnchorEl);
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  return {
    popoverAnchorEl,
    handlePopoverOpen,
    handlePopoverClose,
    popoverOpen
  };
}
