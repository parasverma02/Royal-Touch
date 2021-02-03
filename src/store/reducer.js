import * as actionTypes from './actions';

const initialState = {
    services: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.Set_Services:
            return{
                ...state,
                services: action.services
            }
        default:
            return state;
    }
}

export default reducer
