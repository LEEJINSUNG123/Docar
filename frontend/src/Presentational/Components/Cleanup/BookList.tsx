import React, { useState, useEffect } from 'react';
import BookItem from './BookItem';
import * as BookStyle from './BookList_Style';
import axios from 'axios';
import BottomBtn from './../../Common/BottomBtn';
import { useNavigate } from 'react-router-dom';
import BookTable from './../BookTable';

interface Props {
  books: [];
}

function BookList() {
  const [books, setBooks] = useState<[]>([]);
  const navigate = useNavigate();
  const [route, setRoute] = useState<number[]>([1, 2, 3]);

  const GetBooks = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => {
      console.log(res.data);
      setBooks(res.data);
    });
  };

  useEffect(() => {
    GetBooks();
  }, []);

  const id = 1;

  return (
    <>
      <BookStyle.Title>카트 도서 목록</BookStyle.Title>
      {/* <BookStyle.WrapBooks>
        {books.map((book) => (
          <BookItem book={book} />
        ))}
      </BookStyle.WrapBooks> */}
      <BookTable />
      {/* 여기서 이동할 때 이동해야할 책장 경로 */}
      <BottomBtn
        message="이동하기"
        go={() => {
          navigate(`${id}`);
        }}
      />
    </>
  );
}

export default BookList;
