
import React from 'react'
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest'
import { Delete } from 'admin-on-rest/lib/mui'
import { PostList, PostEdit, PostCreate } from './posts'
import { UserList, UserEdit, UserCreate } from './users'
import PostIcon from 'material-ui/svg-icons/action/book'
import UserIcon from 'material-ui/svg-icons/social/group'
import Dashboard from './dashboard'
import authClient from './authClient'
// import myRestClient from './restClient'

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
  <Admin theme={ajTheme} authClient={authClient} dashboard={Dashboard} restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>
    <Resource name='users' list={UserList} edit={UserEdit} create={UserCreate} remove={Delete} icon={UserIcon} />
    <Resource name='posts' list={PostList} edit={PostEdit} create={PostCreate} remove={Delete} icon={PostIcon} />
  </Admin>
)

export default App
