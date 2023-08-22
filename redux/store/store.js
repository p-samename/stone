import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import userSlice from 'redux/slice/userSlice';

const persistConfig = {
  key: 'root', // 저장소 키 (임의로 지정)
  storage: storageSession, // 세션 스토리지 사용
};

const store = configureStore({
  reducer: {
    user: persistReducer(persistConfig, userSlice.reducer),
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

const persistor = persistStore(store); // persistor 생성
export { store, persistor };
