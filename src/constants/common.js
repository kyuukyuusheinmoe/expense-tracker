export const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

export const currency = "MMK"

export const transactionColorMapper = {
    'debit': 'bg-egray-100',
    'credit': 'bg-eblue-50'
}

export const PaymentIconColorMapper = ( payment)=> {
    switch(payment) {
        case 'Cash': return {icon: 'pi pi-money-bill', color: 'bg-egold-50'}
        case 'Bank': return {icon: 'pi pi-credit-card', color: 'bg-egray-100'}
        case 'Pay': return {icon: "pi pi-mobile", color: "bg-epink-50"}
        default: return {icon: 'pi pi-money-bill', color: 'bg-egold-50'}

    }
}

export const CategoryIconColorMapper = ( payment)=> {
    switch(payment) {
        case 'Bills': return {icon: 'pi pi-money-bill', color: 'bg-blue-500'}
        case 'Bank': return {icon: 'pi pi-credit-card', color: 'bg-egray-100'}
        case 'Pay': return {icon: "pi pi-mobile", color: "bg-epink-50"}
    }
}