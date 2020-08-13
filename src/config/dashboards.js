export const budgetDashbaordConfig = {
  entityParts: [
    {
      name: "incomes",
      modalTitle: "Source of Income"
    },
    {
      name: "accounts",
      modalTitle: "Account"
    },
    {
      name: "spendings",
      modalTitle: "Spending Category"
    }
  ],
  entityName: "budget",
  formsConfig: {
    incomes: {
      formName: "budget-incomes",
      fields: [
        {
          type: "string",
          name: "sourceName",
          required: true,
          label: "Source",
          value: "Salary",
          variant: "outlined",
          helperText: "Name of Source of Income",
          fullWidth: true
        },
        {
          type: "number",
          name: "incomeExpectedAmount",
          required: true,
          label: "Amount",
          helperText: "Expected Amount of Income",
          value: "1000.00",
          variant: "outlined",
          fullWidth: true
        },
        {
          type: "autocomplete",
          name: "incomeCurrency",
          required: true,
          label: "Currency",
          helperText: "In which currency?",
          value: "USD",
          options: [
            { label: "US Dollars", value: "USD" },
            { label: "European Euro", value: "EUR" },
            { label: "Ukrainian Hryvna", value: "UAH" }
          ]
        },
        {
          type: "autocomplete",
          name: "incomeFrequency",
          required: true,
          label: "Frequency",
          helperText: "How frequent you will get income from this source?",
          options: [
            { label: "Per working day", value: "daily" },
            { label: "Per week", value: "weekly" },
            { label: "Per month", value: "montly" },
            { label: "Per year", value: "yearly" },
            { label: "One-time income", value: "once" }
          ],
          value: "monthly"
        },
        {
          type: "iconSelection",
          name: "icon",
          required: false,
          label: "Icon",
          helperText:
            "Select icon, which would be displayed for this income source",
          value: "AttachMoney"
        }
      ]
    },
    accounts: {
      fields: [],
      formName: "budget-accounts"
    },
    spendings: {
      fields: [],
      formName: "budget-spendings"
    }
  }
};

export const finplanDashboardConfig = {
  entityParts: [
    {
      name: "goals"
    }
  ],
  entityName: "finplan",
  formsConfig: {
    goals: {
      fields: []
    }
  }
};
