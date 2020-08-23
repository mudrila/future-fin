const finplanDashboardConfig = {
  entityParts: [
    {
      name: "goals",
      modalTitle: "Financial Goal"
    }
  ],
  entityName: "finplan",
  formsConfig: {
    goals: {
      sections: [
        {
          name: "General",
          fields: [
            {
              type: "string",
              name: "name",
              required: true,
              label: "Goal",
              value: "New House",
              variant: "outlined",
              helperText: "Name of Financial Goal",
              fullWidth: true
            },
            {
              type: "number",
              name: "expectedAmount",
              required: true,
              label: "Expence",
              helperText: "An average expence of this financial goal",
              value: "1000.00",
              variant: "outlined",
              fullWidth: true
            },
            {
              type: "autocomplete",
              name: "currency",
              required: true,
              label: "Currency",
              helperText: "In which currency?",
              value: { label: "US Dollars", value: "USD" },
              options: [
                { label: "US Dollars", value: "USD" },
                { label: "European Euro", value: "EUR" },
                { label: "Ukrainian Hryvna", value: "UAH" }
              ]
            },
            {
              type: "date",
              name: "deadline",
              required: true,
              label: "Deadline",
              helperText:
                "Till which date you want to achieve this financial goal?",
              value: null,
              disablePast: true,
              animateYearScrolling: true,
              emptyLabel: "Deadline",
              variant: "inline"
            }
          ]
        },
        {
          name: "Advanced",
          description: "Advanced configuration for Account",
          fields: [
            {
              type: "number",
              name: "payoutPriority",
              required: false,
              label: "Payout priority",
              helperText:
                "If this is debt account - how it is important to payout it first prior to others?(from 1 to 10)",
              value: "1",
              variant: "outlined",
              fullWidth: true
            },
            {
              type: "number",
              name: "limit",
              required: false,
              label: "Debt Limit",
              helperText:
                "For some debit cards/accounts - there is possible debt limit.",
              value: "0",
              variant: "outlined",
              fullWidth: true
            },
            {
              type: "number",
              name: "fee",
              required: false,
              label: "Debt Limit Fee",
              helperText:
                "If there is fee for debt limit usage - how much it is?",
              value: "0",
              variant: "outlined",
              fullWidth: true
            },
            {
              type: "autocomplete",
              name: "debtFeeType",
              required: false,
              label: "Fee Type",
              helperText:
                "If there's fee for debt limit - is it fixed, or in percentage?",
              value: { label: "%", value: "%" },
              options: [
                { label: "%", value: "%" },
                { label: "Fixed", value: "fixed" }
              ]
            },
            {
              type: "autocomplete",
              name: "feeFrequency",
              required: false,
              label: "Frequency",
              helperText:
                "How frequent you will be charged for debt limit usage?",
              options: [
                { label: "Per working day", value: "daily" },
                { label: "Per week", value: "weekly" },
                { label: "Per month", value: "montly" },
                { label: "Per year", value: "yearly" },
                { label: "One-time fee", value: "once" }
              ],
              value: { label: "Per month", value: "montly" }
            }
          ]
        }
      ],
      formName: "finplan-goals"
    }
  }
};

export default finplanDashboardConfig;
