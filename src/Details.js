import React, { useEffect, useState } from "react";
import { data } from "./mockdata";
import { useParams } from "react-router-dom";

function Details() {
  let { id } = useParams();
  const [documentDetails, setDocumentDetails] = useState({});

  const requestDocumentDetails = id => {
    const docId = Number(id);
    data.map(doc => {
      if (doc.id === docId) {
        setDocumentDetails(doc);
      }
    });
  };

  useEffect(() => {
    requestDocumentDetails(id);
  }, []);
  return (
    <div>
      <div>id: {documentDetails.id}</div>
      <div>title: {documentDetails.title}</div>
      <div>description: {documentDetails.desc}</div>
    </div>
  );
}

export default Details;
