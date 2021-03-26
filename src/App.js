import React, { useEffect } from 'react';
import axios from 'axios';
// import { Counter } from './features/counter/Counter';
import './App.css';
import { useFetchData } from './helpers/hooks';

function App() {
  const { status, data } = useFetchData('data.json');
  useEffect(() => {

    console.log('DRDZ : ', data);
  }, [data]);

  return (
    <div className="App">
      dsjfhdskjgfkjdsk
    </div>
  );
}

export default App;
