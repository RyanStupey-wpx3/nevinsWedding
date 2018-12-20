
const initialState = {
    user: null,
    reduxRsvpStatus: "",
}

const CHANGE_RSVP = "CHANGE_RSVP"
export default function(state = initialState, action){
    switch(action.type){
        // case LOG_IN:
        // return {...state, user: action.payload}
        case CHANGE_RSVP: 
        return {...state, reduxRsvpStatus: action.payload}
        default: 
            return state;
    }
}

export function GETRSVP(status){
    return {
        type: CHANGE_RSVP,
        payload: status
    }
}