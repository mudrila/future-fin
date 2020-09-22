function createBudgetDashbaordConfig(t) {
  return {
    entityParts: [
      {
        name: "incomes",
        dashboardSectionTitle: t("budget:entityParts.incomes"),
        modalTitle: t("budget:form.createTitle.incomes")
      },
      {
        name: "accounts",
        dashboardSectionTitle: t("budget:entityParts.accounts"),
        modalTitle: t("budget:form.createTitle.accounts")
      },
      {
        name: "spendings",
        dashboardSectionTitle: t("budget:entityParts.spendings"),
        modalTitle: t("budget:form.createTitle.spendings")
      }
    ],
    entityName: "budget",
    formsConfig: {
      incomes: {
        formName: "budget-incomes",
        sections: [
          {
            name: t("budget:form.incomes.sections.general.name"),
            fields: [
              {
                type: "string",
                name: "name",
                required: true,
                label: t(
                  "budget:form.incomes.sections.general.fields.name.label"
                ),
                value: t(
                  "budget:form.incomes.sections.general.fields.name.value"
                ),
                variant: "outlined",
                helperText: t(
                  "budget:form.incomes.sections.general.fields.name.helperText"
                ),
                fullWidth: true
              },
              {
                type: "number",
                name: "expectedAmount",
                required: true,
                label: t(
                  "budget:form.incomes.sections.general.fields.expectedAmount.label"
                ),
                helperText: t(
                  "budget:form.incomes.sections.general.fields.expectedAmount.helperText"
                ),
                value: 1000,
                variant: "outlined",
                fullWidth: true
              },
              {
                type: "autocomplete",
                name: "currency",
                required: true,
                label: t(
                  "budget:form.incomes.sections.general.fields.currency.label"
                ),
                helperText: t(
                  "budget:form.incomes.sections.general.fields.currency.helperText"
                ),
                value: {
                  label: t(
                    "budget:form.incomes.sections.general.fields.currency.options.USD"
                  ),
                  value: "USD"
                },
                options: [
                  {
                    label: t(
                      "budget:form.incomes.sections.general.fields.currency.options.USD"
                    ),
                    value: "USD"
                  },
                  {
                    label: t(
                      "budget:form.incomes.sections.general.fields.currency.options.EUR"
                    ),
                    value: "EUR"
                  },
                  {
                    label: t(
                      "budget:form.incomes.sections.general.fields.currency.options.UAH"
                    ),
                    value: "UAH"
                  }
                ]
              },
              {
                type: "autocomplete",
                name: "frequency",
                required: true,
                label: t(
                  "budget:form.incomes.sections.general.fields.frequency.label"
                ),
                helperText: t(
                  "budget:form.incomes.sections.general.fields.frequency.helperText"
                ),
                options: [
                  {
                    label: t(
                      "budget:form.incomes.sections.general.fields.frequency.options.daily"
                    ),
                    value: "daily"
                  },
                  {
                    label: t(
                      "budget:form.incomes.sections.general.fields.frequency.options.weekly"
                    ),
                    value: "weekly"
                  },
                  {
                    label: t(
                      "budget:form.incomes.sections.general.fields.frequency.options.montly"
                    ),
                    value: "montly"
                  },
                  {
                    label: t(
                      "budget:form.incomes.sections.general.fields.frequency.options.yearly"
                    ),
                    value: "yearly"
                  },
                  {
                    label: t(
                      "budget:form.incomes.sections.general.fields.frequency.options.once"
                    ),
                    value: "once"
                  }
                ],
                value: {
                  label: t(
                    "budget:form.incomes.sections.general.fields.frequency.options.montly"
                  ),
                  value: "montly"
                }
              }
            ]
          },
          {
            name: t("budget:form.incomes.sections.iconSelection.name"),
            fields: [
              {
                type: "iconSelection",
                name: "icon",
                required: false,
                label: t(
                  "budget:form.incomes.sections.iconSelection.fields.iconSelection.label"
                ),
                helperText: t(
                  "budget:form.incomes.sections.iconSelection.fields.iconSelection.helperText"
                ),
                value: "AttachMoney"
              }
            ]
          },
          {
            name: t("budget:form.incomes.sections.advanced.name"),
            description: t("budget:form.incomes.sections.advanced.description"),
            fields: [
              {
                type: "number",
                name: "incomeFee",
                required: false,
                label: t(
                  "budget:form.incomes.sections.advanced.fields.incomeFee.label"
                ),
                helperText: t(
                  "budget:form.incomes.sections.advanced.fields.incomeFee.helperText"
                ),
                value: "0",
                variant: "outlined",
                fullWidth: true
              },
              {
                type: "autocomplete",
                name: "incomeFeeType",
                required: false,
                label: t(
                  "budget:form.incomes.sections.advanced.fields.incomeFeeType.label"
                ),
                helperText: t(
                  "budget:form.incomes.sections.advanced.fields.incomeFee.helperText"
                ),
                value: {
                  label: t(
                    "budget:form.incomes.sections.advanced.fields.incomeFeeType.options.percentage"
                  ),
                  value: "%"
                },
                options: [
                  {
                    label: t(
                      "budget:form.incomes.sections.advanced.fields.incomeFeeType.options.percentage"
                    ),
                    value: "%"
                  },
                  {
                    label: t(
                      "budget:form.incomes.sections.advanced.fields.incomeFeeType.options.fixed"
                    ),
                    value: "fixed"
                  }
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
                name: "requiredPayment",
                required: false,
                label: "Required payment",
                helperText:
                  "How much do you need to payout this debt regulary (like bank credit)? Leave 0 if no required payment per some period, or put whole debt amount if you need to pay it via single payment.",
                value: "0",
                variant: "outlined",
                fullWidth: true
              },
              {
                type: "autocomplete",
                name: "requiredPaymentFrequency",
                required: false,
                label: "Required Payment Frequency",
                helperText:
                  "How frequent you need to pay your required payment?",
                options: [
                  { label: "Per working day", value: "daily" },
                  { label: "Per week", value: "weekly" },
                  { label: "Per month", value: "montly" },
                  { label: "Per year", value: "yearly" },
                  { label: "One-time payout", value: "once" }
                ],
                value: { label: "One-time payout", value: "once" }
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
                value: { label: "A month", value: "montly" }
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
                type: "checkbox",
                name: "isMandatory",
                required: false,
                label: "Mandatory spending",
                value: "isMandatory",
                helperText:
                  "Off this box, if this spending category not mandatory (i.e. you can omit this type of spendings for a while).",
                checked: true
              },
              {
                type: "number",
                name: "reducingAmount",
                required: false,
                label: "Possible reducing",
                value: 0,
                helperText:
                  "If it is possible to reduce this spending - put possible reducing amount, so we can calculate your financial plan with possible reducing options.",
                checked: true
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
                  { label: "After a year", value: "yearly" },
                  { label: "One-time spending", value: "once" },
                  { label: "Always mandatory", value: "always" }
                ],
                value: { label: "Always mandatory", value: "always" }
              }
            ]
          }
        ]
      }
    }
  };
}

export default createBudgetDashbaordConfig;
