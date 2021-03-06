import React from 'react'
import {
  Filter,
  List,
  Responsive,
  SimpleList,
  Edit,
  Create,
  Datagrid,
  ReferenceField,
  TextField,
  // BooleanField,
  // BooleanInput,
  EditButton,
  DisabledInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput
} from 'admin-on-rest/lib/mui'

const BusinessFilter = (props) => (
  <Filter {...props}>
    <TextInput label='Search' source='q' alwaysOn />
    <ReferenceInput label='User' source='user_id' reference='users' allowEmpty>
      <SelectInput optionText='users' />
    </ReferenceInput>
  </Filter>
)

export const BusinessList = (props) => (
  <List {...props} filters={<BusinessFilter />}>
    <Responsive
      small={
        <SimpleList
          primaryText={record => record.name}
          secondaryText={record => `${record.email} email`}
          tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
        />
      }
      medium={
        <Datagrid>
          <TextField label='Id' source='id' />
          <TextField label='Business Name' source='name' />
          <TextField label='Description' source='name' />
          <TextField label='Phone' source='phone_number' />
          <TextField label='Email' source='email' />
          <ReferenceField label='User Id' source='user_id' reference='users'>
            <TextField source='id' />
          </ReferenceField>
          <EditButton />
        </Datagrid>
      }
    />
  </List>
)

const BusinessName = ({ record }) => {
  return <span>Business {record ? `"${record.name}"` : ''}</span>
}

export const BusinessEdit = (props) => (
  <Edit name={<BusinessName />} {...props}>
    <SimpleForm>
      <DisabledInput source='id' />
      <TextInput label='Business Name' source='name' />
      <TextInput label='Phone' source='phone_number' />
      <TextInput label='Email' source='email' />
      <ReferenceInput label='User' source='user_id' reference='users'>
        <selectInput optionText='id' />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
)

export const BusinessCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <DisabledInput source='id' />
      <TextInput label='Business Name' source='name' />
      <TextInput label='Phone' source='phone_number' />
      <TextInput label='Email' source='email' />
      <ReferenceInput label='User' source='user_id' reference='users' allowEmpty>
        <SelectInput optionText='id' />
      </ReferenceInput>
    </SimpleForm>
  </Create>
)
