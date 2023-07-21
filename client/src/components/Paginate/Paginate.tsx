import React, { type ReactElement } from 'react';
import styles from './Paginate.module.scss';

const Paginate = ({ postsPerPage, totalPosts, paginate }: any): ReactElement => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
        <div className={styles.pagination}>
                {pageNumbers.map((number) => (
                    <span
                        key={number}
                        onClick={() => paginate(number)}
                        className={styles.paginationItem}
                    >
                        {number}
                    </span>
                ))}
        </div>
  );
};

export default Paginate;
