import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

const getAllOrdersUserRequest = createAction('getAllOrdersUserRequest');
const getAllOrdersUserSuccess = createAction('getAllOrdersUserSuccess');
const getAllOrdersUserFailed = createAction('getAllOrdersUserFailed');

const getAllOrdersShopRequest = createAction('getAllOrdersShopRequest');
const getAllOrdersShopSuccess = createAction('getAllOrdersShopSuccess');
const getAllOrdersShopFailed = createAction('getAllOrdersShopFailed');

const adminAllOrdersRequest = createAction('adminAllOrdersRequest');
const adminAllOrdersSuccess = createAction('adminAllOrdersSuccess');
const adminAllOrdersFailed = createAction('adminAllOrdersFailed');

const clearErrors = createAction('clearErrors');

export const orderReducer = createReducer(initialState, (builder) => {

  // get all orders of user

  builder
  .addCase(getAllOrdersUserRequest, (state) => {
    state.isLoading = true;
  })
  .addCase(getAllOrdersUserSuccess, (state, action) => {
    state.isLoading = false;
    state.orders = action.payload;
  })
  .addCase(getAllOrdersUserFailed, (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  })
  
  // get all orders of shop

  .addCase(getAllOrdersShopRequest, (state) => {
    state.isLoading = true;
  })
  .addCase(getAllOrdersShopSuccess, (state, action) => {
    state.isLoading = false;
    state.orders = action.payload;
  })
  .addCase(getAllOrdersShopFailed, (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  })

  // get all orders for admin

  .addCase(adminAllOrdersRequest, (state) => {
    state.adminOrderLoading = true;
  })
  .addCase(adminAllOrdersSuccess, (state, action) => {
    state.adminOrderLoading = false;
    state.adminOrders = action.payload;
  })
  .addCase(adminAllOrdersFailed, (state, action) => {
    state.adminOrderLoading = false;
    state.error = action.payload;
  })

  .addCase(clearErrors, (state) => {
    state.error = null;
  })
});
