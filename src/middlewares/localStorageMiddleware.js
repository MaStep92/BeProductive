import { setStorage } from '../utils/localStorage';

const localStorageMiddleware = store => next => action => {
    const nextAction = next(action);
    const state = store.getState();

    setStorage('todos', state.todos);

    return nextAction;
};

export default localStorageMiddleware;
