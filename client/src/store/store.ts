import { configureStore } from '@reduxjs/toolkit'
import { productsReducer } from "./reducers/products/productsSlice.ts" 
import { authReducer } from "./reducers/auth/authSclice.ts"
import { cartReducer } from './reducers/cart/cartSlice.ts'
import { settingsReducer } from './reducers/settings/settingsSlice.ts'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    auth: authReducer,
    cart: cartReducer,
    settings: settingsReducer,
  },
})


export default store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

