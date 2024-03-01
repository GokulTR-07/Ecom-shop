import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

const eventCreateRequest = createAction('eventCreateRequest');
const eventCreateSuccess = createAction('eventCreateSuccess');
const eventCreateFail = createAction('eventCreateFail');

const getAlleventsShopRequest = createAction('getAlleventsShopRequest');
const getAlleventsShopSuccess = createAction('getAlleventsShopSuccess');
const getAlleventsShopFailed = createAction('getAlleventsShopFailed');

const deleteeventRequest = createAction('deleteeventRequest');
const deleteeventSuccess = createAction('deleteeventSuccess');
const deleteeventFailed = createAction('deleteeventFailed');

const getAlleventsRequest = createAction('getAlleventsRequest');
const getAlleventsSuccess = createAction('getAlleventsSuccess');
const getAlleventsFailed = createAction('getAlleventsFailed');

const clearErrors = createAction('clearErrors');


export const eventReducer = createReducer(initialState, (builder) => {
  builder
  .addCase(eventCreateRequest, (state) => {
    state.isLoading = true;
  })
  .addCase(eventCreateSuccess, (state, action) => {
    state.isLoading = false;
    state.event = action.payload;
    state.success = true;
  })
  .addCase(eventCreateFail, (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.success = false;
  })

  // get all events of shop

  .addCase(getAlleventsShopRequest, (state) => {
    state.isLoading = true;
  })
  .addCase(getAlleventsShopSuccess, (state, action) => {
    state.isLoading = false;
    state.events = action.payload;
  })
  .addCase(getAlleventsShopFailed, (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  })

  // delete event of a shop

  .addCase(deleteeventRequest, (state) => {
    state.isLoading = true;
  })
  .addCase(deleteeventSuccess, (state, action) => {
    state.isLoading = false;
    state.message = action.payload;
  })
  .addCase(deleteeventFailed, (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  })

  // get all events

  .addCase(getAlleventsRequest, (state) => {
    state.isLoading = true;
  })
  .addCase(getAlleventsSuccess, (state, action) => {
    state.isLoading = false;
    state.allEvents = action.payload;
  })
  .addCase(getAlleventsFailed, (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  })
  
  .addCase(clearErrors, (state) => {
    state.error = null;
  })

});
