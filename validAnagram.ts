function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const arr: number[] = new Array(26).fill(0);

    for (let ch of s) {
        const idx = ch.charCodeAt(0) - 'a'.charCodeAt(0);
        arr[idx]++;
    }

    for (let ch of t) {
        const idx = ch.charCodeAt(0) - 'a'.charCodeAt(0);
        arr[idx]--;
    }

    for (let count of arr) {
        if (count !== 0) return false;
    }

    return true;
}
