import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';

const CommentList: React.FC = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <EmailField source="email" />
      </Datagrid>
    </List>
  );
};

export default CommentList;
