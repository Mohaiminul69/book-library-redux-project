import React from 'react';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SingleDiscoverBook from '../SingleDiscoverBook/SingleDiscoverBook';

const ReadingList = () => {
    const readingList = useSelector((state) => state.books.readingList);

    return (
        <div>
            {readingList.length === 0 && <Alert variant="primary">
                Looks like your Reading List is empty, Add Books to your &nbsp;
                <Link to="/books" className='text-decoration-none'>Discover Books</Link>
            </Alert>}

            {
                readingList.map(book => <SingleDiscoverBook
                    key={book.name}
                    book={book}
                />)
            }
        </div>
    );
};

export default ReadingList;