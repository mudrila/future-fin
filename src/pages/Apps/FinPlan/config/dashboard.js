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
              type: "datetime",
              name: "deadline",
              required: true,
              label: "Deadline",
              helperText:
                "Till which date you want to achieve this financial goal?",
              value: null
            }
          ]
        }
      ],
      formName: "finplan-goals"
    }
  }
};

export default finplanDashboardConfig;
