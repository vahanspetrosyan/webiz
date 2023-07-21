import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants/configs';
import { Link, useParams } from 'react-router-dom';
import { Close } from '../../components/core/Icons';

interface TPost {
  id: string
  title: string
  body: string
  address: string
}
const Posts: React.FC = () => {
  const params = useParams();
  const id = params.id ?? '0';
  const [posts, setPosts] = useState([]);
  const [initialPosts, setInitialPosts] = useState([]);
  useEffect(() => {
    (async (): Promise<any> => {
      const postsData = await axios(`${API_URL}/post?userId=${id}`);
      if (postsData?.data) {
        setPosts(postsData.data?.data);
        setInitialPosts(postsData.data?.data);
      }
    })();
  }, []);
  const onDelete = (id: string): void => {
    axios.delete(`${API_URL}/post/${id}`)
      .then(() => {
        const newPosts = posts.filter((post: TPost) => {
          return post.id !== id;
        });
        setPosts(newPosts);
        setInitialPosts(newPosts);
      });
  };
  const searchHandler = (e: any): void => {
    if (!e.target.value) {
      setPosts(initialPosts);
    } else {
      const newList = posts.filter((self: TPost) => self.title.toLowerCase().includes(e.target.value));
      setPosts(newList);
    }
  };
  return (
        <>
            <div className={'container mt-50'}>
                <Link to={'/'}><a>Go to home screen</a></Link>
                <div className={'my-20'}>
                    <input type="search" onKeyUp={searchHandler} placeholder={'Search by title'}/>
                </div>
                {posts.length > 0
                  ? (
                        <table>
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Body</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                posts.map((post: TPost, i) => {
                                  return (
                                        <tr key={i} className={'hover:bg-primaryLight'}>
                                            <td>{post.id}</td>
                                            <td>{post.title}</td>
                                            <td>{post.body}</td>
                                            <td><span className={'cursor-pointer'} onClick={() => onDelete(post.id)}><Close/></span></td>
                                        </tr>
                                  );
                                })
                            }
                            </tbody>
                        </table>
                    )
                  : (
                        <h3>No posts found</h3>
                    )}
            </div>
        </>
  );
};
export default Posts;
