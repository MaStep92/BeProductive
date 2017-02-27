import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './FilterLink.less';

export default function FilterLink({ children, filter }) {
  return (
    <Link
      activeClassName={styles.active}
      className={styles.root}
      to={`?filter=${filter}`}
    >
      {children}
    </Link>
  );
}
