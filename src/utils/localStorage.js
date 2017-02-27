export function setStorage(key, todos) {
    localStorage.setItem(key, JSON.stringify(todos));
}

export function getStorage(key) {
    try {
        return JSON.parse(localStorage.getItem(key) || []);
    } catch (e) {
        return [];
    }
}
