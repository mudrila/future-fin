import PropTypes from "prop-types";
import { usePreview } from "react-dnd-preview";
import { DragPreviewImage } from "react-dnd";

export default function DragPreview({ isMobile, preview }) {
  const { display, style } = usePreview();
  if (!display) {
    return null;
  }
  if (isMobile) {
    return <img src="/static/assets/coin.png" style={style} />;
  }
  return <DragPreviewImage connect={preview} src="/static/assets/coin.png" />;
}

DragPreview.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  preview: PropTypes.any.isRequired
};
