import { useState } from "react";

export default function useFormDialog({
  onOpen,
  onClose,
  initiallyOpened = false,
  onSubmit
}) {
  const [open, setOpen] = useState(initiallyOpened);

  function handleOpen() {
    setOpen(true);
    onOpen();
  }

  function handleClose() {
    setOpen(false);
    onClose();
  }

  function handleSubmit() {
    onSubmit();
    handleClose();
  }

  return {
    open,
    handleOpen,
    handleClose,
    handleSubmit
  };
}
