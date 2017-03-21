import React from 'react'
import { List, Datagrid, TextField } from 'admin-on-rest/lib/mui'

export const SkillsList = (props) => (
  <List title='All Skills' {...props}>
    <Datagrid>
      <TextField title='Skill Categories' source='category' />
      <TextField title='Description' source='descriptions' />
    </Datagrid>
  </List>
)
