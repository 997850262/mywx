import { combineReducers } from '../libs/redux.min.js';
import reduceReducers from '../libs/reduce-reducers.js';
import music from './music.js'

export const rootReducer = reduceReducers(
  combineReducers({
    music
  })
);