module.exports.actions = {
    content: `
    import types from "./types";

const SET_ACTIONS_TEST = () => {
  return {
    type: types.SET_ACTION_TEST,
    value: "test"
  };
};

export default {
  SET_ACTIONS_TEST
};

    `
}