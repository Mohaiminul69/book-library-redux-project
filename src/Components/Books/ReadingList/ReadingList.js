import React from 'react';
import { Alert } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import SingleReadingListBook from '../SingleReadingListBook/SingleReadingListBook';

const ReadingList = () => {
    const readingList = useSelector((state) => state.books.readingList);

    return (
        <div>
            {readingList.length === 0 && <Alert variant="primary">
                Looks like your Reading List is empty, Find books from Discover Books.
            </Alert>}

            {
                readingList.map(book => <SingleReadingListBook
                    key={book.id}
                    book={book}
                />)
            }
        </div>
    );
};

export default ReadingList;