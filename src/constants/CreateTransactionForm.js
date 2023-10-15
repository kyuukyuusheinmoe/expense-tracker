import { usageCategories, userPaymentTypes, necessityTypes } from "./ComponentData" 

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
            label: "Type",
            name: 'type',
            formProps : {
                type: "DropDown",
                valueType: "string"
            },
            defaultValue: "out",
            displayKey: "label",
            displayValue: "value",
            dataSource: {
                type: "LIST",
                items: [{label: "Out", value: "out"}, {label: "In", value: "in"}],
            }
        },
        {
            label: "Usage Category",
            name: 'category',
            formProps : {
                type: "DropDown",
                valueType: "string"
            },
            displayKey: "label",
            displayValue: "value",
            dataSource: {
                type: "API",
                url: "http://localhost:4000/category/list",
            }
        },
        {
            label: "Payment",
            name: 'payment',
            formProps : {
                type: "RadioSelect",
                valueType: "number"
            },
            displayKey: "label",
            displayValue: "value",
            dataSource: {
                type: "LIST",
                items: userPaymentTypes
            }
        },
        {
            label: "Necessity",
            name: 'necessity',
            formProps : {
                type: "RadioSelect",
                valueType: "number"
            },
            displayKey: "label",
            displayValue: "value",
            dataSource: {
                type: "LIST",
                items: necessityTypes
            },
            condition: {
                show: false,
                name: "type",
                hasValue: "in"
            }
        }
    ]
}