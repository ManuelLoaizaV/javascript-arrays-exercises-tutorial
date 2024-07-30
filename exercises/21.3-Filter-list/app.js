let names = ['Liam','Emma','Noah','Olivia','William','Ava','James','Isabella','Logan','Sophia','Benjamin','Mia','Mason','Charlotte','Elijah','Amelia','Oliver','Evelyn','Jacob','Abigail','Lucas','Harper','Michael','Emily','Alexander','Elizabeth','Ethan','Avery','Daniel','Sofia','Matthew','Ella','Aiden','Madison','Henry','Scarlett','Joseph','Victoria','Jackson','Aria','Samuel','Grace','Sebastian','Chloe','David','Camila','Carter','Penelope','Wyatt','Riley'];

function filterByName(arr, substr) {
    const lowerCaseSubstr = substr.toLowerCase();
    const result = arr.filter(name => {
        const lowerCaseName = name.toLowerCase();
        return lowerCaseName.includes(lowerCaseSubstr);
    });
    return result;
}

console.log(filterByName(names, 'am'));
