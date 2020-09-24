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
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

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
  onEdit,
  childrenPositioning,
  children,
  subHeader,
  dashboardTitle
}) {
  const {
    createModalsState,
    editModalsState,
    handleCreateModalClose,
    handleCreateModalOpen,
    handleSubmit,
    handleDeleteCategory,
    handleEdit,
    handleEditModalClose,
    handleEditModalOpen,
    mapEntityToEditFormProps,
    t
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
    <DndProvider backend={HTML5Backend}>
      <section className={classes.root}>
        <Typography variant="h4" className={classes.heading} align="center">
          {dashboardTitle}
        </Typography>
        {subHeader}
        <Divider className={classes.divider} />
        {childrenPositioning === "top" && (
          <Fragment>
            {children}
            <Divider className={classes.divider} />
          </Fragment>
        )}
        {entityParts.map((entityPart) => (
          <Fragment key={entityPart.name}>
            <section className={classes.section}>
              <Typography
                variant="h5"
                className={classes.heading}
                align="center"
              >
                {entityPart.dashboardSectionTitle}
              </Typography>
              {entityPart.items.map((item) => {
                return (
                  <Fragment key={item._id}>
                    <EntityPartCategoryItem
                      {...item}
                      dragItemType={entityPart.dragItemType}
                      acceptDropItemTypes={entityPart.acceptDropItemTypes}
                      onDelete={() =>
                        handleDeleteCategory({
                          entityPartName: entityPart.name,
                          item
                        })
                      }
                      onEdit={() =>
                        handleEditModalOpen({
                          entityPartName: entityPart.name,
                          item
                        })
                      }
                    />
                    <FormDialog
                      formProps={mapEntityToEditFormProps({
                        entityPartName: entityPart.name,
                        item
                      })}
                      open={editModalsState[item._id]?.isModalOpen}
                      onClose={() => handleEditModalClose(item)}
                      onSubmit={(formValues) =>
                        handleEdit({
                          entityPartName: entityPart.name,
                          item: formValues
                        })
                      }
                      title={t(`${entityName}:form.editTitle`, {
                        itemName: item.name
                      })}
                      sectionsSplitting={true}
                    />
                  </Fragment>
                );
              })}
              <Card className={cardClasses.root} variant="outlined">
                <CardHeader
                  className={cardClasses.cardHeader}
                  title={
                    <Skeleton
                      variant="text"
                      className={cardClasses.textHeader}
                    />
                  }
                  action={<Skeleton width={56} height={56} variant="circle" />}
                />
                <CardContent className={cardClasses.cardContent}>
                  <AddButton
                    onClick={() => handleCreateModalOpen(entityPart.name)}
                    className={cardClasses.actionIcon}
                  />
                  <Skeleton variant="text" />
                  <Skeleton variant="text" />
                </CardContent>
              </Card>
              <FormDialog
                formProps={formsConfig[entityPart.name]}
                open={createModalsState[entityPart.name].isModalOpen}
                onClose={() => handleCreateModalClose(entityPart.name)}
                onSubmit={(formValues) =>
                  handleSubmit(entityPart.name, formValues)
                }
                title={entityPart.modalTitle}
                sectionsSplitting={true}
              />
            </section>
            <Divider className={classes.divider} />
          </Fragment>
        ))}
      </section>
    </DndProvider>
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
  onEdit: PropTypes.func.isRequired,
  childrenPositioning: PropTypes.oneOf(["top", "bottom"]),
  children: PropTypes.node,
  subHeader: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  dashboardTitle: PropTypes.string
};
