export default class StorageHelper {
    public static setItem(key: string, value:any){
        localStorage.setItem(key,JSON.stringify(value));
    }

    public static getItem(key: string){
        try {
            return JSON.parse(localStorage.getItem(key)!);
        }catch(e){
            return null;
        }
    }
}