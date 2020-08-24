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
              value: new Date(),
              disablePast: true,
              animateYearScrolling: true,
              variant: "inline",
              autoOk: true
            }
          ]
        },
        {
          name: "Icon Selection",
          fields: [
            {
              type: "iconSelection",
              name: "icon",
              required: false,
              label: "Icon",
              helperText:
                "Select icon, which would be displayed for this financial goal",
              value: "Apartment"
            }
          ]
        },
        {
          name: "Advanced",
          description: "Advanced configuration for Financial Goal",
          fields: [
            {
              type: "number",
              name: "achievementPriority",
              required: false,
              label: "Priority",
              helperText:
                "Tip - it use same priority ranking as debts, so higher achievement priority means you want to get this financial goal earlier than settle the debt",
              value: "1",
              variant: "outlined",
              fullWidth: true
            }
          ]
        }
      ],
      formName: "finplan-goals"
    }
  }
};

export default finplanDashboardConfig;
