let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

for (let chr of par) {
    const c = chr.toLowerCase();

    if (c == ' ') {
        continue;
    }

    if (c in counts) {
        counts[c]++;
    } else {
        counts[c] = 1;
    }
}

console.log(counts);
