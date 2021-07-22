import axios from '../utils/axios'

const ApiService = {
  get(resource, config = {}) {
    return axios.get(resource, config)
  },
  post(resource, params, config = {}) {
    return axios.post(resource, params, config)
  },
  update(resource, params, config = {}) {
    return axios.put(resource, params, config)
  },
  updateBulk(resource, params, config = {}) {
    return axios.put(resource, params, config)
  },
  delete(resource, config = {}) {
    return axios.delete(resource, config)
  },
  customRequest(config) {
    return axios(config)
  },
  handleError(response, ignore = []) {
    if (ignore.length > 0 && ignore.includes(response.status)) return response
    let error = null
    if (!navigator.onLine || !response) {
      error = new Error(NO_INTERNET)
    } else {
      switch (response.status) {
        case 400:
          error = new Error(response.data.message)
          Vue.$toast.error(error)
          break;

        case 401:
          store.dispatch('auth/ACTION_LOGOUT')
          router.push({'name': 'login'})
          //Vue.$toast.error(response.data.message)
          break;

        case 403:
          error = new Error(FORBIDDEN)
          break;

        case 404:
          error = new Error(response.data.message)
          break;

        case 422:
          for(let er in response.data.errors){
            if (response.data.errors[er][0]) {
              Vue.$toast.error(response.data.errors[er][0]);
            } else {
              Vue.$toast.error(response.data.errors[er]);
            }
            break;
          }
          if (response.config.url === 'auth/login') {
            error = new Error(LOGIN_FAILED)
          }
          break;

        default:
          error = new Error(SERVER_ERROR)
          break;
      }
    }
    store.dispatch(ACTION_SET_ERROR, error)
  }
}

export default ApiService


