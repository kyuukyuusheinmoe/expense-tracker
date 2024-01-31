import dynamic from "next/dynamic"

export const componentMapper = {
    Input:{component: dynamic(()=> import ("../../components/Form/Input"))},
    Password:{component: dynamic(()=> import ("../../components/Form/Password"))},
    Number:{component: dynamic(()=> import ("../../components/Form/NumberInput"))},
    Calendar: {component: dynamic(()=> import ("../../components/Form/Calendar"))},
    DropDown: {component: dynamic(()=> import ("../../components/Form/DropDown"))},
    RadioSelect: {component: dynamic(()=> import ("../../components/Form/RadioList"))},

}