export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";

//adding action creators receives paylod return object
// Redux Thunk middleware allows you to write action creators
//that return a function instead of an action. The thunk can be used to delay
// the dispatch of an action, or to dispatch only if a certain condition is met.
// The inner function receives the store methods dispatch and getState as parameters.
export const increment = () => {
  return {
    type: INCREMENT
  };
};
export const decrement = () => {
  return {
    type: DECREMENT
  };
};
export const add = val => {
  return {
    type: ADD,
    val: val
  };
};
export const substract = val => {
  return {
    type: SUBTRACT,
    val: val
  };
};

export const saveResult = result => {
  return {
    type: STORE_RESULT,
    result: result
  };
};
export const storeResult = res => {
  //get dispatch from redux-thunk
  return dispatch => {
    //simulate async action
    setTimeout(() => {
      //if pass store it will create infinite loop so the creation of saveResult
      dispatch(saveResult(res));
    }, 2000);
  };
};
export const deleteResult = id => {
  return {
    type: DELETE_RESULT,
    resultElId: id
  };
};
