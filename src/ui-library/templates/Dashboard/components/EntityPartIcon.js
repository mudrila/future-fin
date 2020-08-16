import PropTypes from "prop-types";

import { allIconsMap } from "../../../molecules/IconSelector";

export default function EntityPartIcon({
  expectedAmount,
  amount = 0,
  frequency,
  icon,
  name,
  currency
}) {
  const Icon = allIconsMap[icon].Icon;
  return (
    <section>
      {name}
      <Icon />
      {amount}
      {currency} / {frequency} <br />
      {expectedAmount}
    </section>
  );
}

EntityPartIcon.propTypes = {
  expectedAmount: PropTypes.number.isRequired,
  amount: PropTypes.number,
  frequency: PropTypes.string,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  frequency: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired
};
