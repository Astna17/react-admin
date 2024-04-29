import React from 'react';
import { Edit, SimpleForm, TextInput, EmailInput } from 'react-admin';

const CommentEdit: React.FC = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <EmailInput source="email" />
      </SimpleForm>
    </Edit>
  );
};

export default CommentEdit;
