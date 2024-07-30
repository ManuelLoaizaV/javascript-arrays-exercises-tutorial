function lyricsGenerator(arr) {
    let streak = 0;
    const phrases = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            phrases.push("Boom");
            streak = 0;
        } else {
            phrases.push("Drop the bass");
            streak++;
        }
        if (streak >= 3) {
            phrases.push("!!!Break the bass!!!");
        }
    }
    return phrases.join(" ");
}


// Don't change anything below this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))
