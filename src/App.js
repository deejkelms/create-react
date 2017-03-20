
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

/* Using this client instead of the previous jsonServerRestClient is just a matter of switching a function: */
    // restClient={myApiRestClient}
    // restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}

const App = () => (
  <Admin authClient={authClient} dashboard={Dashboard} restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>
    <Resource name='users' list={UserList} edit={UserEdit} create={UserCreate} remove={Delete} icon={UserIcon} />
    <Resource name='posts' list={PostList} edit={PostEdit} create={PostCreate} remove={Delete} icon={PostIcon} />
  </Admin>
)

export default App
