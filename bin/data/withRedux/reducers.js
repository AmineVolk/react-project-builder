module.exports.reducers = {
    content: `
import { combineReducers } from "redux";
import testReducer from "./app/duck/reducer";
const rootReducer = combineReducers({
    testReducer
});
export default rootReducer;

`}