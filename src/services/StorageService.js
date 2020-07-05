class StorageServiceImp {
    set(key, value) {
        const valueToStore = JSON.stringify(value);
        sessionStorage.setItem(key, valueToStore);
        return valueToStore;
    }
    get(key) {
        return JSON.parse(sessionStorage.getItem(key))
    }
    logOut() {
        return sessionStorage.removeItem("accessToken")
    }
}

export const storageService = new StorageServiceImp();