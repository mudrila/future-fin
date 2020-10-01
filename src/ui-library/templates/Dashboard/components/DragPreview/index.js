import PropTypes from "prop-types";
import { usePreview } from "react-dnd-preview";
import { DragPreviewImage } from "react-dnd";

export default function DragPreview({ isMobile, preview }) {
  const { display, style } = usePreview();
  if (isMobile && display) {
    return (
      <div style={style}>
        <img src="/static/assets/coin.png" />
      </div>
    );
  }
  return <DragPreviewImage connect={preview} src="/static/assets/coin.png" />;
}

DragPreview.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  preview: PropTypes.func.isRequired
};
