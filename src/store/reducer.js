const INITIAL_STATE = {
    age: ''
}

export const AGE_REDUCER = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_AGE":
            return {
                age: action.payload
            }
            default:
                return state;
    }
}




