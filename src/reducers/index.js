import users from "./users";
import {combineReducers} from "redux";

const allreducers = combineReducers({
    users: users
})

export default allreducers;