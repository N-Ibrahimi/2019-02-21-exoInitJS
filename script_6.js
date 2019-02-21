const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];


    // Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70
const bornInThe70s = entrepreneur => (entrepreneur["year"].toString()[2] == 7);

const entrepreneurs70s = entrepreneurs.filter(bornInThe70s);

console.log(`Entrepreneurs born in the 70s are:`);
console.dir(entrepreneurs70s);

    // Sors une array qui combine le prénom et le nom des entrepreneurs

const fullNamePusher = (accumulatorArray, 
  currentEntrepreneur) => { 
    let fullName = currentEntrepreneur["first"] + " " + currentEntrepreneur["last"];
    accumulatorArray.push(fullName);
    return accumulatorArray;
  };

const fullNamesEntrepreneurs = entrepreneurs.reduce(fullNamePusher, []);

console.log(`Entrepreneurs full names are:`);
console.dir(fullNamesEntrepreneurs);

    // Quel âge aurait chaque inventeur aujourd'hui ?
console.log("**********How old each entrepreneur would be today :")

entrepreneurs.forEach(entrepreneur => {
  let fullName = entrepreneur["first"] + " " + entrepreneur["last"]; 
  let currentAge = 2019 - entrepreneur["year"];
  console.log(`${fullName} would be ${currentAge} years old in 2019 (rounded up).`);
});

// Trie les inventeurs par ordre alphabétique du nom de famille
sortedEntrepreneurs = entrepreneurs.sort(
  (a, b) => a["last"].localeCompare(b["last"], 
    'en', {ignorePunctuation: true})
  );

console.log(`Array sorted by family name (Alphabetical order)`)
console.dir(sortedEntrepreneurs);
