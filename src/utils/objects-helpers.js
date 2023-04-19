export const updateObjectInArray = (items, itemId, objPropName, newObjectProps) => {
    return items.map(item => item[objPropName] === itemId ? {...item, ...newObjectProps} : item)
}