import { configureApiRoot } from '../utils/config';

export const CONNECT_ACCOUNT_REQUEST = 'CONNECT_ACCOUNT_REQUEST';
export type CONNECT_ACCOUNT_REQUEST = typeof CONNECT_ACCOUNT_REQUEST;

export const CONNECT_ACCOUNT_SUCCESS = 'CONNECT_ACCOUNT_SUCCESS';
export type CONNECT_ACCOUNT_SUCCESS = typeof CONNECT_ACCOUNT_SUCCESS;

export const CONNECT_ACCOUNT_FAILURE = 'CONNECT_ACCOUNT_FAILURE';
export type CONNECT_ACCOUNT_FAILURE = typeof CONNECT_ACCOUNT_FAILURE;

export const DISCONNECT_ACCOUNT = 'DISCONNECT_ACCOUNT';
export type DISCONNECT_ACCOUNT = typeof DISCONNECT_ACCOUNT;

export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export type SEARCH_REQUEST = typeof SEARCH_REQUEST;

export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export type SEARCH_SUCCESS = typeof SEARCH_SUCCESS;

export const SEARCH_FAILURE = 'SEARCH_FAILURE';
export type SEARCH_FAILURE = typeof SEARCH_FAILURE;

export const TOGGLE_SEARCH_ACTIVITY = 'TOGGLE_SEARCH_ACTIVITY';
export type TOGGLE_SEARCH_ACTIVITY = typeof TOGGLE_SEARCH_ACTIVITY;

export const SCHEDULE_NEXT_SEARCH = 'SCHEDULE_NEXT_SEARCH';
export type SCHEDULE_NEXT_SEARCH = typeof SCHEDULE_NEXT_SEARCH;

export const CANCEL_NEXT_SEARCH = 'CANCEL_NEXT_SEARCH';
export type CANCEL_NEXT_SEARCH = typeof CANCEL_NEXT_SEARCH;

export const FETCH_TURKOPTICON_SUCCESS = 'FETCH_TURKOPTICON_SUCCESS';
export type FETCH_TURKOPTICON_SUCCESS = typeof FETCH_TURKOPTICON_SUCCESS;

export const FETCH_TURKOPTICON_REQUEST = 'FETCH_TURKOPTICON_REQUEST';
export type FETCH_TURKOPTICON_REQUEST = typeof FETCH_TURKOPTICON_REQUEST;

export const FETCH_TURKOPTICON_FAILURE = 'FETCH_TURKOPTICON_FAILURE';
export type FETCH_TURKOPTICON_FAILURE = typeof FETCH_TURKOPTICON_FAILURE;

export const TOGGLE_SEARCH_RESULT_EXPAND = 'TOGGLE_SEARCH_RESULT_EXPAND';
export type TOGGLE_SEARCH_RESULT_EXPAND = typeof TOGGLE_SEARCH_RESULT_EXPAND;

export const COLLAPSE_ALL_SEARCH_RESULTS = 'COLLAPSE_ALL_SEARCH_RESULTS';
export type COLLAPSE_ALL_SEARCH_RESULTS = typeof COLLAPSE_ALL_SEARCH_RESULTS;

export const MARK_HIT_AS_READ = 'MARK_HIT_AS_READ';
export type MARK_HIT_AS_READ = typeof MARK_HIT_AS_READ;

export const MARK_ALL_HITS_AS_READ = 'MARK_ALL_HITS_AS_READ';
export type MARK_ALL_HITS_AS_READ = typeof MARK_ALL_HITS_AS_READ;

export const FETCH_QUEUE_SUCCESS = 'FETCH_QUEUE_SUCCESS';
export type FETCH_QUEUE_SUCCESS = typeof FETCH_QUEUE_SUCCESS;

export const FETCH_QUEUE_REQUEST = 'FETCH_QUEUE_REQUEST';
export type FETCH_QUEUE_REQUEST = typeof FETCH_QUEUE_REQUEST;

export const FETCH_QUEUE_FAILURE = 'FETCH_QUEUE_FAILURE';
export type FETCH_QUEUE_FAILURE = typeof FETCH_QUEUE_FAILURE;

export const ACCEPT_HIT_REQUEST = 'ACCEPT_HIT_REQUEST';
export type ACCEPT_HIT_REQUEST = typeof ACCEPT_HIT_REQUEST;

export const ACCEPT_HIT_SUCCESS = 'ACCEPT_HIT_SUCCESS';
export type ACCEPT_HIT_SUCCESS = typeof ACCEPT_HIT_SUCCESS;

export const ACCEPT_HIT_FAILURE = 'ACCEPT_HIT_FAILURE';
export type ACCEPT_HIT_FAILURE = typeof ACCEPT_HIT_FAILURE;

export const RETURN_HIT_REQUEST = 'RETURN_HIT_REQUEST';
export type RETURN_HIT_REQUEST = typeof RETURN_HIT_REQUEST;

