export default class DataStorage {
    setStorage(key, data) {
        localStorage.setItem(key, data);
    }
    getStorage(key) {
        return localStorage.getItem(key);
    }
    removeStorage(key) {
        localStorage.removeItem(key);
    }
    clearStorage(key, data){
        localStorage.clear(key, data);
    }
}
