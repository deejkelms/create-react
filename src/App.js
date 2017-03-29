
import React from 'react'
import { jsonServerRestClient, fetchUtils, Admin, Resource } from 'admin-on-rest'
import { Delete } from 'admin-on-rest/lib/mui'
import { UserList, UserEdit, UserCreate } from './models/users'
import { BusinessList } from './models/businesses'
import { ServiceLocationsList } from './models/service_locations'
import { SkillsList } from './models/skills'
import { PostList, PostEdit, PostCreate } from './models/posts'

// Icons
import UserIcon from 'material-ui/svg-icons/social/group'
import BusinessIcon from 'material-ui/svg-icons/social/domain'
import ServiceIcon from 'material-ui/svg-icons/social/public'
import SkillIcon from 'material-ui/svg-icons/action/build'
import PostIcon from 'material-ui/svg-icons/action/book'

import Dashboard from './dashboard'
import authClient from './authClient'
const httpClient = (url, options) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' })
  }
  const token = localStorage.getItem('token')
  options.headers.set('Authorization', `Bearer ${token}`)
  return fetchUtils.fetchJson(url, options)
}
const restClient = jsonServerRestClient('http://localhost:8080/v1', httpClient)

/*
Using this client instead of the previous jsonServerRestClient is just a matter of switching a function:
  <Admin restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}
  => restClient={myApiRestClient}
*/

import {
  deepPurple500, deepPurple700,
  purple500,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack
} from 'material-ui/styles/colors'
import { fade } from 'material-ui/utils/colorManipulator'
import Spacing from 'material-ui/styles/spacing'
import zIndex from 'material-ui/styles/zIndex'

const ajTheme = {
  spacing: Spacing,
  zIndex: zIndex,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: deepPurple500,
    primary2Color: deepPurple700,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    secondaryTextColor: fade(darkBlack, 0.54),
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: purple500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack
  }
}

const App = () => (
  <Admin theme={ajTheme} dashboard={Dashboard} authClient={authClient} restClient={restClient}>
    <Resource name='users' list={UserList} edit={UserEdit} create={UserCreate} remove={Delete} icon={UserIcon} />
    <Resource name='businesses' list={BusinessList} icon={BusinessIcon} />
    <Resource name='locations' list={ServiceLocationsList} icon={ServiceIcon} />
    <Resource name='skills' list={SkillsList} icon={SkillIcon} />
    <Resource name='posts' list={PostList} edit={PostEdit} create={PostCreate} remove={Delete} icon={PostIcon} />
  </Admin>
)

export default App
