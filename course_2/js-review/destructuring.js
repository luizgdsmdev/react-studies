const data = [
  {
    id: 1,
    title: "Dune",
    publicationDate: "1965-08-01",
    author: "Frank Herbert",
    genres: ["Science Fiction", "Adventure", "Fantasy"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: ["English", "Portuguese", "Spanish", "French", "German"],
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingCount: 2356789,
        reviewsCount: 115421,
      },
      librarything: {
        rating: 5,
        ratingCount: 895876,
        reviewsCount: 95312,
      },
    },
  },
  {
    id: 2,
    title: "Nineteen Eighty-Four",
    publicationDate: "1949-06-08",
    author: "George Orwell",
    genres: ["Dystopian", "Science Fiction", "Political"],
    hasMovieAdaptation: true,
    pages: 328,
    translations: [
      "English",
      "Portuguese",
      "Spanish",
      "French",
      "German",
      "Japanese",
    ],
    reviews: {
      goodreads: {
        rating: 4.18,
        ratingCount: 5421098,
        reviewsCount: 189256,
      },
      librarything: {
        rating: 4.1,
        ratingCount: 25876,
        reviewsCount: 1345,
      },
    },
  },
  {
    id: 3,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    publicationDate: "1954-07-29",
    author: "J.R.R. Tolkien",
    genres: ["Fantasy", "Adventure", "Epic"],
    hasMovieAdaptation: true,
    pages: 423,
    translations: [
      "English",
      "Portuguese",
      "Spanish",
      "French",
      "German",
      "Russian",
    ],
    reviews: {
      goodreads: {
        rating: 4.5,
        ratingCount: 6890123,
        reviewsCount: 256879,
      },
      librarything: {
        rating: 4.45,
        ratingCount: 35789,
        reviewsCount: 2134,
      },
    },
  },
  {
    id: 4,
    title: "One Hundred Years of Solitude",
    publicationDate: "1967-05-30",
    author: "Gabriel García Márquez",
    genres: ["Magic Realism", "Classic Literature", "Drama"],
    hasMovieAdaptation: false,
    pages: 417,
    translations: [
      "Spanish",
      "Portuguese",
      "English",
      "French",
      "Italian",
      "Chinese",
    ],
    reviews: {
      goodreads: {
        rating: 4.09,
        ratingCount: 1245678,
        reviewsCount: 67890,
      },
      librarything: {
        rating: 4.05,
        ratingCount: 8765,
        reviewsCount: 432,
      },
    },
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    publicationDate: "1951-07-16",
    author: "J.D. Salinger",
    genres: ["Fiction", "Classic Literature", "Young Adult"],
    hasMovieAdaptation: false,
    pages: 277,
    translations: ["English", "Portuguese", "Spanish", "Japanese", "Korean"],
    reviews: {
      goodreads: {
        rating: 3.82,
        ratingCount: 3567891,
        reviewsCount: 154321,
      },
      librarything: {
        rating: 3.75,
        ratingCount: 18765,
        reviewsCount: 987,
      },
    },
  },
  {
    id: 6,
    title: "Murder on the Orient Express",
    publicationDate: "1934-01-01",
    author: "Agatha Christie",
    genres: ["Mystery", "Crime", "Suspense"],
    hasMovieAdaptation: true,
    pages: 256,
    translations: [
      "English",
      "Portuguese",
      "Spanish",
      "French",
      "German",
      "Russian",
    ],
    reviews: {
      goodreads: {
        rating: 4.14,
        ratingCount: 1890123,
        reviewsCount: 87654,
      },
      librarything: {
        rating: 4.1,
        ratingCount: 12345,
        reviewsCount: 678,
      },
    },
  },
  {
    id: 7,
    title: "The Little Prince",
    publicationDate: "1943-04-06",
    author: "Antoine de Saint-Exupéry",
    genres: ["Fable", "Children's Literature", "Philosophy"],
    hasMovieAdaptation: true,
    pages: 96,
    translations: [
      "French",
      "Portuguese",
      "English",
      "Spanish",
      "Japanese",
      "Chinese",
    ],
    reviews: {
      goodreads: {
        rating: 4.31,
        ratingCount: 4210987,
        reviewsCount: 165432,
      },
      librarything: {
        rating: 4.25,
        ratingCount: 21876,
        reviewsCount: 1234,
      },
    },
  },
  {
    id: 8,
    title: "The Fault in Our Stars",
    publicationDate: "2012-01-10",
    author: "John Green",
    genres: ["Young Adult", "Romance", "Drama"],
    hasMovieAdaptation: true,
    pages: 313,
    translations: ["English", "Portuguese", "Spanish", "German", "French"],
    reviews: {
      goodreads: {
        rating: 4.19,
        ratingCount: 5678901,
        reviewsCount: 234567,
      },
      librarything: {
        rating: 4.15,
        ratingCount: 28901,
        reviewsCount: 1456,
      },
    },
  },
  {
    id: 9,
    title: "The Great Gatsby",
    publicationDate: "1925-04-10",
    author: "F. Scott Fitzgerald",
    genres: ["Classic Literature", "Drama", "Tragedy"],
    hasMovieAdaptation: true,
    pages: 180,
    translations: ["English", "Portuguese", "Spanish", "French", "Italian"],
    reviews: {
      goodreads: {
        rating: 3.93,
        ratingCount: 4890123,
        reviewsCount: 178901,
      },
      librarything: {
        rating: 3.85,
        ratingCount: 24567,
        reviewsCount: 1123,
      },
    },
  },
  {
    id: 10,
    title: "The Diary of a Young Girl",
    publicationDate: "1947-06-25",
    author: "Anne Frank",
    genres: ["Biography", "History", "Memoir"],
    hasMovieAdaptation: true,
    pages: 304,
    translations: [
      "Dutch",
      "Portuguese",
      "English",
      "Spanish",
      "German",
      "Japanese",
    ],
    reviews: {
      goodreads: {
        rating: 4.17,
        ratingCount: 3123456,
        reviewsCount: 134567,
      },
      librarything: {
        rating: 4.1,
        ratingCount: 16789,
        reviewsCount: 890,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((book) => book.id === id);
}

let books = getBooks();
//Destructuring object
let { genres } = { ...books[0] };

//Destructuring an array, and using spread
let [primaryGenre, ...related] = [...genres];

//Destructuring an Object and adding new values
let reviews = {
  ...books[1].reviews,
  movieRating: { rating: 4.9, ratingCount: 5421098, reviewsCount: 189256 },
};

//Destructuring an Object and overiding a value
//Original: goodreads: { rating: 4.18, ratingCount: 5421098, reviewsCount: 189256 },
let reviewsUpdate = {
  ...books[1].reviews,
  goodreads: { rating: 5, ratingCount: 999999999, reviewsCount: 999999999 },
};

//Destructuring an Array and adding new values
//Orignial: ['Science Fiction', 'Adventure', 'Fantasy']
let [...genresList] = [...genres, "Terror"];

//Destructuring an Array and adding new values, plus destructuring a Set() to avoid duplicates
let arrayList = [1, 2, 3, 4, 5, 6];
let newArray = [...new Set([...arrayList, 6, 7, 8])];

//Optional chaining
function getTotalReviews(obj) {
  let sumReviews = 0;

  //regular approach
  for (let reviewType in obj) {
    sumReviews += obj[reviewType].reviewsCount;
  }

  //Optional chaining (with '?') approach (example only)
  const goodreads = obj.goodreads?.reviewsCount || 0;
  const librarything = obj.librarything?.reviewsCount || 0;
  sumReviews = goodreads + librarything;

  return sumReviews;
}

let reviwsList = { ...books[0].reviews };
reviwsList;
console.log(getTotalReviews(reviwsList));
