import { combineReducers } from '../libs/redux.min.js';
function  music(state = {
  data: { token: 1, nick: '刘凯' },
  entities: {
    0: {
      id: 0,
      bmt: 0,
      emt: 0,
      fmt: 'mp3',
      name: '星月神话.mp3',
      m_url: 'http://221.194.36.142/amobile.music.tc.qq.com/C400003lfo7F49kapo.m4a?guid=9460620423&vkey=42DC92BE041878A28B7F129C9ACA596335B6C6A2288459A85FF38DB1A8618C3CAF3B02B15F9A0DADDA5E9418D26D62C5A3460FECAABE4869&uin=7318&fromtag=66',
      med: 1,
      qid: 1,
      singerL: '星月神话.mp3',
      t: 1
    },
        1: {
          id: 1,
          bmt: 0,
          emt: 0,
          fmt: 'mp3',
          name: '我只在乎你.mp3',
          m_url: 'http://xphoto.xiaoniangao.cn/236998?e=1538323205&token=jy6xdQVmeu6SMLhryyCIi1sRTNvJJpDNP8xAScCT:2EWpXvFGE38MIjChGLFi0NL9qVA=',
          med: 1,
          qid: 1,
          singerL: '我只在乎你.mp3',
          t: 1
        },
        2: {
          id: 2,
          bmt: 0,
          emt: 0,
          fmt: 'mp3',
          plp: '1',
          name: '女人花.mp3',
          m_url: "http://xphoto.xiaoniangao.cn/318111?e=1538323205&token=jy6xdQVmeu6SMLhryyCIi1sRTNvJJpDNP8xAScCT:qURx7EPrTfD1WNQwuWTtZvjgZlQ=",
          med: 1,
          qid: 1,
          singerL: '女人花.mp3',
          t: 1
        },
        3: {
          id: 3,
          bmt: 0,
          emt: 0,
          fmt: 'mp3',
          name: '老古董.mp3',
          m_url: "http://cdn-xphoto2.xiaoniangao.cn/1113370587?OSSAccessKeyId=LTAIajMJyFuun0yZ&Expires=1538323205&Signature=e4tieoi%2F1zp9igeC0rONHNT3bjU%3D",
          med: 1,
          qid: 1,
          singerL: '老古董.mp3',
          t: 1
        },
        4: {
          id: 4,
          bmt: 0,
          emt: 0,
          fmt: 'mp3',
          name: '我们不一样.mp3',
          m_url: "http://cdn-xphoto2.xiaoniangao.cn/1109128136?OSSAccessKeyId=LTAIajMJyFuun0yZ&Expires=1538323205&Signature=FT1s5yK3d4DAYnr7XSj%2FGMhXqpw%3D",
          med: 1,
          qid: 1,
          singerL: '我们不一样.mp3',
          t: 1
        },
        11: {
          id: 11,
          bmt: 0,
          emt: 0,
          fmt: 'mp3',
          name: '因为爱情.mp3',
          m_url: "http://xphoto.xiaoniangao.cn/276442?e=1538323205&token=jy6xdQVmeu6SMLhryyCIi1sRTNvJJpDNP8xAScCT:vUy3wu2fOJg7QR4ZLsiIK9J6VHU=",
          med: 1,
          qid: 1,
          singerL: '因为爱情.mp3',
          t: 1
        },
        12: {
          id: 12,
          bmt: 0,
          emt: 0,
          fmt: 'mp3',
          name: '童话(纯音乐).mp3',
          m_url: "http://xphoto.xiaoniangao.cn/5583520?e=1538323205&token=jy6xdQVmeu6SMLhryyCIi1sRTNvJJpDNP8xAScCT:elFsobgvBT4JioOqSXmi67Q0TZc=",
          med: 1,
          qid: 1,
          singerL: '童话(纯音乐).mp3',
          t: 1
        }
  }, // 我的音乐
  result: [0, 1, 2, 3, 4],
  recommendresult: [11, 12],
  selectid: 0, // 存单选id
  selectmoreid: []// 存多选id
   }, action) {
    switch (action.type) {
      case 'CHANGE_TEXT':
      {
          const newState = { ...state };
          newState.data.nick = action.text;
          return newState
      }
      case 'CHANGE_TEXT2':
      {
          const newState = { ...state };
          newState.data.nick = action.text;
          return newState
      }
      case 'Music':
        {
          const newState = { ...state };
          console.log(111111,action)
          newState.music = action.text;
          return newState
        }
      case 'Selectone':
        {
          const newState = { ...state };
          newState.selectid = action.id;
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