module.exports.reducer = {
  content: `import types from "./types";
    const initState = {
      test: "test"
    };
    const testReducer = (state = initState, action) => {
      if (action.type === types.SET_ACTION_TEST) {
        return Object.assign({}, state, action.value);
      } else return state;
    };
    export default testReducer;`
}