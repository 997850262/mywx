import { combineReducers } from '../libs/redux.min.js';
function  music(state = { name: 'liu'}, action) {
    switch (action.type) {
      case 'CHANGE_TEXT':
      {
          console.log('111', action.text)
          const newState = { ...state };
          newState.name = action.text
          console.log('222', newState.name)
          return newState
      }
      case 'CHANGE_TEXT2':
      {
          const newState = { ...state };
          newState.name = action.text
          return newState
      }
      default:
        return state
    }
  }
export default combineReducers({
  music
});
// module.exports.music = music