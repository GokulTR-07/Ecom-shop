import { createAction, createReducer } from "@reduxjs/toolkit";
// "react-redux": "^9.1.0",
const initialState = {
  // name: "user",
  isAuthenticated: false,
};

const LoadUserRequest = createAction('LoadUserRequest');
const LoadUserSuccess = createAction('LoadUserSuccess');
const LoadUserFail = createAction('LoadUserFail');

const updateUserInfoRequest = createAction('updateUserInfoRequest');
const updateUserInfoSuccess = createAction('updateUserInfoSuccess');
const updateUserInfoFailed = createAction('updateUserInfoFailed');

const updateUserAddressRequest = createAction('updateUserAddressRequest');
const updateUserAddressSuccess = createAction('updateUserAddressSuccess');
const updateUserAddressFailed = createAction('updateUserAddressFailed');

const deleteUserAddressRequest = createAction('deleteUserAddressRequest');
const deleteUserAddressSuccess = createAction('deleteUserAddressSuccess');
const deleteUserAddressFailed = createAction('deleteUserAddressFailed');

const getAllUsersRequest = createAction('getAllUsersRequest');
const getAllUsersSuccess = createAction('getAllUsersSuccess');
const getAllUsersFailed = createAction('getAllUsersFailed');

const clearMessages = createAction('clearMessages');
const clearErrors = createAction('clearErrors');

export const userReducer = createReducer(initialState, (builder) => {
  builder
  .addCase(LoadUserRequest,(state) => {
    state.loading = true;
  })
  .addCase(LoadUserSuccess, (state, action) => {
    state.isAuthenticated = true;
    state.loading = false;
    state.user = action.payload;
  })
  .addCase(LoadUserFail, (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
  })

  // update user information

  .addCase(updateUserInfoRequest, (state) => {
    state.loading = true;
  })

  .addCase(updateUserInfoSuccess, (state, action) => {
    state.loading = false;
    state.user = action.payload;
  })

  .addCase(updateUserInfoFailed, (state, action) => {
    state.loading = false;
    state.error = action.payload;
  })

  // update user address

  .addCase(updateUserAddressRequest, (state) => {
    state.addressloading = true;
  })
  .addCase(updateUserAddressSuccess, (state, action) => {
    state.addressloading = false;
    state.successMessage = action.payload.successMessage;
    state.user = action.payload.user;
  })
  .addCase(updateUserAddressFailed, (state, action) => {
    state.addressloading = false;
    state.error = action.payload;
  })

  // delete user address

  .addCase(deleteUserAddressRequest, (state) => {
    state.addressloading = true;
  })
  .addCase(deleteUserAddressSuccess, (state, action) => {
    state.addressloading = false;
    state.successMessage = action.payload.successMessage;
    state.user = action.payload.user;
  })
  .addCase(deleteUserAddressFailed, (state, action) => {
    state.addressloading = false;
    state.error = action.payload;
  })

  // get all users --- admin

  .addCase(getAllUsersRequest, (state) => {
    state.usersLoading = true;
  })
  .addCase(getAllUsersSuccess, (state,action) => {
    state.usersLoading = false;
    state.users = action.payload;
  })
  .addCase(getAllUsersFailed, (state,action) => {
    state.usersLoading = false;
    state.error = action.payload;
  })

  .addCase(clearMessages, (state) => {
    state.successMessage = null;
  })

  .addCase(clearErrors, (state) =>{
    state.error = null;
  })
});

export default userReducer.reducer;