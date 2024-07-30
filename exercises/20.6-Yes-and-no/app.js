let theBools = [0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

const result = theBools.map(x => {
    if (x == 0) {
        return "woko";
    }
    return "wiki";
});

console.log(result);