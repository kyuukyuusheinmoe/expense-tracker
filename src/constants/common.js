export const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

export const currency = "MMK"

export const transactionColorMapper = {
    'debit': '!bg-egray-100',
    'credit': '!bg-eblue-50'
}

export const PaymentIconColorMapper = ( payment)=> {
    switch(payment) {
        case 'Cash': return {icon: 'pi pi-money-bill', color: '!bg-egold-50 !border-egold-50 !text-black'}
        case 'Bank': return {icon: 'pi pi-credit-card', color: '!bg-egray-100 !border-egray-100 !text-black'}
        case 'Pay': return {icon: "pi pi-mobile", color: "!bg-epink-50 !border-epink-50 !text-black"}
        default: return {icon: 'pi pi-money-bill', color: '!bg-egold-50 !border-egold-50 !text-black'}

    }
}

export const CategoryIconColorMapper = ( payment)=> {
    switch(payment) {
        case 'Bills': return {icon: 'pi pi-money-bill', color: '!bg-blue-500 !border-blue-500 !text-black'}
        case 'Bank': return {icon: 'pi pi-credit-card', color: '!bg-egray-100 !border-egray-100 !text-black'}
        case 'Pay': return {icon: "pi pi-mobile", color: "!bg-epink-50 !border-epink-50"}
    }
}