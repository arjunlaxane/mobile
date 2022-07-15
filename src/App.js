import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

// const API = 'http://localhost:4000';
const API = 'https://arjunlaxane-node-app.herokuapp.com';
function App() {
  // const mobiles = [
  //   {
  //     model: 'OnePlus 9 5G',
  //     img: 'https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg',
  //     company: 'Oneplus',
  //   },
  //   {
  //     model: 'Iphone 13 mini',
  //     img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-mini-blue-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1645572315986',
  //     company: 'Apple',
  //   },
  //   {
  //     model: 'Samsung s21 ultra',
  //     img: 'https://m.media-amazon.com/images/I/81kfA-GtWwL._SY606_.jpg',
  //     company: 'Samsung',
  //   },
  //   {
  //     model: 'Xiomi mi 11',
  //     img: 'https://m.media-amazon.com/images/I/51K4vNxMAhS._AC_SX522_.jpg',
  //     company: 'Xiomi',
  //   },
  // ];

  const [mobiles, setMobiles] = useState([]);
  //we use useeffect to get data from api
  //at api data is available so usestate hook is working
  useEffect(() => {
    fetch(`${API}/mobiles`)
      .then(data => data.json())
      .then(mobiles => setMobiles(mobiles));
  }, []);
  //[]->dependency array must be empty, so that it will be called only once.but u know that in react 18 it will be called twice in development but in netlify it will be called only once
  //why call twice: react is double checking for any errors happening

  //http://localhost:4000/mobiles
  return (
    <div className="App">
      <div className="phone-list-container">
        {mobiles.map(mobile => (
          <Phone key={mobile._id} mobile={mobile} />
        ))}
      </div>
    </div>
  );
}

function Phone({ mobile }) {
  return (
    <div className="phone-container">
      <img src={mobile.img} alt={mobile.model} className="phone-picture" />
      <h2 className="phone-name">{mobile.model}</h2>
      <p className="phone-company">{mobile.company}</p>
    </div>
  );
}

export default App;
//function 1st letter capital
//it should return 1 jsx element
