import React, { Component } from 'react';
import { connect } from 'react-redux';

import { formattedSeconds } from './../utils/';

import { startTimeTodo, stopTimeTodo, resetTimeTodo, toggleTodo, deleteTodo } from './../actions';

import MdDone from 'react-icons/lib/md/done';
import MdHighlightRemove from 'react-icons/lib/md/highlight-remove';
import MdPlayCircleFilled from 'react-icons/lib/md/play-circle-filled';
import MdRestore from 'react-icons/lib/md/restore';
import MdPauseCircleFilled from 'react-icons/lib/md/pause-circle-filled';

import styles from './Todo.less';

@connect(undefined, { startTimeTodo, stopTimeTodo, resetTimeTodo, toggleTodo, deleteTodo })
export default class Todo extends Component {
    constructor(props) {
        super(props);

        this.handleStartClick = this.handleStartClick.bind(this);
        this.handleStopClick = this.handleStopClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
        this.handleToogleClick = this.handleToogleClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    componentWillUnmount () {
        const { intervalID } = this.props;

        clearInterval(intervalID);
    }

    handleStartClick() {
       const { id, startTimeTodo } = this.props;

       startTimeTodo(id);
    }

    handleStopClick() {
        const { id, intervalID, stopTimeTodo } = this.props;

        stopTimeTodo(id, intervalID);
    }

    handleResetClick() {
        const { id, resetTimeTodo } = this.props;

        resetTimeTodo(id);
    }

    handleToogleClick () {
        const { id, intervalID, toggleTodo, stopTimeTodo } = this.props;

        stopTimeTodo(id, intervalID);
        toggleTodo(id);
    }

    handleDeleteClick () {
        const { id, deleteTodo } = this.props;

        deleteTodo(id);
    }

    render() {
        const { text, time, completed, isOn } = this.props;

        const buttons = (
            isOn
                ? <MdPauseCircleFilled className={styles.stopBtn} onClick={this.handleStopClick} />
                : <MdPlayCircleFilled className={styles.startBtn} onClick={this.handleStartClick} />
        );

        return (
            <div className={styles.todo}>
                <div className={completed ? styles.iconCompleted : styles.icon} onClick={this.handleToogleClick}>
                    <MdDone className={styles.checkmark} />
                </div>

                <div className={completed ? styles.textCompleted : styles.text}>
                    {text} <strong className="stopwatch-timer">{formattedSeconds(time)}</strong>
                </div>

                <div className={styles.buttons}>
                    {
                        completed ?  null :  buttons
                    }

                    {
                        isOn
                        ? <MdRestore className={styles.resetBtn} onClick={this.handleResetClick} />
                        : null
                    }

                     <MdHighlightRemove className={styles.delete} onClick={this.handleDeleteClick} />
                </div>
            </div>
        );
    }
}
