import React, { Component } from 'react';
import { connect } from 'react-redux';

import { completeAllTodos } from '../actions';

import styles from './CompleteAllTodos.less';

import DoneAllIcon from 'react-icons/lib/md/done-all';

@connect(null, { completeAllTodos })
export default class CompleteTodos extends Component {
    constructor(props) {
        super(props);

        this.hadleCompleteAllTodos = this.hadleCompleteAllTodos.bind(this);
    }

    hadleCompleteAllTodos() {
        this.props.completeAllTodos();
    }

    render() {
        return (
            <div className={styles.root}>
                <DoneAllIcon className={styles.completeAllTodos} onClick={this.hadleCompleteAllTodos} />
            </div>
        );
    }
}
