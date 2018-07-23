import {GET_SESSIONS} from '../actions/types'

export default function (state = [], action) {
    switch (action.type) {
        case GET_SESSIONS:
            return action.payload
        default:
            return state
    }
}