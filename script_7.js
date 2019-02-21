const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 9 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 2 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 6 },
  { title: 'Les frères Karamazov', id: 450911, rented: 5 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// Est-ce que tous les livres ont été au moins empruntés une fois ?
sortedByRentsBooks = books.sort((a, b) => a["rented"] > b["rented"]);
allRentedStatus = sortedByRentsBooks[0]["rented"] > 0 ? "All books have been rented" : "Not all books have been rented";
console.log(allRentedStatus);

// Quel est livre le plus emprunté ?""
console.log('Most rented book:');
console.dir(sortedByRentsBooks[books.length - 1]);

// Quel est le livre le moins emprunté ?
console.log('Less rented book:');
console.dir(sortedByRentsBooks[0]);

// Trouve le livre avec l'ID: 873495

books.forEach(book => {
    if (book["id"] === 873495) {
        console.log("Book with ID 873495 found");
        console.dir(book);
    }
});

// Supprime le livre avec l'ID: 133712

books.forEach((book, index) => {
    if (book["id"] === 133712) {
        console.log("Book with 133712 found. Action: delete.");
        books.splice(index, 1);
        console.log("New books array");
        console.dir(books);
    }
});


// Trie les livres par ordre alphabétique
sortedByAlphabetBooks = books.sort(
  (a, b) => a["title"].localeCompare(b["title"], 
    'fr', {ignorePunctuation: true})
  );
console.log("Books by alphabetical order:");
console.dir(sortedByAlphabetBooks);