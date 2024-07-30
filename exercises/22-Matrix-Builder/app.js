function matrixBuilder(n) {
    const matrix = [];
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            row.push(Math.floor(2 * Math.random()));
        }
        matrix.push(row);
    }
    return matrix;
}

// Do not change anything from this line down
console.log(matrixBuilder(5))
