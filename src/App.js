import React, { useEffect, useState} from "react";
import "./App.css";
import axios from 'axios';
import MyNasaCard from './components/MyNasaCard';

function App() {
  const [nasa, setNasa] = useState([])
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
      setNasa(res.data);
    })
    .catch(err => console.error(err));
  }, [])
    
  return (
    <div className="App">
      {nasa && <MyNasaCard data = {nasa} />}
    </div>
  );
}

export default App;
