
let books = [
    {
      author: 'Bill Gates',
      title: 'The Road Ahead',
      readingStatus: true
    },
    {
      author: 'Steve Jobs',
      title: 'Walter Isaacson',
      readingStatus: true
    },
    {
      author: 'Suzanne Collins',
      title: 'Mockingjay: The Final Book of The Hunger Games',
      readingStatus: false
    }
  ];
  
  for (let i = 0; i < books.length; i++) {
    let book = books[i];
    let authorName = book.author.toUpperCase();
    let bookStatus = book.readingStatus ? 'already read' : 'need to read';
    console.log('I ' + bookStatus + ' ' + book.title + ' by ' + authorName + '.');
  }
  