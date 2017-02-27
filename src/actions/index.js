import {
    ADD_TODO,
    TOGGLE_TODO,
    START_TIME_TODO,
    STOP_TIME_TODO,
    RESET_TIME_TODO,
    SET_FILTER,
    COMPLETE_ALL_TODOS,
    DELETE_TODO
} from './../constants';

export const addTodo = text => {
    return {
        type: ADD_TODO,
        id: Date.now(),
        text
    };
};

export const toggleTodo = id => {
    return {
        type: TOGGLE_TODO,
        id
    };
};

export const startTimeTodo = (id) => {
    return {
        type: START_TIME_TODO,
        id,

    }
};

export const stopTimeTodo = (id, intervalID) => {
    return {
        type: STOP_TIME_TODO,
        id,
        intervalID,
    }
};

export const resetTimeTodo = (id, time) => {
    return {
        type: RESET_TIME_TODO,
        id,
        time
    }
};

export const completeAllTodos = () => {
    return {
        type: COMPLETE_ALL_TODOS
    };
};

export const deleteTodo = id => {
    return {
        type: DELETE_TODO,
        id
    };
};