export const RETURN_HIT_FAILURE = 'RETURN_HIT_FAILURE';
export type RETURN_HIT_FAILURE = typeof RETURN_HIT_FAILURE;

export const RETURN_HIT_SUCCESS = 'RETURN_HIT_SUCCESS';
export type RETURN_HIT_SUCCESS = typeof RETURN_HIT_SUCCESS;

export const UPDATE_FIELD = 'UPDATE_FIELD';
export type UPDATE_FIELD = typeof UPDATE_FIELD;

export const TOGGLE_FORM = 'TOGGLE_FORM';
export type TOGGLE_FORM = typeof TOGGLE_FORM;

export const CHANGE_SELECTED_TAB = 'CHANGE_SELECTED_TAB';
export type CHANGE_SELECTED_TAB = typeof CHANGE_SELECTED_TAB;

export const CHANGE_SORTING_OPTION = 'CHANGE_SORTING_OPTION';
export type CHANGE_SORTING_OPTION = typeof CHANGE_SORTING_OPTION;

export const BLOCK_HIT_GROUP = 'BLOCK_HIT_GROUP';
export type BLOCK_HIT_GROUP = typeof BLOCK_HIT_GROUP;

export const UNBLOCK_HIT_GROUP = 'UNBLOCK_HIT_GROUP';
export type UNBLOCK_HIT_GROUP = typeof UNBLOCK_HIT_GROUP;

export const BLOCK_REQUESTER = 'BLOCK_REQUESTER';
export type BLOCK_REQUESTER = typeof BLOCK_REQUESTER;

export const UNBLOCK_REQUESTER = 'UNBLOCK_REQUESTER';
export type UNBLOCK_REQUESTER = typeof UNBLOCK_REQUESTER;

export const ADD_WATCHER = 'ADD_WATCHER';
export type ADD_WATCHER = typeof ADD_WATCHER;

export const DELETE_WATCHER = 'DELETE_WATCHER';
export type DELETE_WATCHER = typeof DELETE_WATCHER;

export const TOGGLE_WATCHER_ACTIVE = 'TOGGLE_WATCHER_ACTIVE';
export type TOGGLE_WATCHER_ACTIVE = typeof TOGGLE_WATCHER_ACTIVE;

export const CANCEL_NEXT_WATCHER_TICK = 'CANCEL_NEXT_WATCHER_TICK';
export type CANCEL_NEXT_WATCHER_TICK = typeof CANCEL_NEXT_WATCHER_TICK;

export const SCHEDULE_NEXT_WATCHER_TICK = 'SCHEDULE_NEXT_WATCHER_TICK';
export type SCHEDULE_NEXT_WATCHER_TICK = typeof SCHEDULE_NEXT_WATCHER_TICK;

export const EDIT_WATCHER_FIELD = 'EDIT_WATCHER_FIELD';
export type EDIT_WATCHER_FIELD = typeof EDIT_WATCHER_FIELD;

export const PLAY_AUDIO = 'PLAY_AUDIO';
export type PLAY_AUDIO = typeof PLAY_AUDIO;

export const CHANGE_VOLUME = 'CHANGE_VOLUME';
export type CHANGE_VOLUME = typeof CHANGE_VOLUME;

export const TOGGLE_AUDIO_ENABLED = 'TOGGLE_AUDIO_ENABLED';
export type TOGGLE_AUDIO_ENABLED = typeof TOGGLE_AUDIO_ENABLED;

export const EDIT_AUDIO_SOURCE = 'EDIT_AUDIO_SOURCE';
export type EDIT_AUDIO_SOURCE = typeof EDIT_AUDIO_SOURCE;

export const STATUS_SUMMARY_REQUEST = 'STATUS_SUMMARY_REQUEST';
export type STATUS_SUMMARY_REQUEST = typeof STATUS_SUMMARY_REQUEST;

export const STATUS_SUMMARY_SUCCESS = 'STATUS_SUMMARY_SUCCESS';
export type STATUS_SUMMARY_SUCCESS = typeof STATUS_SUMMARY_SUCCESS;

export const STATUS_SUMMARY_FAILURE = 'STATUS_SUMMARY_FAILURE';
export type STATUS_SUMMARY_FAILURE = typeof STATUS_SUMMARY_FAILURE;

export const STATUS_DETAIL_REQUEST = 'STATUS_DETAIL_REQUEST';
export type STATUS_DETAIL_REQUEST = typeof STATUS_DETAIL_REQUEST;

export const STATUS_DETAIL_SUCCESS = 'STATUS_DETAIL_SUCCESS';
export type STATUS_DETAIL_SUCCESS = typeof STATUS_DETAIL_SUCCESS;

export const STATUS_DETAIL_FAILURE = 'STATUS_DETAIL_FAILURE';
export type STATUS_DETAIL_FAILURE = typeof STATUS_DETAIL_FAILURE;

export const API_URL = configureApiRoot();
