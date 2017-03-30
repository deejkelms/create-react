import React from 'react'
import {
  // Filter,
  List,
  // Responsive,
  // SimpleList,
  Edit,
  Create,
  Datagrid,
  // ReferenceField,
  TextField,
  EditButton,
  BooleanInput,
  BooleanField,
  // ReferenceInput,
  // SelectInput,
  SimpleForm,
  TextInput
} from 'admin-on-rest/lib/mui'

const LocationFilter = (props) => {
  console.log("******** PROPS: ", props)
  return(
    <Filter {...props}>
      <TextInput label='Search' source='q' alwaysOn />
      <ReferenceInput label='Zip Code' source='code' reference='service_locations' allowEmpty>
        <SelectInput optionText='Zip' />
      </ReferenceInput>
      <ReferenceInput label='Neighborhood' source='neighborhood' reference='service_locations' allowEmpty>
        <SelectInput optionText='Neighborhood' />
      </ReferenceInput>
    </Filter>
  )
}

export const LocationList = (props) => {
  return (
    <List {...props} >
      <Datagrid>
        <TextField label='Zip Code' source='code' />
        <TextField source='borough' />
        <TextField source='neighborhood' />
        <BooleanField source='status' />
        <EditButton />
      </Datagrid>
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
      <TextInput source='neighborhood' />
      <TextInput source='bourough' />
      <BooleanInput source='status' />
    </SimpleForm>
  </Edit>
)

export const LocationCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source='code' />
      <TextInput source='neighborhood' />
      <TextInput source='bourough' />
      <BooleanInput source='status' />
    </SimpleForm>
  </Create>
)
