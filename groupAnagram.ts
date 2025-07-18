function groupAnagrams(strs: string[]): string[][] {
    const map: Map<string, string[]> = new Map();

    for (const word of strs) {
        const key = word.split("").sort().join("");

        if (!map.has(key)) {
            map.set(key, []);
        }

        map.get(key)!.push(word); // Use `!` to tell TypeScript we're sure it's not undefined
    }

    return Array.from(map.values());
}
