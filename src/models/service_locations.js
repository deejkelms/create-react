import React from 'react'
import { List, Datagrid, BooleanField, TextField } from 'admin-on-rest/lib/mui'

export const ServiceLocationsList = (props) => (
  <List title='All Service Locations' {...props}>
    <Datagrid>
      <TextField title='Borough' source='borough' />
      <TextField title='Neighborhood' source='neighborhood' />
      <TextField title='Zip Code' source='code' />
      <BooleanField title='Status' source='status' />
    </Datagrid>
  </List>
)
