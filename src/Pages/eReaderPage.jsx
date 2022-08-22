import React, { useEffect, useState } from "react";
import { ReactReader } from "react-reader";

function eReaderPage() {

  const [location, setLocation] = useState(null);
  const [bookUrl, setBookUrl] = useState("http://localhost:8080/books/testbook.epub");

  const locationChanged = (epubcifi) => {
    // epubcifi is a internal string used by epubjs to point 
    // to a location in an epub. It looks like this: 
    // epubcfi(/6/6[titlepage]!/4/2/12[pgepubid00003]/3:0)
    setLocation(epubcifi)
  }

  useEffect(() => {

    /* const fetchBook = async() => {
      const book = axios.get('http://localhost:8080/warehouse');
    }

    fetchBook().catch(error =>{
      console.log(error)
    }); */

  }, []);

  return (
    <div style={{ height: "100vh" }}>
      <ReactReader
        location={location}
        locationChanged={locationChanged}
        showToc={true}
        url={bookUrl}
      />
    </div>
  );
}
