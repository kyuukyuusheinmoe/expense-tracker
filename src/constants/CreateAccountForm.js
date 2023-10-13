export const CreateAccountForm = [
    {
        label: "Title",
        name: 'title',
        formProps : {
            type: "Input",
            valueType: "string"
        }
    },
    {
        label: "Account Type",
        name: 'accountType',
        formProps : {
            type: "DropDown",
            valueType: "string"
        },
        defaultValue: "out",
        displayKey: "label",
        displayValue: "value",
        dataSource: {
            type: "LIST",
            items: [{label: "Cash", value: "cash"}, {label: "Bank", value: "bank"}, , {label: "Pay", value: "pay"}],
        }
    },
    {
        label: "Initial Amount",
        name: 'initAmount',
        formProps : {
            type: "Input",
            valueType: "number"
        }
    },
   
]