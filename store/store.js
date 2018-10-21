import {
  createStore,
  applyMiddleware,
  combineReducers
} from '../libs/redux.min.js';
import thunk from '../libs/redux-thunk.js';
import music from '../reducers/music.js'
import serverApi from '../middleware/serverApi.js'
// import reducers
import { rootReducer } from '../reducers/index.js';

let entities = wx.getStorageSync('entities') || {};

const store = createStore(
  rootReducer, {
    entities: entities
  },
  applyMiddleware(
    thunk,
    serverApi
  )
);
module.exports.store = store
