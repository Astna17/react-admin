/**
import { DataProvider } from 'react-admin';
import * as postsApi from '../api/posts';
import * as commentsApi from '../api/comments';
import { PostFormData } from '../types/postTypes';
import { Comment, CommentFormData } from '../types/commentTypes';

const dataProvider: DataProvider = {
  getList: async (resource, params) => {
    if (resource === 'posts') {
      const data = await postsApi.fetchPosts();
      return { data };
    }
    // Handle other resources...
  },

  getOne: async (resource, params) => {
    if (resource === 'posts') {
      const data = await postsApi.fetchPost(params.id);
      return { data };
    }
    // Handle other resources...
  },

  create: async (resource, params) => {
    if (resource === 'posts') {
      const { data } = await postsApi.createPost(params.data as PostFormData);
      return { data };
    }
    // Handle other resources...
  },

  // Implement update, delete, and other functions similarly...

};

export default dataProvider; */
