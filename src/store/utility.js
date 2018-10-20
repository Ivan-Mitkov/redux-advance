

//create new object, takes old Object and updatedValues as js object
export const updateObject = (oldObject, updatedValues) => {
    return{
        ...oldObject,
        ...updatedValues
    }
};
