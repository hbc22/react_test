import request from '@/utils/request';

export async function getFakeTrainData() {
    return request('/api/trainList');
  }