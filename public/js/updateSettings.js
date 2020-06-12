/*eslint-disable*/
import '@babel/polyfill';
import axios from 'axios';
import { showAlert } from './alerts';

export const updateSettings = async (data, type) => {
  try {
    const url =
      type === 'password'
        ? 'Http://127.0.0.1:3000/api/v1/users/updateMyPassword'
        : 'Http://127.0.0.1:3000/api/v1/users/updateMe';
    const res = await axios({
      method: 'PATCH',
      url,
      data
    });

    if (res.data.status === 'success') {
      showAlert('success', `${type.toUpperCase()} update is successful`);
      window.setTimeout(() => {
        location.assign('/me');
      }, 1);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
