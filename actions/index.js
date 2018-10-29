import ActionTypes from '../const/ActionTypes';
import * as schemes from '../schemes/index';

export const changeText = (text) => {
  return { type: 'CHANGE_TEXT', text }
}
export const changeText2 = (text) => {
  return { type: 'CHANGE_TEXT2', text }
}
export const music = (dirinfo, dirid, uin, p) => {
  return { 
    Server_Api: {
    type: 'Music', 
    endpoint: '/music/list',
    params: {
      dirinfo, dirid, uin, p
    }, 
    }
    }
}
export const selectone = (id) => {
  return { type: 'Selectone', id }
}