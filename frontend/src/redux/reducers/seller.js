import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

const LoadSellerRequest = createAction('LoadSellerRequest');
const LoadSellerSuccess = createAction('LoadSellerSuccess');
const LoadSellerFail = createAction('LoadSellerFail');

const getAllSellersRequest = createAction('getAllSellersRequest');
const getAllSellersSuccess = createAction('getAllSellersSuccess');
const getAllSellerFailed = createAction('getAllSellerFailed');

const clearErrors = createAction('clearErrors');

export const sellerReducer = createReducer(initialState, (builder) => {
  builder
  .addCase(LoadSellerRequest, (state) => {
    state.isLoading = true;
  })
  .addCase(LoadSellerSuccess, (state, action) => {
    state.isSeller = true;
    state.isLoading = false;
    state.seller = action.payload;
  })
  .addCase(LoadSellerFail, (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.isSeller = false;
  })

  // get all sellers ---admin

  .addCase(getAllSellersRequest, (state) => {
    state.isLoading = true;
  })
  .addCase(getAllSellersSuccess, (state, action) => {
    state.isLoading = false;
    state.sellers = action.payload;
  })
  .addCase(getAllSellerFailed, (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  })
  .addCase(clearErrors, (state) => {
    state.error = null;
  })
  
});