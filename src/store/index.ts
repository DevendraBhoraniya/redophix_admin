import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './user/authSlice';
import { settingDataSlice } from './feature/settingDataSlice';
import { teamDataSlice } from './feature/teamDataSlice';


// Combine all your reducers
const appReducer = combineReducers({
  auth: authReducer,
  setting: settingDataSlice.reducer,
  teams : teamDataSlice.reducer
});

// Root reducer with reset functionality
const rootReducer = (state: any, action: any) => {
  // If the action is RESET_STORE, clear the entire state
  if (action.type === 'RESET_STORE') {
    state = undefined;
    sessionStorage.removeItem('token'); // Clear session storage
    localStorage.clear(); // Clear local storage
  }

  // Return the combined reducer with the updated state
  return appReducer(state, action);
};

export default rootReducer;