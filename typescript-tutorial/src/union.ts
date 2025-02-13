// The union type help us to select multiple options

let tax: number | string = 10
tax = "ten" //I can assign either number or string to the variable

console.log(tax);

//It also works for assinging multiple options rather than just number or string.

let requestStatus: 'success' | 'pending' | 'error' = 'pending';
requestStatus = 'success'


// Array of books

const books = ['1984', 'a woman in her prime', 'Arms and the man', 'women of owu'];

let foundBook: any = null;

for (const book of books) {
    if (book === '1984') {
        foundBook = book
        break;
    }
}

console.log(foundBook);
