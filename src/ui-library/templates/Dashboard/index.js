import { Fragment } from "react";
import PropTypes from "prop-types";
import { Typography, Divider } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { DndProvider } from "react-dnd-multi-backend";
import { HTML5toTouch } from "./config/dnd";

import { FormDialog } from "../../";
import EntityPartCategoryItem from "./components/EntityPartCategoryItem";
import AddNewItemCard from "./components/AddNewItemCard";

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
  dashboardTitle,
  onTransactionPerform
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
  const isMobile = useMediaQuery("(max-width:768px)");
  const cardClasses = useEntityPartCategoryItemStyles();
  return (
    <DndProvider options={HTML5toTouch}>
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
                      isMobile={isMobile}
                      onTransactionPerform={onTransactionPerform}
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
                      additionalActionsContent={isMobile ? "Delete" : null}
                    />
                  </Fragment>
                );
              })}
              <AddNewItemCard
                isMobile={isMobile}
                cardClasses={cardClasses}
                onAddButtonClick={() => handleCreateModalOpen(entityPart.name)}
              />
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
  dashboardTitle: PropTypes.string,
  onTransactionPerform: PropTypes.func
};
