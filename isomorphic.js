var isIsomorphic = function (s, t) {
    var map1 = new Map();
    var map2 = new Map();
    for (var i = 0; i < s.length; i++) {
        if (map1.has(s[i]) && map1.get(s[i]) !== t[i]) {
            return false;
        }
        else {
            map1.set(s[i], t[i]);
        }
        if (map2.has(t[i]) && map2.get(t[i]) !== s[i]) {
            return false;
        }
        else {
            map2.set(t[i], s[i]);
        }
    }
    return true;
};
