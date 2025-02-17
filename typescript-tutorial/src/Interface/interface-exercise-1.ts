// Defining a Movie Interface
// 1️⃣ Define an interface Movie with the following properties:

// id (readonly, number)
// title (string)
// director (string)
// releaseYear (number)
// genre (optional, string)
// 2️⃣ Create a constant object inception that follows the Movie interface structure.



interface movie {
  readonly id: number;
  title: string;
  director: string;
  releaseYear: number;
  genre?: string;
}

const newMovie: movie = {
  id: 1,
  title: "Rampage",
  director: "The Rock",
  releaseYear: 2019,
  genre: "Action",
};

console.log(newMovie);
