import React from 'react';
import { Alert } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import SingleFinishedListBook from '../SingleFinishedListBook/SingleFinishedListBook';

const FinishedList = () => {
    const finishedList = useSelector((state) => state.books.finishedList);

    return (
        <div>
            {finishedList.length === 0 && <Alert variant="primary">
                Looks like your Finished List is empty, Read Books to your heal your mind
            </Alert>}

            {
                finishedList.map(book => <SingleFinishedListBook
                    key={book.id}
                    book={book}
                />)
            }
        </div>
    );
};

export default FinishedList;