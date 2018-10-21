import ActionTypes from '../const/ActionTypes';
import * as schemes from '../schemes/index';

export const changeText = (text) => {
  return { type: 'CHANGE_TEXT', text }
}
export const changeText2 = (text) => {
  return { type: 'CHANGE_TEXT2', text }
}