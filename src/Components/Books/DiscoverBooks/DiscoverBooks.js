import React, { useEffect } from "react";
import SingleDiscoverBook from "../SingleDiscoverBook/SingleDiscoverBook";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchBooks } from "./../../../redux/slices/bookSlice";

const DiscoverBooks = () => {
  const books = useSelector((state) => state.books.discover);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <div>
      <div className="px-2">
        <h3>Discover Books</h3>
        <div className="py-2">
          {books.map((book) => (
            <SingleDiscoverBook key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverBooks;
