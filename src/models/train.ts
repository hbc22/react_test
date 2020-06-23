
import { getFakeTrainData } from '@/services/apiDemo';
 
export default {
  namespace: 'train',
 
  state: {
    planData: [],
  },
 
  effects: {
    /**
     * 计划列表
     * @param payload {Objact} 参数 
     * @param callback {Function} 回调函数 
     */
    *fetchList({payload}, { call, put }) {
        console.log('cs', payload)
      const response = yield call(getFakeTrainData);
      console.log('222', response);
      yield put({
        type: 'savePlan',
        payload: response,
      });
    },
   
    
  },
 
  reducers: {
    savePlan(state, { payload }) {
        console.log('save', payload)
      return {...state,planData:payload};
    },
  }
}