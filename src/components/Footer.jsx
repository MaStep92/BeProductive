import React, { Component } from 'react';

import FilterLink from './FilterLink.jsx';

import styles from './Footer.less';

export default class Footer extends Component {
    render() {
        return (
            <div className={styles.root}>
                <FilterLink filter="all">All</FilterLink>
                <FilterLink filter="new">New</FilterLink>
                <FilterLink filter="completed">Completed</FilterLink>
            </div>
        );
    }
}
