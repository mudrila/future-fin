import { useState } from "react";

export default function useFinHealthIndicator() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState();

  function handleOpen(newModalContent) {
    setModalOpen(true);
    setModalContent(newModalContent);
  }
  function handleClose() {
    setModalOpen(false);
  }
  return {
    modalOpen,
    modalContent,
    handleOpen,
    handleClose
  };
}
