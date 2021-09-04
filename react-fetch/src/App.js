import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  let url = 'https://jsonplaceholder.typicode.com/todos/1';
  let [isData, setData] = useState({ title: 'Waiting for Data' });
  let [isFetching, setFetching] = useState(false);

  //Defining an asynch function to fetch data
  const dataFetch = async () => {
    setFetching(true);
    let response = await fetch(url);
    setData(await response.json());
    setFetching(false);
  }

  useEffect(() => {
    dataFetch();
  },[]) //empty 2nd argument, effect will be executed only on first render

  if (isFetching) {
    return(
      <div>
        <h2>Home</h2>
        <h3>Loading Data....</h3>
      </div>
    )
  }

  return (
    <div>
      <h2>HOME</h2>
      <h3>Fetching Data using useEffect</h3>
      <h5>Title:  {isData.title}</h5>
    </div>
  );
}

export default App;
