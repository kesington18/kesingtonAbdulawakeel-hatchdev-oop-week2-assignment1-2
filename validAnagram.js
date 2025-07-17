function isAnagram(s, t) {
    if (s.length !== t.length)
        return false;
    var arr = new Array(26).fill(0);
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var ch = s_1[_i];
        var idx = ch.charCodeAt(0) - 'a'.charCodeAt(0);
        arr[idx]++;
    }
    for (var _a = 0, t_1 = t; _a < t_1.length; _a++) {
        var ch = t_1[_a];
        var idx = ch.charCodeAt(0) - 'a'.charCodeAt(0);
        arr[idx]--;
    }
    for (var _b = 0, arr_1 = arr; _b < arr_1.length; _b++) {
        var count = arr_1[_b];
        if (count !== 0)
            return false;
    }
    return true;
}
