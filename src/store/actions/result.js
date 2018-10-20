import * as actionTypes from './actionTypes'


//adding action creators receives paylod return object
// Redux Thunk middleware allows you to write action creators
//that return a function instead of an action. The thunk can be used to delay
// the dispatch of an action, or to dispatch only if a certain condition is met.
// The inner function receives the store methods dispatch and getState as parameters.

export const saveResult = result => {
    return {
      type: actionTypes.STORE_RESULT,
      result: result
    };
  };
  export const storeResult = res => {
    //get dispatch from redux-thunk
    return (dispatch,getState) => {
      //access the state using name of the props from container mapStateToProps 
      const oldCounter=getState().ctr.counter;
      //simulate async action
      setTimeout(() => {
        console.log('Old counter: ',oldCounter);
        //if pass store it will create infinite loop so the creation of saveResult
        dispatch(saveResult(res));
      }, 2000);
    };
  };
  export const deleteResult = id => {
    return {
      type: actionTypes.DELETE_RESULT,
      resultElId: id
    };
  };
  