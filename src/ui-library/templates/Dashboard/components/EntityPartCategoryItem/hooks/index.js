import { useState } from "react";
import { useDrag, useDrop } from "react-dnd";

import { allIconsMap } from "../../../../../molecules/IconSelector";
import { useTranslation } from "../../../../../../i18n";

export default function useEntityPartCategoryItem({
  onDelete,
  onEdit,
  dragItemType,
  acceptDropItemTypes,
  icon,
  _id,
  onTransactionPerform
}) {
  const Icon = allIconsMap[icon].Icon;
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleDelete = () => {
    onDelete();
    handleClose();
  };
  const handleEdit = () => {
    onEdit();
    handleClose();
  };
  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: dragItemType, _id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  });

  function performTransaction(draggableItem) {
    onTransactionPerform &&
      onTransactionPerform({
        from: draggableItem,
        to: { type: dragItemType, _id }
      });
  }

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: acceptDropItemTypes,
    drop: performTransaction,
    canDrop: (draggableItem) => {
      if (draggableItem._id !== _id) {
        return true;
      } else {
        return false;
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop()
    })
  });
  return {
    t,
    open,
    handleOpen,
    handleClose,
    handleDelete,
    handleEdit,
    Icon,
    isDragging,
    drag,
    drop,
    isOver,
    canDrop,
    preview
  };
}
