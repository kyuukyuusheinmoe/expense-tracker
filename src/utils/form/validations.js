export const setIsShow = (condition, watchValues) => {
    return (condition.hasValue === watchValues[condition.name])
}