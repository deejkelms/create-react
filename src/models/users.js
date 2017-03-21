// /* eslint-disable */
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
  // LongTextInput,
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
  <List {...props} filters={<UserFilter />}>
    <Responsive
      small={
        <SimpleList
          primaryText={record => record.name}
          secondaryText={record => `${record.views} views`}
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
  return <span>Post {record ? `"${record.name}"` : ''}</span>
}

export const UserEdit = (props) => (
  <Edit name={<UserName />} {...props}>
    <SimpleForm>
      <DisabledInput source='id' />
      <ReferenceInput label='User' source='userId' reference='users'>
        <selectInput optionText='name' />
      </ReferenceInput>
      <TextField source='name' />
      <EmailField source='email' />
      <TextField source='phone' />
    </SimpleForm>
  </Edit>
)

export const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput label='User' source='userId' reference='users' allowEmpty>
        <SelectInput optionText='name' />
      </ReferenceInput>
      <TextField source='name' />
      <EmailField source='email' />
      <TextField source='phone' />
    </SimpleForm>
  </Create>
)
