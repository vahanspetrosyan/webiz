import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants/configs';
import { useNavigate } from 'react-router-dom';
import Paginate from '../../components/Paginate/Paginate';
import Button from '../../components/core/Button';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage] = useState(4);
  const [users, setUsers] = useState([]);

  const indexOfLastPost = currentPage * userPerPage;
  const indexOfFirstPost = indexOfLastPost - userPerPage;
  const currentUsers = users.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    (async (): Promise<any> => {
      const usersData = await axios(`${API_URL}/user`);
      if (usersData?.data) {
        setUsers(usersData.data?.data);
      }
    })();
  }, []);
  const goToUserPosts = (id: string): void => {
    navigate(`/posts/${id}`);
  };

  const onFetchData = (): void => {
    axios(`${API_URL}/user/import`)
      .then(() => {
        (async (): Promise<any> => {
          const usersData = await axios(`${API_URL}/user`);
          if (usersData?.data) {
            setUsers(usersData.data?.data);
          }
        })();
      });
  };
  return (
        <>
            <div className={'container mt-50'}>
                {users.length > 0
                  ? (
                        <>
                          <table>
                            <thead>
                            <tr>
                              <th>ID</th>
                              <th>Full name</th>
                              <th>Email</th>
                              <th>Address</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                              currentUsers.map((user: {
                                id: string
                                fullName: string
                                email: string
                                address: string
                              }, i) => {
                                return (
                                    <tr key={i} className={'cursor-pointer hover:bg-primaryLight'} onClick={() => goToUserPosts(user.id)}>
                                      <td>{user.id}</td>
                                      <td>{user.fullName}</td>
                                      <td>{user.email}</td>
                                      <td>{user.address}</td>
                                    </tr>
                                );
                              })
                            }
                            </tbody>
                          </table>
                          <Paginate
                              postsPerPage={userPerPage}
                              totalPosts={users.length}
                              paginate={paginate}
                          />
                        </>
                    )
                  : (
                        <>
                          <h3 className={'mb-30'}>No user found</h3>
                          <Button onClick={onFetchData}>Fetch with API</Button>
                        </>
                    )}
            </div>
        </>
  );
};
export default Home;
