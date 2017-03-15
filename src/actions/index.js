import {
    ADD_TODO,
    TOGGLE_TODO,
    START_TIME_TODO,
    STOP_TIME_TODO,
    TICK_TODO,
    RESET_TIME_TODO,
    COMPLETE_ALL_TODOS,
    DELETE_TODO,
    CHECK_TODOS
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

export const startTimeTodo = id => {
    return {
        type: START_TIME_TODO,
        id,
    }
};

export const tickTodo = id => {
    return {
        type: TICK_TODO,
        id,
    }
};

export const stopTimeTodo = id => {
    return {
        type: STOP_TIME_TODO,
        id
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

export const checkTodos = () => {
    return {
        type: CHECK_TODOS
    };
};
