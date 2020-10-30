import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignUp23164980Reducer from '../features/SignUp23164980/redux/reducers'
import CopyOfSignUp12164978Reducer from '../features/CopyOfSignUp12164978/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignUp23164980: SignUp23164980Reducer,
CopyOfSignUp12164978: CopyOfSignUp12164978Reducer,

});