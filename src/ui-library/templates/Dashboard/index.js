import { Fragment } from "react";
import PropTypes from "prop-types";
import {
  Typography,
  Divider,
  Card,
  CardHeader,
  CardContent
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

import { capitalizeString } from "../../utils";
import { AddButton, FormDialog } from "../../";
import EntityPartCategoryItem from "./components/EntityPartCategoryItem";

import useEntityPartCategoryItemStyles from "./components/EntityPartCategoryItem/styles";
import useStyles from "./styles";
import useDashboard from "./hooks";

export default function Dashboard({
  entityName,
  entityParts,
  formsConfig,
  onSubmit,
  normalizeFormData = false,
  onDelete,
  onEdit
}) {
  const {
    modalsState,
    handleModalOpen,
    handleModalClose,
    handleSubmit,
    handleDeleteCategory,
    handleEdit
  } = useDashboard({
    formsConfig,
    onSubmit,
    normalizeFormData,
    onDelete,
    onEdit
  });
  const classes = useStyles();
  const cardClasses = useEntityPartCategoryItemStyles();
  return (
    <section className={classes.root}>
      <Typography variant="h4" className={classes.heading} align="center">
        {capitalizeString(entityName)} Dashboard
      </Typography>
      <Divider className={classes.divider} />
      {entityParts.map((entityPart) => (
        <Fragment key={entityPart.name}>
          <section className={classes.section}>
            <Typography variant="h5" className={classes.heading} align="center">
              {capitalizeString(entityPart.name)}
            </Typography>
            {entityPart.items.map((item) => {
              return (
                <EntityPartCategoryItem
                  key={item.id}
                  {...item}
                  onDelete={() =>
                    handleDeleteCategory({
                      entityPartName: entityPart.name,
                      item
                    })
                  }
                  onEdit={() =>
                    handleEdit({ entityPartName: entityPart.name, item })
                  }
                />
              );
            })}
            <Card className={cardClasses.root} variant="outlined">
              <CardHeader
                className={cardClasses.cardHeader}
                title={
                  <Skeleton variant="text" className={cardClasses.textHeader} />
                }
                action={<Skeleton width={56} height={56} variant="circle" />}
              />
              <CardContent className={cardClasses.cardContent}>
                <AddButton
                  onClick={() => handleModalOpen(entityPart.name)}
                  className={cardClasses.actionIcon}
                />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
              </CardContent>
            </Card>
            <FormDialog
              formProps={formsConfig[entityPart.name]}
              open={modalsState[entityPart.name].isModalOpen}
              onClose={() => handleModalClose(entityPart.name)}
              onSubmit={(formValues) =>
                handleSubmit(entityPart.name, formValues)
              }
              title={`Create new ${entityPart.modalTitle}`}
              sectionsSplitting={true}
            />
          </section>
          <Divider className={classes.divider} />
        </Fragment>
      ))}
    </section>
  );
}

Dashboard.propTypes = {
  entityName: PropTypes.string.isRequired,
  entityParts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  formsConfig: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  normalizeFormData: PropTypes.bool,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
};
