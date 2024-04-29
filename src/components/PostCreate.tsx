import React from 'react';
import { Create, SimpleForm, TextInput, SelectInput } from 'react-admin';
import { PostFormData } from '../types/postTypes';

const PostCreate: React.FC = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <SelectInput source="userId" choices={[{ id: 1, name: 'User 1' }, { id: 2, name: 'User 2' }]} />
      </SimpleForm>
    </Create>
  );
};

export default PostCreate;
