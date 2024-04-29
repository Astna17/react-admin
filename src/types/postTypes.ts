export interface Post {
    id: number;
    title: string;
    user: {
      name: string;
    };
  }
  
  export interface PostFormData {
    title: string;
    userId: number;
  }
  