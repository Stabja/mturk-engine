import { RootState } from './types';
import { combineReducers } from 'redux';
import { reducer as toastr } from 'react-redux-toastr';
import { default as tab } from './reducers/tab';
import { default as searchingActive } from './reducers/searchingActive';
import { default as search } from './reducers/search';
import { default as queue } from './reducers/queue';
import { default as requesters } from './reducers/requesters';
// import { default as scheduler } from './reducers/scheduler';
import { default as searchOptions } from './reducers/searchOptions';
import { default as searchFormActive } from './reducers/searchFormActive';
import { default as sortingOption } from './reducers/sortingOption';
import { default as hitBlocklist } from './reducers/hitBlocklist';
import { default as timeLastSearch } from './reducers/timeLastSearch';

export const rootReducer = combineReducers<RootState>({
  tab,
  queue,
  search,
  toastr,
  // scheduler,
  requesters,
  hitBlocklist,
  searchOptions,
  sortingOption,
  timeLastSearch,
  searchingActive,
  searchFormActive
});
