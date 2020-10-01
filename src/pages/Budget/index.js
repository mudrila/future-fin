import { Fragment } from "react";
import { Grid, Typography } from "@material-ui/core";

import { Dashboard } from "../../ui-library";
import TransactionModal from "./components/TransactionModal";
import useBudgetDashboard from "./hooks";
import useStyles from "./styles";

function BudgetDashboard() {
  const classes = useStyles();
  const {
    handleSubmit,
    handleEdit,
    handleDelete,
    entityName,
    entityParts,
    formsConfig,
    totalIncome,
    currentBalance,
    totalSpendings,
    t,
    defaultCurrency,
    openTransactionModal,
    handleTransactionModalClose,
    handleTransactionModalSubmit,
    transactionModalOpen,
    transactionInitialData
  } = useBudgetDashboard();

  return (
    <Fragment>
      <TransactionModal
        open={transactionModalOpen}
        onClose={handleTransactionModalClose}
        onSubmit={handleTransactionModalSubmit}
        fromValue={transactionInitialData.fromValue}
        toValue={transactionInitialData.toValue}
        fromOptions={transactionInitialData.fromOptions}
        toOptions={transactionInitialData.toOptions}
      />
      <Dashboard
        entityName={entityName}
        entityParts={entityParts}
        formsConfig={formsConfig}
        onSubmit={handleSubmit}
        normalizeFormData={true}
        onEdit={handleEdit}
        onDelete={handleDelete}
        dashboardTitle={t("budget:dashboardTitle")}
        onTransactionPerform={openTransactionModal}
        subHeader={
          <Grid container justify="center">
            <Grid
              container
              item
              xs={4}
              md={1}
              className={classes.subHeadingItem}
            >
              <Typography>{t("budget:totalIncome")}</Typography>
              <Typography>
                {totalIncome} {defaultCurrency}
              </Typography>
            </Grid>
            <Grid
              container
              item
              xs={4}
              md={1}
              className={classes.subHeadingItem}
            >
              <Typography>{t("budget:currentBalance")}</Typography>
              <Typography>
                {currentBalance} {defaultCurrency}
              </Typography>
            </Grid>
            <Grid container item xs={3} md={1} justify="space-between">
              <Typography>{t("budget:totalSpendings")}</Typography>
              <Typography>
                {totalSpendings} {defaultCurrency}
              </Typography>
            </Grid>
          </Grid>
        }
      />
    </Fragment>
  );
}

export default BudgetDashboard;
