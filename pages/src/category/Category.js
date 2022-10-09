import Head from "next/head";
import React from "react";
import {
  List,
  Datagrid,
  EditButton,
  BooleanField,
  TextInput,
  SearchInput,
  Create,
  SimpleForm,
  BooleanInput,
  Edit,
  TextField,
} from "react-admin";

const CategoryFilter = [
  <SearchInput source="s" alwaysOn placeholder="Search" />,
];

const ToSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};

export const CategoryCreate = () => {
  const [slug, setSlug] = React.useState("");
  const Slugger = () => {
    return ToSlug(slug);
  };
  return (
    <>
      <Create>
        <SimpleForm>
          <TextInput
            source="name"
            fullWidth
            onChange={(e) => setSlug(e.target.value)}
          />
          <TextInput
            source="slug"
            format={Slugger}
            parse={Slugger}
            fullWidth
            onFocus={(e) => (e.target.value = slug)}
          />
          <BooleanInput source="publish" />
        </SimpleForm>
      </Create>
    </>
  );
};
export const CategoryEdit = () => {
  return (
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
};

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
