import React from 'react'
import { List, Datagrid, TextField } from 'admin-on-rest/lib/mui'

export const SkillsList = (props) => (
  <List title='All Skills' {...props}>
    <Datagrid>
      <TextField source='id' />
      <TextField label='Skill Categories' source='category' />
      <TextField label='Description' source='description' />
    </Datagrid>
  </List>
)
