import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { StorageValues } from './storage-values';

const { Storage } = Plugins;

@Injectable({
    providedIn: 'root'
})
export class StorageItem extends StorageValues {

    /**
     * save on local an object
     * @param id 
     * @param object 
     */
    async setObject(id, object): Promise<boolean> {
        let toSave = stringify(object);
        try {
            await Storage.set({
                key: id,
                value: toSave
            });
            return true;
        } catch {
            return false
        }
    }

    /**
     * Get from local object (Array, List, etc)
     * @param id 
     */
    async getObject(id) {
        const ret = await Storage.get({ key: id });
        return JSON.parse(ret.value);
    }

    /**
     * Save on local Item (String, bool, number)
     * @param id 
     * @param item 
     */
    async setItem(id, item): Promise<boolean> {
        let toSave = stringify(item);
        try {
            await Storage.set({
                key: id,
                value: toSave
            });
            return true;
        } catch {
            return false;
        }

    }

    /**
     *  Get from local Item (String, bool, number)
     * @param id 
     */
    async getItem(id) {
        const ret = await Storage.get({ key: id });
        return ret.value;

    }

    async removeItem(id) {
        await Storage.remove({ key: id });
    }

    keys() {
        return Storage.keys();
    }

    async clear() {
        await Storage.clear();
    }

}