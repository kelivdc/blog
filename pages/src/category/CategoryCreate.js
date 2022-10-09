import React, { useEffect } from "react";
import { TextField } from "@mui/material";
import {
  BooleanInput,
  Create,
  SimpleForm,
  TextInput,
} from "react-admin";

function CategoryCreate() {
  const [slug, setSlug] = React.useState('')
  const Slugger = () => {
    return slug.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
  }
  
  return (
    <>
      <Create>
          <SimpleForm>
            <TextInput
              source="name"
              fullWidth
              onChange={(e) => setSlug(e.target.value)}
            />
            <TextInput source="slug" format={Slugger} parse={Slugger} fullWidth onFocus={(e) => e.target.value = slug}/>
            <BooleanInput source="publish" />
          </SimpleForm>
      </Create>
    </>
  );
}

export default CategoryCreate;
