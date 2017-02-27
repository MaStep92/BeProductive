import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

import styles from './AddTodo.less';

const ENTER_KEY = 13;

@connect(undefined, { addTodo })
export default class AddTodo extends Component {
    constructor() {
        super();

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    state = {
        text: '',
    };

    handleTextChange(e) {
        this.setState({
            text: e.target.value,
        });
    }

    handleKeyDown(e) {
        if (e.keyCode === ENTER_KEY) {
            if (this.state.text.length){
                this.props.addTodo(this.state.text);
                this.setState({ text: '' });
            }
            return false;
        }
    }

    render() {
        return (
            <div className={styles.root}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="What needs to be done?"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                    onKeyDown={this.handleKeyDown}
                />
            </div>
        );
    }
}
