import PropTypes from "prop-types";

export default function MobileCard({ drag, drop, onClick, name, handleEdit }) {
  return <section></section>;
}

MobileCard.propTypes = {
  drag: PropTypes.func,
  drop: PropTypes.func,
  onClick: PropTypes.func,
  name: PropTypes.string,
  handleEdit: PropTypes.func
};
