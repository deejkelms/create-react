import React from 'react'
import {
  Filter,
  List,
  Responsive,
  SimpleList,
  Edit,
  Create,
  Datagrid,
  // ReferenceField,
  TextField,
  EditButton,
  DisabledInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  EmailField
  // BooleanField
} from 'admin-on-rest/lib/mui'

const UserFilter = (props) => (
  <Filter {...props}>
    <TextInput label='Search' source='q' alwaysOn />
    <ReferenceInput label='User' source='userId' reference='users' allowEmpty>
      <SelectInput optionText='name' />
    </ReferenceInput>
  </Filter>
)

export const UserList = (props) => (
  <List title='All Users' {...props} filters={<UserFilter />}>
    <Responsive
      small={
        <SimpleList
          primaryText={record => record.name}
          secondaryText={record => `${record.email} email`}
          tertiaryText={record => new Date(record.published_at).toLocalDateString()}
         />
      }
      medium={
        <Datagrid>
          <TextField source='id' />
          <TextField source='name' />
          <EmailField source='email' />
          <TextField source='phone' />
          <TextField label='Address' source='address.street' />
          <EditButton />
        </Datagrid>
      }
     />
  </List>
)

const UserName = ({ record }) => {
  return <span>User {record ? `"${record.name}"` : ''}</span>
}

export const UserEdit = (props) => (
  <Edit title='Edit User' name={<UserName />} {...props}>
    <SimpleForm>
      <DisabledInput source='id' />
      <TextInput source='name' />
      <TextInput source='email' />
      <TextInput label='Address' source='address.street' />
      <TextInput label='City' source='address.city' />
      <TextInput label='Zip Code' source='address.zipcode' />
    </SimpleForm>
  </Edit>
)

export const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source='name' />
      <TextInput source='email' />
      <TextInput source='phone' />
      <TextInput source='street' />
      <TextInput source='city' />
      <TextInput source='zip' />
    </SimpleForm>
  </Create>
)
