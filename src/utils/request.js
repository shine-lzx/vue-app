import axios from 'axios'
import _ from 'lodash'
import getHeaders from './distinguishHeader'
import store from '@/store/index.js'
import { BUILD_IP } from '@/build.env.js'

const request = (config = {}) => {
  const { url } = config
  const omitConfig = _.omit(config, ['url'])

  const _baseURL = BUILD_IP ? store.getters.IP + '/oa/web' : '/oa/web'

  const _config = {
    url: _baseURL + url,
    timeout: 5000,
    method: 'get',
    headers: getHeaders(),
    ...omitConfig,
  }

  const promise = axios(_config).then((result) => {
    const body = result.data
    if (body.code === '00000') {
      return Promise.resolve(body)
    } else {
      return Promise.reject(body)
    }
  })
  return promise
}
export default request
