import React from "react";
import { Button } from "react-bootstrap";

const Pagination = ({ postsPerPage, totalPosts }) => {
  return (
    <>
      <Button variant="light" onClick={() => onClickPrev()}>
        Previous Page
      </Button>
      <Button variant="light">Next Page </Button>
    </>
  );
};

export default Pagination;
