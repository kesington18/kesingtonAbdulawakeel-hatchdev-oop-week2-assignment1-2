class HashMap<K, V> {
    private buckets: Array<[K, V] | undefined>;
    private size: number;

    constructor(size: number = 10) {
        this.size = size;
        this.buckets = new Array(this.size);
    }

    private hash(key: K): number{
        const strg = String(key);
        let hash = 0;
        for (let i = 0; i < strg.length; i++) {
            hash = (hash + strg.charCodeAt(i) * 1) % this.size;
        }
        return hash;
    }

    set(key: K, value: V){
        const index = this.hash(key);
        this.buckets[index] = [key, value];
    }
    
    get(key: K): V | undefined{
        const index = this.hash(key);
        const bucket = this.buckets[index];
        if(bucket && bucket[0])return bucket[1];
        return undefined;
    }

    delete(key: K){
        const index = this.hash(key);
        delete this.buckets[index];
        // or
        /* if (this.buckets[index] && this.buckets[index]![0] === key) {
            this.buckets[index] = undefined;
            return true
        }
        return false; */
    }
}

const myhashMap = new HashMap()
myhashMap.set("name", "fathia");
myhashMap.set("age", 20);
myhashMap.set("shape", "figure 8");

console.log(myhashMap);
console.log(myhashMap.delete("name"));
console.log(myhashMap);