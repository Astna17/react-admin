import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

const PostList: React.FC = () => {
  return (
    <List resource="posts">
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="user.name" label="User" />
      </Datagrid>
    </List>
  );
};

export default PostList;
