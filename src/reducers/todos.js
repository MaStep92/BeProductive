import { getStorage } from '../utils/localStorage';

import {
    ADD_TODO,
    TOGGLE_TODO,
    START_TIME_TODO,
    TICK_TODO,
    RESET_TIME_TODO,
    STOP_TIME_TODO,
    COMPLETE_ALL_TODOS,
    DELETE_TODO,
    CHECK_TODOS
} from './../constants';

const todosStorage = getStorage('todos');

function todo(state, action) {
    switch (action.type) {
        case ADD_TODO: {
            return {
                id: action.id,
                text: action.text,
                time: 0,
                completed: false,
                isOn: false,
                intervalID: null
            };
        }

        case START_TIME_TODO: {
            if (state.id !== action.id) {
                return {
                    ...state,
                    isOn: false
                };
            }

            return {
                ...state,
                isOn: true,
                intervalID: action.intervalID
            };
        }


        case STOP_TIME_TODO: {
            if (state.id !== action.id) {
                return state;
            }

            return {
                ...state,
                isOn: false
            };
        }

        case TICK_TODO: {
            if (state.id !== action.id) {
                return state;
            }

            return {
                ...state,
                time: state.time + 1,
                intervalID: action.intervalID,
                isOn: true
            };
        }

        case RESET_TIME_TODO: {
            if (state.id !== action.id) {
                return state;
            }

            return {
                ...state,
                time: 0,
            };
        }

        case TOGGLE_TODO: {
            if (state.id !== action.id) {
                return state;
            }

            return {
                ...state,
                completed: !state.completed,
            };
        }

        case COMPLETE_ALL_TODOS:
            return {
                ...state,
                completed: !state.completed,
            };


        case CHECK_TODOS: {
            return {
                ...state,
                isOn: false
            };
        }

        default: {
            return state;
        }
    }
}

export default function todos(state = todosStorage, action) {
    switch (action.type) {
        case ADD_TODO: {
            return [
                ...state,
                todo(undefined, action)
            ];
        }

        case TOGGLE_TODO: {
            return state.map(item => todo(item, action));
        }

        case START_TIME_TODO: {
            return state.map(item => todo(item, action));
        }

        case TICK_TODO: {
            return state.map(item => todo(item, action));
        }

        case STOP_TIME_TODO: {
            return state.map(item => todo(item, action));
        }

        case RESET_TIME_TODO: {
            return state.map(item => todo(item, action));
        }

        case DELETE_TODO: {
            return state.filter(item => item.id !== action.id);
        }

        case CHECK_TODOS: {
        return state.map(item => todo(item, action));
    }

        default: {
            return state;
        }
    }
}
