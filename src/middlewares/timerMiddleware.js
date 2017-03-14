import {
    START_TIME_TODO,
    TICK_TODO,
    STOP_TIME_TODO
} from './../constants';

import { tickTodo } from './../actions';

const timerMiddleware = store => next => action => {
    if (action.type === START_TIME_TODO) {
        const storage = store.getState().todos;

        storage.forEach((item) => {
           if (item.isOn){
               store.dispatch({
                   type: STOP_TIME_TODO,
                   id: item.id,
                   intervalID: item.intervalID
               });
               clearInterval(item.intervalID);
           }
        });

      action.intervalID = setInterval(() =>
           store.dispatch({
               type: TICK_TODO,
               id: action.id,
               intervalID: action.intervalID
           })
           , 1000);

    } else if (action.type === STOP_TIME_TODO) {
        clearInterval(action.intervalID);
    }
    next(action);
};

export default timerMiddleware;
