import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';

const persistConfig = {
  key: 'root',
  // localStorage에 저장합니다.
  storageSession,
  // auth, board, studio 3개의 reducer 중에 auth reducer만 localstorage에 저장합니다.
  whitelist: [],
  // blacklist -> 그것만 제외.
};

export default persistReducer(persistConfig, rootReducer);
