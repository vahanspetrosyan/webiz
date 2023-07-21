import axios from 'axios';

const getUsers = async (): Promise<any> => {
  const users = await axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/users'
  });
  if (!users?.data) {
    throw new Error('API: Internal server error');
  }
  return users.data;
};

const getPosts = async (id: number): Promise<any> => {
  const posts = await axios({
    method: 'get',
    url: `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  });
  if (!posts?.data) {
    throw new Error('API: Internal server error');
  }
  return posts.data;
};

export { getUsers, getPosts };
