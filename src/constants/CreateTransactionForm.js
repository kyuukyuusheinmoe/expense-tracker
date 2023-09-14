export const CreateTransactionForm = {
    fields: [
        {
            label: "Title",
            name: 'title',
            formProps : {
                type: "Input",
                valueType: "string"
            }
        },
        {
            label: "Amount",
            name: 'amount',
            formProps : {
                type: "Input",
                valueType: "number"
            }
        },
        {
            label: "Date",
            name: 'date',
            formProps : {
                type: "Calendar"
            }
        },
        {
            label: "Usage Category",
            name: 'category',
            formProps : {
                type: "Dropdown",
                valueType: "number"
            },
            displayKey: "label",
            displayValue: "value"
        },
        {
            label: "Payment",
            name: 'payment',
            formProps : {
                type: "RadioSelect",
                valueType: "number"
            },
            displayKey: "label",
            displayValue: "value"
        },
        {
            label: "Necessity",
            name: 'necessity',
            formProps : {
                type: "RadioSelect",
                valueType: "number"
            },
            displayKey: "label",
            displayValue: "value"
        }
    ]
}