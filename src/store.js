import { configureStore } from '@reduxjs/toolkit'
// import { authMiddleware } from './redux/middlewares/auth';
import rootReducer from './redux/reducers'

const middleware = (getDefaultMiddleware) =>
    //   getDefaultMiddleware({serializableCheck: false}).concat(authMiddleware);
    getDefaultMiddleware({ serializableCheck: false })

export default configureStore({
    reducer: rootReducer,
    middleware,
    devTools: true,
})
