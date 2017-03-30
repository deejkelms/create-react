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
  LongTextInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput
} from 'admin-on-rest/lib/mui'

const SkillFilter = (props) => (
  <Filter {...props}>
    <TextInput label='Search' source='q' alwaysOn />
    <ReferenceInput label='Category' source='id' reference='skills' allowEmpty>
      <SelectInput optionText='category' />
    </ReferenceInput>
  </Filter>
)

export const SkillList = (props) => (
  <List title='All Skills' {...props} filters={<SkillFilter />}>
    <Responsive
      small={
        <SimpleList
          primaryText={record => record.category}
          secondaryText={record => `${record.id} id`}
          tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
        />
      }
      medium={
        <Datagrid>
          <TextField source='id' />
          <TextField label='Skill Categories' source='category' />
          <TextField label='Description' source='description' />
          <EditButton />
        </Datagrid>
      }
    />
  </List>
)

const SkillCategory = ({ record }) => {
  return <span>Skill {record ? `"${record.category}"` : ''}</span>
}

export const SkillEdit = (props) => (
  <Edit category={<SkillCategory />} {...props}>
    <SimpleForm>
      <DisabledInput source='id' />
      <TextInput source='category' />
      <LongTextInput source='description' />
    </SimpleForm>
  </Edit>
)

export const SkillCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source='category' />
      <LongTextInput source='description' />
    </SimpleForm>
  </Create>
)
