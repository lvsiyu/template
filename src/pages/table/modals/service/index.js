import request from '@/utils/request';

export async function queryModalTable(params) {
  return request('/mock/modalTable', {
    params,
  });
}
