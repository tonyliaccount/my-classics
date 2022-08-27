import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { ReactReader } from "react-reader";

import axios from 'axios';

function ReaderPage() {

  const params = useParams();

  const [location, setLocation] = useState(null);
  const [bookUrl, setBookUrl] = useState('');

  const locationChanged = (epubcifi) => {
    // epubcifi is a internal string used by epubjs to point 
    // to a location in an epub. It looks like this: 
    // epubcfi(/6/6[titlepage]!/4/2/12[pgepubid00003]/3:0)
    setLocation(epubcifi)
  }

  useEffect(() => {

    const fetchBook = async() => {
      const epubLocation = await axios.get(`https://myclassics-api.herokuapp.com/books/${params.id}`);
      
      console.log(epubLocation?.data);
      
      if (epubLocation?.data) {
        setBookUrl(`https://myclassics-api.herokuapp.com/${epubLocation.data}`);
      }
    }

    fetchBook().catch(error =>{
      console.log(error)
    });

  }, [params]);

  return (
    <div style={{ height: "100vh" }}>
      <ReactReader
        location={location}
        locationChanged={locationChanged}
        showToc={true}
        url={ bookUrl }
      />
    </div>
  );
}

export default ReaderPage;