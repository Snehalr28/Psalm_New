import { combineReducers } from 'redux';
import { errorReducer } from './ErrorReducer';
import { statusReducer } from './StatusReducer';
import { userReducer } from './UserReducer';
import { loaderReducer } from './LoaderReducer';
// import { persistReducer } from './PersistReducer';
// import { homeReducer } from './HomeReducer';
// import { profileReducer } from './ProfileReducers';
// import { ManufacturerReducer } from './ManufacturerReducer';
// import { InvitationReducer } from './InvitationReducer';
export const rootReducer = combineReducers({
  error: errorReducer,
  status: statusReducer,
  user: userReducer,
  loaders: loaderReducer,
  // permanentPersist: persistReducer,
  // home: homeReducer,
  // profile:profileReducer,
  // manufacturer:ManufacturerReducer,
  // invitation:InvitationReducer
});
