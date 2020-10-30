import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CopyOfSignUp12164978Reducer from '../features/CopyOfSignUp12164978/redux/reducers'
import SignUp12164977Reducer from '../features/SignUp12164977/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CopyOfSignUp12164978: CopyOfSignUp12164978Reducer,
SignUp12164977: SignUp12164977Reducer,

});