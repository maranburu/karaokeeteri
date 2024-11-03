const getRandom = (items) => items[Math.floor(Math.random()*items.length)];

const probability = (n) => {
    return !!n && Math.random() <= n;
};

const isVocal = (c) => !!['a', 'e', 'i', 'o', 'u'].find(v => v === c);

const multiplyVocals = (n, prob) => {
    return n.split('').map((c) => {
        if (probability(prob || 0.2) && isVocal(c)) {
            if (probability(0.2)) {
                c = c.replace("a", "aaaaa");
                c = c.replace("e", "eeeee");
                c = c.replace("i", "iiiii");
                c = c.replace("o", "ooooo");
                c = c.replace("u", "uuuuu");
            } else {
                c = c.replace("a", "aaa");
                c = c.replace("e", "eee");
                c = c.replace("i", "iii");
                c = c.replace("o", "ooo");
                c = c.replace("u", "uuu");
            }
        }
        return c;
    }).join('');
};

const capitalize = (word: string) => {
    return word[0].toUpperCase() + word.slice(1);
}

export {
    getRandom,
    probability,
    multiplyVocals,
    capitalize,
    isVocal,
};