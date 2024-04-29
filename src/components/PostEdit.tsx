import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

const PostEdit: React.FC = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="title" />
      </SimpleForm>
    </Edit>
  );
};

export default PostEdit;
