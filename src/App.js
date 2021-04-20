import "./App.css";
import React, { useEffect, useState } from "react";
import { data } from "./mockdata";
import { useHistory, useLocation } from "react-router-dom";

function App() {
  const [pagedData, setPagedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  let history = useHistory();
  let location = useLocation();

  const requestDocument = async (requestPage = currentPage) => {
    const totalDocumentPerPage = 5;
    const page = requestPage ? requestPage : 1;
    const startDocumentId = totalDocumentPerPage * page - totalDocumentPerPage;
    const endDocumentId = totalDocumentPerPage * page;
    const pagingDocument = async () => {
      let arr = [];
      for (let i = startDocumentId; i < endDocumentId; i++) {
        if (data[i]) arr.push(data[i]);
      }
      return arr;
    };
    const pagedDocument = await pagingDocument();
    return setPagedData(pagedDocument);
  };

  useEffect(() => {
    requestDocument();
  }, [location]);

  const handleClick = id => {
    history.push(`/document/details/${id}`);
  };
  const handlePageChange = page => {
    setCurrentPage(page);
    requestDocument(page);
    history.push(`/?page=${page}&sortby=title&or=asc`);
  };

  return (
    <div>
      <div>
        {pagedData.map(item => (
          <ul key={item.id}>
            <li key={item.id}>{item.title}</li>
            <button onClick={() => handleClick(item.id)}>
              {item.title} Details
            </button>
          </ul>
        ))}
      </div>

      <div>
        <ul>
          <button onClick={() => handlePageChange(1)}>page 1</button>
          <button onClick={() => handlePageChange(2)}>page 2</button>
          <button onClick={() => handlePageChange(3)}>page 3</button>
        </ul>
      </div>
    </div>
  );
}

export default App;
