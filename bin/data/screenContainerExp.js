const getScreenContainerExp = (name) => {
    return `
    import actions from "app/duck/actions";
    import { connect } from "react-redux";
    import ${name} from "./index";
    const mapStateToProps = state => {
        const test = state.testReducer.test;
        return {
            test
        };
    };
    
    const mapDispatchToProps = dispatch => {
        const setActionsTest = () => {
            dispatch(actions.SET_ACTIONS_TEST());
        };
    
        return {
            setActionsTest,
        };
    };
    
    export default connect(
        mapStateToProps,
        mapDispatchToProps
    )(${name});
     
  `;
};
module.exports = { getScreenContainerExp };
