import PropTypes from "prop-types";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

import { AddButton } from "../../../../";

export default function AddNewItemCard({
  isMobile,
  cardClasses,
  onAddButtonClick
}) {
  if (isMobile) {
    return (
      <AddButton
        onClick={onAddButtonClick}
        className={cardClasses.actionIcon}
      />
    );
  }
  return (
    <Card className={cardClasses.root} variant="outlined">
      <CardHeader
        className={cardClasses.cardHeader}
        title={<Skeleton variant="text" className={cardClasses.textHeader} />}
        action={<Skeleton width={56} height={56} variant="circle" />}
      />
      <CardContent className={cardClasses.cardContent}>
        <AddButton
          onClick={onAddButtonClick}
          className={cardClasses.actionIcon}
        />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
      </CardContent>
    </Card>
  );
}

AddNewItemCard.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  cardClasses: PropTypes.shape({
    actionIcon: PropTypes.string,
    cardContent: PropTypes.string,
    root: PropTypes.string,
    textHeader: PropTypes.string,
    cardHeader: PropTypes.string
  }).isRequired,
  onAddButtonClick: PropTypes.func.isRequired
};
