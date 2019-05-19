import {SWITCH_SORT_TYPE} from './actionTypes';

export const switchSortType = (sortType)=>({
    type: SWITCH_SORT_TYPE,
    sortType
});