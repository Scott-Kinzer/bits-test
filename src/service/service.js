
function ApiBooks() {

    this.fetchAllBooks = () => {
        return fetch('http://localhost:3004/books').then(books => books.json());
    }

    this.DeleteCurrentBook = (id) => {
        return fetch(`http://localhost:3004/books/${id}`,
            {
                method: 'DELETE'
            }
        ).then(books => books.json());
    }

    this.PostCurrentBook = (book) => {
        return fetch(`http://localhost:3004/books/`,
            {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(book)
            }
        );
    }

    this.EditCurrentBook = (book) => {
        return fetch(`http://localhost:3004/books/${book.id}`,
            {
                method: 'PATCH',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(book)
            }
        );
    }

}

const apiIntance = new ApiBooks();
export default apiIntance;
