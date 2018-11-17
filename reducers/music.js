

import { combineReducers } from '../libs/redux.min.js';
function  music(state = {
  data: { token: 1, nick: '刘凯' },
  entities: {
    1000: {
      id: 1000,
      bmt: 0,
      emt: 0,
      fmt: 'mp3',
      name: '星月神话.mp3',
      m_url: 'http://isure.stream.qqmusic.qq.com/C400003lfo7F49kapo.m4a?guid=9460620423&vkey=75A7CD67D856C343BD272B20ADB55BEE245856BABE97EC450261123BFFC61A7A58667FF4EA4170540749EAAE6B36537654695BC052E14312&uin=7318&fromtag=66',
      med: 1,
      qid: 1,
      singerL: '星月神话.mp3',
      t: 1
    },
    1001: {
      id: 1001,
      bmt: 0,
      emt: 0,
      fmt: 'mp3',
      name: '远行.mp3',
      m_url: 'http://61.240.152.25/amobile.music.tc.qq.com/C400001k0Qg24L3nYG.m4a?guid=9460620423&vkey=5E7DDB7C77F1B82D7DDF0A9F2279F4FDDF3940A857A8FDDBCF77F611BBDC52A2DB610B38248C5B118B0E7C2389FC61910EFC880BA3E5BA65&uin=7318&fromtag=66',
      med: 1,
      qid: 1,
      singerL: '远行.mp3',
      t: 1
    },
    1002: {
          id: 1002,
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
    1003: {
          id: 1003,
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
    1004: {
          id: 1004,
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
    1005: {
          id: 1005,
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
    1006: {
          id: 1006,
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
    1007: {
          id: 1007,
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
  result: [],
  recommendresult: [1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007],
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
      case 'Music_SUC':
        {
          console.log('suc', action.response)
          state.result = action.response.result;
          const newState = { ...state };
          // action.response.map((data,index)=>{
          //   return newState.result.push(data.cur_count)
          // })
          // newState.result=action.response.result;
          newState.result.map((d, i) => {
            const res = action.response.entities.list[i+1].cur_count
            const url = 'http://ws.stream.qqmusic.qq.com/C100' + action.response.entities.list[i+1].data.songmid+'.m4a?fromtag=0&guid=126548448';
            const a = { [res]: { id: res, name: action.response.entities.list[i + 1].data.songname,m_url:url}}
            newState.entities = Object.assign(newState.entities, a);
              return newState;
          })
          console.log(newState)
        }
      // case 'Onselect':// 点击单选时
      //   {
      //     const newselectid = state.selectmoreid[0];
      //     return {
      //       ...state,
      //       selectid: newselectid
      //     };
      //   }
      // case 'Onmoreselect':// 点击多选时
      //   {
      //     console.log('点击多选时', action)
      //     const newselectmoreid = [];
      //     if (state.selectid > 0) {
      //       newselectmoreid.push(state.selectid);
      //       state.entities[state.selectid].select = 1
      //     }
      //     console.log(newselectmoreid)
      //     return {
      //       ...state,
      //       selectmoreid: newselectmoreid
      //     };
      //   }
      case 'Selectone':
        {
          const newState = { ...state };
          newState.selectid = action.id;
          return newState
        }
      case 'Selectmore':
        {
          let count = 0;
          console.log('多选', action.id);
          const newselectmoreid = state.selectmoreid.slice();
          for (let i = 0; i < newselectmoreid.length; i++) {
            if (newselectmoreid[i] != action.id) {
              count++;
            }
          }
          if (count >= newselectmoreid.length && newselectmoreid.length < 5) {
            newselectmoreid.push(action.id);
            state.entities[action.id].select=1
          } else {
            for (let i = 0; i < newselectmoreid.length; i++) {
              if (newselectmoreid[i] == action.id) {
                newselectmoreid.splice(i, 1);
                delete state.entities[action.id].select;
              }
            }
          }
          return {
            ...state,
            selectmoreid: newselectmoreid
          };
        }
      case 'Rename':
        {
          const newState = { ...state };
          newState.entities[newState.selectid].name = action.text;
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