import { configureStore } from '@reduxjs/toolkit'
import productsReducer from "./products/productsSlice.ts" 
import authReducer from "./auth/authSclice.ts"

export const store = configureStore({
  reducer: {
    products: productsReducer,
    auth: authReducer,
  },
})


export default store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

