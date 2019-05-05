import { GetApi, PostApi } from './requestApi'
import * as api from './api'

export default {
  signIn: (data) => PostApi(api.sigIn, data)
}
