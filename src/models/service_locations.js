import React from 'react'
import { List, Datagrid, BooleanField, TextField } from 'admin-on-rest/lib/mui'

export const ServiceLocationsList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source='id' />
      <TextField source='borough' />
      <TextField source='neighborhood' />
      <TextField label='Zip Code' source='code' />
      <BooleanField source='status' />
    </Datagrid>
  </List>
)
