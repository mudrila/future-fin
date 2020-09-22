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
            name: t("budget:form.accounts.sections.general.name"),
            fields: [
              {
                type: "string",
                name: "name",
                required: true,
                label: t(
                  "budget:form.accounts.sections.general.fields.name.label"
                ),
                value: t(
                  "budget:form.accounts.sections.general.fields.name.value"
                ),
                variant: "outlined",
                helperText: t(
                  "budget:form.accounts.sections.general.fields.name.helperText"
                ),
                fullWidth: true
              },
              {
                type: "number",
                name: "balance",
                required: true,
                label: t(
                  "budget:form.accounts.sections.general.fields.balance.label"
                ),
                helperText: t(
                  "budget:form.accounts.sections.general.fields.balance.label"
                ),
                value: "1000.00",
                variant: "outlined",
                fullWidth: true
              },
              {
                type: "autocomplete",
                name: "currency",
                required: true,
                label: t(
                  "budget:form.accounts.sections.general.fields.currency.label"
                ),
                helperText: t(
                  "budget:form.accounts.sections.general.fields.currency.helperText"
                ),
                value: {
                  label: t(
                    "budget:form.accounts.sections.general.fields.currency.options.USD"
                  ),
                  value: "USD"
                },
                options: [
                  {
                    label: t(
                      "budget:form.accounts.sections.general.fields.currency.options.USD"
                    ),
                    value: "USD"
                  },
                  {
                    label: t(
                      "budget:form.accounts.sections.general.fields.currency.options.EUR"
                    ),
                    value: "EUR"
                  },
                  {
                    label: t(
                      "budget:form.accounts.sections.general.fields.currency.options.UAH"
                    ),
                    value: "UAH"
                  }
                ]
              }
            ]
          },
          {
            name: t("budget:form.accounts.sections.iconSelection.name"),
            fields: [
              {
                type: "iconSelection",
                name: "icon",
                required: false,
                label: t(
                  "budget:form.accounts.sections.iconSelection.fields.iconSelection.label"
                ),
                helperText: t(
                  "budget:form.accounts.sections.iconSelection.fields.iconSelection.helperText"
                ),
                value: "AccountBalanceWallet"
              }
            ]
          },
          {
            name: t("budget:form.accounts.sections.advanced.name"),
            description: t(
              "budget:form.accounts.sections.advanced.description"
            ),
            fields: [
              {
                type: "number",
                name: "payoutPriority",
                required: false,
                label: t(
                  "budget:form.accounts.sections.advanced.fields.payoutPriority.label"
                ),
                helperText: t(
                  "budget:form.accounts.sections.advanced.fields.payoutPriority.helperText"
                ),
                value: "1",
                variant: "outlined",
                fullWidth: true
              },
              {
                type: "number",
                name: "requiredPayment",
                required: false,
                label: t(
                  "budget:form.accounts.sections.advanced.fields.requiredPayment.label"
                ),
                helperText: t(
                  "budget:form.accounts.sections.advanced.fields.payoutPriority.helperText"
                ),
                value: "0",
                variant: "outlined",
                fullWidth: true
              },
              {
                type: "autocomplete",
                name: "requiredPaymentFrequency",
                required: false,
                label: t(
                  "budget:form.accounts.sections.advanced.fields.requiredPaymentFrequency.label"
                ),
                helperText: t(
                  "budget:form.accounts.sections.advanced.fields.requiredPaymentFrequency.helperText"
                ),
                options: [
                  {
                    label: t(
                      "budget:form.accounts.sections.advanced.fields.requiredPaymentFrequency.options.daily"
                    ),
                    value: "daily"
                  },
                  {
                    label: t(
                      "budget:form.accounts.sections.advanced.fields.requiredPaymentFrequency.options.weekly"
                    ),
                    value: "weekly"
                  },
                  {
                    label: t(
                      "budget:form.accounts.sections.advanced.fields.requiredPaymentFrequency.options.montly"
                    ),
                    value: "montly"
                  },
                  {
                    label: t(
                      "budget:form.accounts.sections.advanced.fields.requiredPaymentFrequency.options.yearly"
                    ),
                    value: "yearly"
                  },
                  {
                    label: t(
                      "budget:form.accounts.sections.advanced.fields.requiredPaymentFrequency.options.once"
                    ),
                    value: "once"
                  }
                ],
                value: {
                  label: t(
                    "budget:form.accounts.sections.advanced.fields.requiredPaymentFrequency.options.montly"
                  ),
                  value: "monthly"
                }
              },
              {
                type: "number",
                name: "limit",
                required: false,
                label: t(
                  "budget:form.accounts.sections.advanced.fields.limit.label"
                ),
                helperText: t(
                  "budget:form.accounts.sections.advanced.fields.limit.helperText"
                ),
                value: "0",
                variant: "outlined",
                fullWidth: true
              },
              {
                type: "number",
                name: "fee",
                required: false,
                label: t(
                  "budget:form.accounts.sections.advanced.fields.fee.label"
                ),
                helperText: t(
                  "budget:form.accounts.sections.advanced.fields.fee.helperText"
                ),
                value: "0",
                variant: "outlined",
                fullWidth: true
              },
              {
                type: "autocomplete",
                name: "debtFeeType",
                required: false,
                label: t(
                  "budget:form.accounts.sections.advanced.fields.debtFeeType.label"
                ),
                helperText: t(
                  "budget:form.accounts.sections.advanced.fields.debtFeeType.helperText"
                ),
                value: {
                  label: t(
                    "budget:form.accounts.sections.advanced.fields.debtFeeType.options.percentage"
                  ),
                  value: "%"
                },
                options: [
                  {
                    label: t(
                      "budget:form.accounts.sections.advanced.fields.debtFeeType.options.percentage"
                    ),
                    value: "%"
                  },
                  {
                    label: t(
                      "budget:form.accounts.sections.advanced.fields.debtFeeType.options.fixed"
                    ),
                    value: "fixed"
                  }
                ]
              },
              {
                type: "autocomplete",
                name: "feeFrequency",
                required: false,
                label: t(
                  "budget:form.accounts.sections.advanced.fields.feeFrequency.label"
                ),
                helperText: t(
                  "budget:form.accounts.sections.advanced.fields.feeFrequency.helperText"
                ),
                options: [
                  {
                    label: t(
                      "budget:form.accounts.sections.advanced.fields.feeFrequency.options.daily"
                    ),
                    value: "daily"
                  },
                  {
                    label: t(
                      "budget:form.accounts.sections.advanced.fields.feeFrequency.options.weekly"
                    ),
                    value: "weekly"
                  },
                  {
                    label: t(
                      "budget:form.accounts.sections.advanced.fields.feeFrequency.options.montly"
                    ),
                    value: "montly"
                  },
                  {
                    label: t(
                      "budget:form.accounts.sections.advanced.fields.feeFrequency.options.yearly"
                    ),
                    value: "yearly"
                  },
                  {
                    label: t(
                      "budget:form.accounts.sections.advanced.fields.feeFrequency.options.once"
                    ),
                    value: "once"
                  }
                ],
                value: {
                  label: t(
                    "budget:form.accounts.sections.advanced.fields.feeFrequency.options.montly"
                  ),
                  value: "monthly"
                }
              },
              {
                type: "autocomplete",
                name: "limitFreeUsageDays",
                required: true,
                label: t(
                  "budget:form.accounts.sections.advanced.fields.limitFreeUsageDays.label"
                ),
                helperText: t(
                  "budget:form.accounts.sections.advanced.fields.limitFreeUsageDays.helperText"
                ),
                options: [
                  {
                    label: t(
                      "budget:form.accounts.sections.advanced.fields.limitFreeUsageDays.options.daily"
                    ),
                    value: "daily"
                  },
                  {
                    label: t(
                      "budget:form.accounts.sections.advanced.fields.limitFreeUsageDays.options.weekly"
                    ),
                    value: "weekly"
                  },
                  {
                    label: t(
                      "budget:form.accounts.sections.advanced.fields.limitFreeUsageDays.options.montly"
                    ),
                    value: "montly"
                  },
                  {
                    label: t(
                      "budget:form.accounts.sections.advanced.fields.limitFreeUsageDays.options.yearly"
                    ),
                    value: "yearly"
                  },
                  {
                    label: t(
                      "budget:form.accounts.sections.advanced.fields.limitFreeUsageDays.options.always"
                    ),
                    value: "once"
                  }
                ],
                value: {
                  label: t(
                    "budget:form.accounts.sections.advanced.fields.limitFreeUsageDays.options.always"
                  ),
                  value: "always"
                }
              }
            ]
          }
        ]
      },
      spendings: {
        formName: "budget-spendings",
        sections: [
          {
            name: t("budget:form.spendings.sections.general.name"),
            fields: [
              {
                type: "string",
                name: "name",
                required: true,
                label: t(
                  "budget:form.spendings.sections.general.fields.name.label"
                ),
                value: t(
                  "budget:form.spendings.sections.general.fields.name.value"
                ),
                variant: "outlined",
                helperText: t(
                  "budget:form.spendings.sections.general.fields.name.helperText"
                ),
                fullWidth: true
              },
              {
                type: "number",
                name: "expectedAmount",
                required: true,
                label: t(
                  "budget:form.spendings.sections.general.fields.expectedAmount.label"
                ),
                helperText: t(
                  "budget:form.spendings.sections.general.fields.expectedAmount.helperText"
                ),
                value: "1000.00",
                variant: "outlined",
                fullWidth: true
              },
              {
                type: "autocomplete",
                name: "currency",
                required: true,
                label: t(
                  "budget:form.spendings.sections.general.fields.currency.label"
                ),
                helperText: t(
                  "budget:form.spendings.sections.general.fields.currency.helperText"
                ),
                value: {
                  label: t(
                    "budget:form.spendings.sections.general.fields.currency.options.USD"
                  ),
                  value: "USD"
                },
                options: [
                  {
                    label: t(
                      "budget:form.spendings.sections.general.fields.currency.options.USD"
                    ),
                    value: "USD"
                  },
                  {
                    label: t(
                      "budget:form.spendings.sections.general.fields.currency.options.EUR"
                    ),
                    value: "EUR"
                  },
                  {
                    label: t(
                      "budget:form.spendings.sections.general.fields.currency.options.UAH"
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
                  "budget:form.spendings.sections.general.fields.frequency.label"
                ),
                helperText: t(
                  "budget:form.spendings.sections.general.fields.frequency.helperText"
                ),
                options: [
                  {
                    label: t(
                      "budget:form.spendings.sections.general.fields.frequency.options.daily"
                    ),
                    value: "daily"
                  },
                  {
                    label: t(
                      "budget:form.spendings.sections.general.fields.frequency.options.weekly"
                    ),
                    value: "weekly"
                  },
                  {
                    label: t(
                      "budget:form.spendings.sections.general.fields.frequency.options.montly"
                    ),
                    value: "montly"
                  },
                  {
                    label: t(
                      "budget:form.spendings.sections.general.fields.frequency.options.yearly"
                    ),
                    value: "yearly"
                  },
                  {
                    label: t(
                      "budget:form.spendings.sections.general.fields.frequency.options.once"
                    ),
                    value: "once"
                  }
                ],
                value: {
                  label: t(
                    "budget:form.spendings.sections.general.fields.frequency.options.montly"
                  ),
                  value: "montly"
                }
              }
            ]
          },
          {
            name: t("budget:form.spendings.sections.iconSelection.name"),
            fields: [
              {
                type: "iconSelection",
                name: "icon",
                required: false,
                label: t(
                  "budget:form.spendings.sections.iconSelection.fields.iconSelection.label"
                ),
                helperText: t(
                  "budget:form.spendings.sections.iconSelection.fields.iconSelection.helperText"
                ),
                value: "Shop"
              }
            ]
          },
          {
            name: t("budget:form.spendings.sections.advanced.name"),
            description: t(
              "budget:form.spendings.sections.advanced.description"
            ),
            fields: [
              {
                type: "checkbox",
                name: "isMandatory",
                required: false,
                label: t(
                  "budget:form.spendings.sections.advanced.fields.isMandatory.label"
                ),
                value: "isMandatory",
                helperText: t(
                  "budget:form.spendings.sections.advanced.fields.isMandatory.helperText"
                ),
                checked: true
              },
              {
                type: "number",
                name: "reducingAmount",
                required: false,
                label: t(
                  "budget:form.spendings.sections.advanced.fields.reducingAmount.label"
                ),
                value: 0,
                helperText: t(
                  "budget:form.spendings.sections.advanced.fields.reducingAmount.helperText"
                ),
                checked: true
              },
              {
                type: "autocomplete",
                name: "isMandatoryStateExpiration",
                required: false,
                label: t(
                  "budget:form.spendings.sections.advanced.fields.isMandatoryStateExpiration.label"
                ),
                helperText: t(
                  "budget:form.spendings.sections.advanced.fields.isMandatoryStateExpiration.helperText"
                ),
                options: [
                  {
                    label: t(
                      "budget:form.spendings.sections.advanced.fields.isMandatoryStateExpiration.options.daily"
                    ),
                    value: "daily"
                  },
                  {
                    label: t(
                      "budget:form.spendings.sections.advanced.fields.isMandatoryStateExpiration.options.weekly"
                    ),
                    value: "weekly"
                  },
                  {
                    label: t(
                      "budget:form.spendings.sections.advanced.fields.isMandatoryStateExpiration.options.montly"
                    ),
                    value: "montly"
                  },
                  {
                    label: t(
                      "budget:form.spendings.sections.advanced.fields.isMandatoryStateExpiration.options.yearly"
                    ),
                    value: "yearly"
                  },
                  {
                    label: t(
                      "budget:form.spendings.sections.advanced.fields.isMandatoryStateExpiration.options.always"
                    ),
                    value: "once"
                  }
                ],
                value: {
                  label: t(
                    "budget:form.spendings.sections.advanced.fields.isMandatoryStateExpiration.options.always"
                  ),
                  value: "always"
                }
              }
            ]
          }
        ]
      }
    }
  };
}

export default createBudgetDashbaordConfig;
