export const saveToLocalStorage = (key: string, data: string) => {
    try {
        localStorage.setItem(key, data);
    } catch {
        // do nothing
    }
};

export const getLocalStorageItem = <T>(key: string, defaultValue: T): T => {
    try {
        const item = localStorage.getItem(key);
        if (item) {
            return JSON.parse(item);
        }
    } catch {
        // do nothing
    }
    return defaultValue;
};
