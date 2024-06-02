import store from 'store2';

const SITE_DATA_KEY = 'site_data';

export function getStoredData() {
    return store.get(SITE_DATA_KEY);
}

export function setStoredData(data: any) {
    store.set(SITE_DATA_KEY, data);
}
