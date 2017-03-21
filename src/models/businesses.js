import React from 'react'
import { List, Datagrid, EmailField, TextField, BooleanField } from 'admin-on-rest/lib/mui'

export const BusinessList = (props) => (
  <List label='All Businesses' {...props}>
    <Datagrid>
      <TextField label='User Id' source='user_id' />
      <TextField label='Business Name' source='business_name' />
      <TextField label='Phone' source='business_phone' />
      <EmailField label='Email' source='business_email' />
      <TextField label='Address' source='address.street' />
      <TextField label='Skills' source='skills' />
      <TextField label='Locations' source='service_locations' />
      <BooleanField label='Approved' source='approved' />
    </Datagrid>
  </List>
)
