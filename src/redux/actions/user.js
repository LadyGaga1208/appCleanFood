import { SIGNIN_REQUEST, RESET_DATA } from './types'

export const userLogin = data => ({
  type: SIGNIN_REQUEST,
  userLogin: data,
})
