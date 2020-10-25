import { createStore } from 'redux';
import { CommentsReducer } from './CommentsReducer';
import { UserReducer } from './UserReducer';
import { combineReducers } from 'redux';

export const rootReducer =  combineReducers({ CommentsReducer, UserReducer })

export const store = createStore(rootReducer);