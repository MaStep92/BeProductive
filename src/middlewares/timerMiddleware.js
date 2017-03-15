import {
    START_TIME_TODO,
    STOP_TIME_TODO,
    DELETE_TODO
} from './../constants';

import { stopTimeTodo, tickTodo } from './../actions';

let timer;

const timerMiddleware = store => next => action => {
            if (action.type === START_TIME_TODO) {
                const storage = store.getState().todos;

                storage.forEach(item => {
                    if (item.isOn) {
                        clearInterval(timer);
                        store.dispatch(stopTimeTodo(item.id));
                    }
                });

                timer = setInterval(() => store.dispatch(tickTodo(action.id)), 1000);
            } else if (
                action.type === STOP_TIME_TODO || action.type === DELETE_TODO
            ) {
                clearInterval(timer);
            }
            next(action);
        };


export default timerMiddleware;
