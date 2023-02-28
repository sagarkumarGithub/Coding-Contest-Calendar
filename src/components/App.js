import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "./Card";
const URL = "https://kontests.net/api/v1/all";

function App() {
  const [contests, setContest] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(URL);
      const data = res.data;
      if (data.length > 0) {
        setContest(data);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(URL);
  }, []);

  return (
    <>
      <div className="wrapper">
        <h1>Coding Contest Calender</h1>
        <div className="container">
          <Card contests={contests} />;
        </div>
      </div>
    </>
  );
}

export default App;
