const budgetDashbaordConfig = {
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
      sections: [
        {
          name: "General",
          fields: [
            {
              type: "string",
              name: "name",
              required: true,
              label: "Source",
              value: "Salary",
              variant: "outlined",
              helperText: "Name of Source of Income",
              fullWidth: true
            },
            {
              type: "number",
              name: "expectedAmount",
              required: true,
              label: "Amount",
              helperText: "Expected Amount of Income",
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
              type: "autocomplete",
              name: "frequency",
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
              value: { label: "Per month", value: "montly" }
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
                "Select icon, which would be displayed for this income source",
              value: "AttachMoney"
            }
          ]
        },
        {
          name: "Advanced",
          description: "Advanced configuration for source of income",
          fields: [
            {
              type: "number",
              name: "incomeFee",
              required: false,
              label: "Fee",
              helperText: "Any possible fees",
              value: "0",
              variant: "outlined",
              fullWidth: true
            },
            {
              type: "autocomplete",
              name: "incomeFeeType",
              required: false,
              label: "Fee Type",
              helperText: "If there's fee - is it fixed, or in percentage?",
              value: { label: "%", value: "%" },
              options: [
                { label: "%", value: "%" },
                { label: "Fixed", value: "fixed" }
              ]
            }
          ]
        }
      ]
    },
    accounts: {
      formName: "budget-accounts",
      sections: [
        {
          name: "General",
          fields: [
            {
              type: "string",
              name: "name",
              required: true,
              label: "Account Name",
              value: "Wallet",
              variant: "outlined",
              helperText: "Name of Account",
              fullWidth: true
            },
            {
              type: "number",
              name: "balance",
              required: true,
              label: "Balance",
              helperText: "Current Balance",
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
                "Select icon, which would be displayed for this account",
              value: "AccountBalanceWallet"
            }
          ]
        },
        {
          name: "Advanced",
          description: "Advanced configuration for Account",
          fields: [
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
            },
            {
              type: "autocomplete",
              name: "limitFreeUsageDays",
              required: true,
              label: "Free days",
              helperText:
                "Type amount of days, if there is custom amount of time for free usage",
              placeholder: "How long you can use debt limit for free?",
              options: [
                { label: "No free usage", value: "noFreeUsage" },
                { label: "A day", value: "daily" },
                { label: "A week", value: "weekly" },
                { label: "A month", value: "montly" },
                { label: "A year", value: "yearly" },
                { label: "Always", value: "always" }
              ],
              value: { label: "Per month", value: "montly" }
            }
          ]
        }
      ]
    },
    spendings: {
      formName: "budget-spendings",
      sections: [
        {
          name: "General",
          fields: [
            {
              type: "string",
              name: "name",
              required: true,
              label: "Category",
              value: "Goods",
              variant: "outlined",
              helperText: "Name of Spending Category",
              fullWidth: true
            },
            {
              type: "number",
              name: "expectedAmount",
              required: true,
              label: "Amount",
              helperText: "Expected Amount of Spendings for this Category",
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
              type: "autocomplete",
              name: "frequency",
              required: true,
              label: "Frequency",
              helperText:
                "What is the frequency of updating expected amount of spending for this category? (I.e. how much in **which period** you want to spend?",
              options: [
                { label: "Per working day", value: "daily" },
                { label: "Per week", value: "weekly" },
                { label: "Per month", value: "montly" },
                { label: "Per year", value: "yearly" },
                { label: "One-time income", value: "once" }
              ],
              value: { label: "Per month", value: "montly" }
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
                "Select icon, which would be displayed for this spending category",
              value: "Shop"
            }
          ]
        },
        {
          name: "Advanced",
          description: "Advanced configuration for this Spending Category",
          fields: [
            {
              type: "switcher",
              name: "isMandatory",
              required: false,
              label: "Mandatory spending status",
              value: true,
              helperText:
                "Off this switcher, if this spending category not mandatory (i.e. you can omit this type of spendings for a while)."
            },
            {
              type: "autocomplete",
              name: "isMandatoryStateExpiration",
              required: false,
              label: "Removal time",
              helperText:
                "After which period of time you can remove this spending category?",
              placeholder: "95 days",
              options: [
                { label: "After a day", value: "daily" },
                { label: "After a week", value: "weekly" },
                { label: "After a month", value: "montly" },
                { label: "After 6 months", value: "half-early" },
                { label: "After a year", value: "yearly" },
                { label: "One-time spending", value: "once" }
              ],
              value: { label: "After a month", value: "montly" }
            }
          ]
        }
      ]
    }
  }
};

export default budgetDashbaordConfig;
