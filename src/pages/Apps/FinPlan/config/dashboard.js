export default function createFinplanDashboardConfig(t) {
  return {
    entityParts: [
      {
        name: "goals",
        modalTitle: t("finPlan:form.createTitle")
      }
    ],
    entityName: "finPlan",
    formsConfig: {
      goals: {
        sections: [
          {
            name: t("finPlan:form.sections.general.name"),
            fields: [
              {
                type: "string",
                name: "name",
                required: true,
                label: t("finPlan:form.sections.general.fields.name.label"),
                value: t("finPlan:form.sections.general.fields.name.value"),
                variant: "outlined",
                helperText: t(
                  "finPlan:form.sections.general.fields.name.helperText"
                ),
                fullWidth: true
              },
              {
                type: "number",
                name: "expectedAmount",
                required: true,
                label: t(
                  "finPlan:form.sections.general.fields.expectedAmount.label"
                ),
                helperText: t(
                  "finPlan:form.sections.general.fields.expectedAmount.helperText"
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
                  "finPlan:form.goals.sections.general.fields.currency.label"
                ),
                helperText: t(
                  "finPlan:form.goals.sections.general.fields.currency.helperText"
                ),
                value: {
                  label: t(
                    "finPlan:form.goals.sections.general.fields.currency.options.USD"
                  ),
                  value: "USD"
                },
                options: [
                  {
                    label: t(
                      "finPlan:form.goals.sections.general.fields.currency.options.USD"
                    ),
                    value: "USD"
                  },
                  {
                    label: t(
                      "finPlan:form.goals.sections.general.fields.currency.options.EUR"
                    ),
                    value: "EUR"
                  },
                  {
                    label: t(
                      "finPlan:form.goals.sections.general.fields.currency.options.UAH"
                    ),
                    value: "UAH"
                  }
                ]
              },
              {
                type: "date",
                name: "deadline",
                required: true,
                label: t(
                  "finPlan:form.goals.sections.general.fields.deadline.label"
                ),
                helperText: t(
                  "finPlan:form.goals.sections.general.fields.deadline.helperText"
                ),
                value: new Date(),
                disablePast: true,
                animateYearScrolling: true,
                variant: "inline",
                autoOk: true
              }
            ]
          },
          {
            name: t("finPlan:form.goals.sections.iconSelection.name"),
            fields: [
              {
                type: "iconSelection",
                name: "icon",
                required: false,
                label: t(
                  "finPlan:form.goals.sections.iconSelection.fields.iconSelection.label"
                ),
                helperText: t(
                  "finPlan:form.goals.sections.iconSelection.fields.iconSelection.helperText"
                ),
                value: "Apartment"
              }
            ]
          },
          {
            name: t("finPlan:form.goals.sections.advanced.name"),
            description: t("finPlan:form.goals.sections.advanced.description"),
            fields: [
              {
                type: "number",
                name: "achievementPriority",
                required: false,
                label: t(
                  "finPlan:form.goals.sections.advanced.fields.achievementPriority.label"
                ),
                helperText: t(
                  "finPlan:form.goals.sections.advanced.fields.achievementPriority.helperText"
                ),
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
}
