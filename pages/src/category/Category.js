import Head from "next/head";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  BooleanField,
  TextInput,
  SearchInput,
  Create,
  SimpleForm,
  BooleanInput,
  Edit,
} from "react-admin";

const CategoryFilter = [
  <SearchInput source="s" alwaysOn placeholder="Search" />,
];

export const CategoryCreate = () => (
  <>
    <Head>
      <title>Category Create</title>
    </Head>
    <Create>
      <SimpleForm>
        <TextInput source="name" fullWidth />
        <TextInput source="slug" fullWidth />
        <BooleanInput source="publish" />
      </SimpleForm>
    </Create>
  </>
);

export const CategoryEdit = () => (
  <>
    <Head>
      <title>Category Edit</title>
    </Head>
    <Edit>
      <SimpleForm>
        <TextInput disabled label="ID" source="id" />
        <TextInput source="name" fullWidth />
        <TextInput source="slug" fullWidth />
        <BooleanInput source="publish" />
      </SimpleForm>
    </Edit>
  </>
);

export const CategoryList = (props) => (
  <>
    <Head>
      <title>Category</title>
    </Head>
    <List {...props} title="Category" filters={CategoryFilter}>
      <Datagrid>
        <TextField source="id" label="ID" />
        <TextField source="name" />
        <TextField source="slug" />
        <BooleanField source="publish" />
        <EditButton />
      </Datagrid>
    </List>
  </>
);
