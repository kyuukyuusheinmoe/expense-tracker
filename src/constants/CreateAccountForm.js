import { BANK, CASH, PAY } from "./Account"

export const CreateAccountForm = [
    {
        label: "Account Type",
        name: 'type',
        formProps : {
            type: "DropDown",
            valueType: "string"
        },
        displayKey: "label",
        dataSource: {
            type: "LIST",
            items: [{label: "Cash", value: CASH}, {label: "Bank", value: BANK}, , {label: "Pay", value: PAY}],
        }
    },
    {
        label: "Wallet Name",
        name: 'name',
        formProps : {
            type: "DropDown",
            valueType: "string"
        },
        displayKey: "label",
        dataSource: {
            type: "LIST",
            items: [{label: "AYA PAY", value: "ayapay", type: PAY}, {label: "KBZ PAY", value: "kpay", type: PAY}, {label: "KBZ Mobile Banking", value: "kbzBanking", type: BANK}, {label: "AYA Mobile Banking", value: "ayaBanking", type: BANK}],
            filterCondition: {
                name: "type",
                filterValue: "type"
            }
        },
        condition: {
            show: false,
            name: "type",
            hasValue: "cash"
        },
    },
    {
        label: "Initial Amount",
        name: 'balance',
        formProps : {
            type: "Input",
            valueType: "number"
        }
    },
   
]