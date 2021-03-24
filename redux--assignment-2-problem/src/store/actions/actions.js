export const ADD = 'ADD';
export const REMOVE = 'REMOVE';

export const add = (name, age) => {
    return dispatch => {
        setTimeout(() => {
            console.log('Hi Mom!')
            dispatch(addSave(name, age))
        }, 2000)
    }
}

export const addSave = (name, age) => {
    return {
        type: ADD,
        name: name,
        age: age
    }
}

export const remove = (id) => {
    return {
        type: REMOVE,
        personId: id
    }
}