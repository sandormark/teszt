import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';



const Home = () => {
const [data, setData] = useState([]);

useEffect(() => {
  fetchDataFromAPI();
}, []);

const fetchDataFromAPI = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/data'); // Példa
    setData(response.data);
    console.log(response);
  } catch (error) {
    console.error('Hiba az adatok lekérése során:', error);
  }
};
return (<div>Kezdőlap
        <h1>Adatok</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.email}</li>
        ))}
      </ul>
</div>);
};
export default Home;