const __DEV__ = true;

export function getItem(key) {
    let value;
    try {
        value = localStorage.getItem(key);
    } catch (ex) {
        if (__DEV__) {
            console.log('localStorage.getItem报错', ex.message);
        }
    } finally {
        return value;
    }
}

export function setItem(key, value) {
    try {
        // ios safari 无痕模式下，直接使用 localStorage.setItem 会报错
        localStorage.setItem(key, value);
    } catch (ex) {
        if (__DEV__) {
            console.log('localStorage.setItem', ex.message);
        }
    }
}
