var groupAnagrams = function (strs) {
    var map = new Map();
    for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
        var word = strs_1[_i];
        var key = word.split("").sort().join("");
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(word);
    }
    return Array.from(map.values());
};
