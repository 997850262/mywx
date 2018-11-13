import { schema } from '../libs/normalizr.js';


const list = new schema.Entity('list', {}, {
  idAttribute: 'cur_count'
});

export const List = [list];

