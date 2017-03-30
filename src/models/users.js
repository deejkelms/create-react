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
          <TextField label='First Name' source='first_name' />
          <TextField label='Last Name' source='last_name' />
          <EmailField source='email' />
          <TextField label='Phone' source='phone_number' />
          <TextField label='Zip Code' source='zip_code' />
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
      <TextInput label='First Name' source='first_name' />
      <TextInput label='Last Name' source='last_name' />
      <TextInput source='email' />
      <TextInput label='Phone' source='phone_number' />
      <TextInput label='Zip Code' source='zip_code' />
    </SimpleForm>
  </Edit>
)

export const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <DisabledInput source='id' />
      <TextInput label='First Name' source='first_name' />
      <TextInput label='Last Name' source='last_name' />
      <TextInput source='email' />
      <TextInput label='Phone' source='phone_number' />
      <TextInput label='Zip Code' source='zip_code' />
    </SimpleForm>
  </Create>
)
