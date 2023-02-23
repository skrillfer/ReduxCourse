import axios from 'axios';
const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== 'apiRequest') {
      return next(action);
    }

    const { url, method, data, onStart, onSuccess, onError } = action.payload;
    if (onStart) dispatch({ type: onStart });

    try {
      const response = await axios.request({
        baseURL: 'http://localhost:5500/api',
        url,
        method,
        data,
      });
      dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      dispatch({ type: onError, payload: error.message });
      dispatch({ type: 'SHOW_ERROR', payload: { error: error.message } });
    }
  };

export default api;
