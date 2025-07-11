var HashMap = /** @class */ (function () {
    function HashMap(size) {
        if (size === void 0) { size = 10; }
        this.size = size;
        this.buckets = new Array(this.size);
    }
    HashMap.prototype.hash = function (key) {
        var strg = String(key);
        var hash = 0;
        for (var i = 0; i < strg.length; i++) {
            hash = (hash + strg.charCodeAt(i) * 1) % this.size;
        }
        return hash;
    };
    HashMap.prototype.set = function (key, value) {
        var index = this.hash(key);
        this.buckets[index] = [key, value];
    };
    HashMap.prototype.get = function (key) {
        var index = this.hash(key);
        var bucket = this.buckets[index];
        if (bucket && bucket[0])
            return bucket[1];
        return undefined;
    };
    HashMap.prototype.delete = function (key) {
        var index = this.hash(key);
        delete this.buckets[index];
        // or
        /* if (this.buckets[index] && this.buckets[index]![0] === key) {
            this.buckets[index] = undefined;
            return true
        }
        return false; */
    };
    return HashMap;
}());
var myhashMap = new HashMap();
myhashMap.set("name", "fathia");
myhashMap.set("age", 20);
myhashMap.set("shape", "figure 8");
console.log(myhashMap);
console.log(myhashMap.delete("name"));
console.log(myhashMap);
