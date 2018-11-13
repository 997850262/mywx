import { normalize } from '../libs/normalizr.js';
import ActionTypes from '../const/ActionTypes';
import * as schemes from '../schemes/index';

export const changeText = (text) => {
  return { type: 'CHANGE_TEXT', text }
}
export const changeText2 = (text) => {
  return { type: 'CHANGE_TEXT2', text }
}
export const music = () => {
  return { 
    Server_Api: {
    type: 'Music', 
      endpoint: '/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=36&_=1520777874472%20',
    params: {
      // g_tk: 5381,
      // uin: 0,
      // format: json,
      // inCharset: utf - 8,
      // outCharset: utf - 8,
      // notice: 0,
      // platform: h5,
      // needNewCode: 1,
      // tpl: 3,
      // page: detail,
      // type: top,
      // topid: 36,
      // _: 1520777874472 % 20,
    }, 
      normailzerFun: response => normalize(response.data, schemes.List)
    }
    }
}
// export const music = (dirinfo, dirid, uin, p) => {
//   return { 
//     Server_Api: {
//     type: 'Music', 
//     endpoint: '/music/list',
//     params: {
//       dirinfo, dirid, uin, p
//     }, 
//     }
//     }
// }
export const selectone = (id) => {
  return { type: 'Selectone', id }
}