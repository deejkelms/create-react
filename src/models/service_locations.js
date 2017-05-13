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
  BooleanInput,
  BooleanField,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput
} from 'admin-on-rest/lib/mui'

const LocationFilter = (props) => (
  <Filter {...props}>
    <TextInput label='Search' source='q' alwaysOn />
    <ReferenceInput label='Zip Code' source='code' reference='service_locations' allowEmpty>
      <SelectInput optionText='code' />
    </ReferenceInput>
  </Filter>
)

export const LocationList = (props) => {
  return(
  <List title='All Locations' {...props} filters={<LocationFilter />}>
    <Responsive
      small={
        <SimpleList
          primaryText={record => record.code}
          secondaryText={record => `${record.neighborhood} neighborhood`}
          tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
        />
      }
      medium={
        <Datagrid>
          <TextField label='Zip Code' source='code' />
          <TextField source='county' />
          <TextField source='neighborhood' />
          <TextField source='state' />
          <EditButton />
        </Datagrid>
        }
      />
  </List>
)
}

const LocationCode = ({ record }) => {
  return <span>Zip {record ? `"${record.code}"` : ''}</span>
}

export const LocationEdit = (props) => (
  <Edit code={<LocationCode />} {...props}>
    <SimpleForm>
      <TextInput source='code' />
      <TextInput source='county' />
      <TextInput source='neighborhood' />
      <TextInput source='state' />
    </SimpleForm>
  </Edit>
)

export const LocationCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source='code' />
      <TextInput source='county' />
      <TextInput source='neighborhood' />
      <TextInput source='state' />
    </SimpleForm>
  </Create>
)
