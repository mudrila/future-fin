export const budgetDashbaordConfig = {
  entityParts: [
    {
      name: "incomes"
    },
    {
      name: "accounts"
    },
    {
      name: "spendings"
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
          value: "Salary"
        },
        {
          type: "number",
          name: "incomeExpectedAmount",
          required: true,
          label: "Amount",
          helperText: "Expected Amount of Income",
          value: ""
        },
        {
          type: "select",
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
          type: "select",
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
        }
      ]
    },
    accounts: {
      fields: []
    },
    spendings: {
      fields: []
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
