/* eslint-disable */
import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK } from 'admin-on-rest'

export default (type, params) => {
  if (type === AUTH_LOGIN) {
    const { email, password } = params
    const request = new Request('http://localhost:8080/v1/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
    return fetch(request)
      .then(response => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText)
        }
        return response.json()
      })
      .then(({ token }) => {
        localStorage.setItem('token', token)
      })
  }
  if (type === AUTH_LOGOUT) {
    localStorage.removeItem('token')
    return Promise.resolve()
  }
  if (type === AUTH_CHECK) {
    return localStorage.getItem('email') ? Promise.resolve() : Promise.reject({ redirectTo: '/no-access' })
  }
  return Promise.reject('Unkown method')
}

// SIMPLE
// import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK } from 'admin-on-rest'
//
// export default (type, params) => {
//   if (type === AUTH_LOGIN) {
//     const { email } = params
//     localStorage.setItem('email', email)
//     return Promise.resolve()
//   }
//   if (type === AUTH_LOGOUT) {
//     localStorage.removeItem('email')
//     return Promise.resolve()
//   }
//   if (type === AUTH_CHECK) {
//     return localStorage.getItem('email') ? Promise.resolve() : Promise.reject()
//   }
//   return Promise.reject('Unknown method')
// }
