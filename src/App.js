import { useState, useEffect } from 'react';
import './App.css';
import { Helmet } from "react-helmet";
import Title from './components/Title';
import Cards from './components/Cards';
import Card from './components/Card';

function App() {

  //const [pokemones, changePokemon] = useState([]);
  const [pokeId, changePokeId] = useState(7);

  const [result, setResult] = useState([]);
  const [poke, setPoke] = useState([]);
  const [load, setLoad] = useState('true');
  const arr = [];

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
      .then((response) => response.json())
      .then((data) => setResult(
        data.results.map((item) => {
          fetch(item.url)
            .then((response) => response.json())
            .then((allpokemon) => arr.push(allpokemon));
          setPoke(arr);
        }),
      ));
  }, []);

  setTimeout(() => {
    setLoad(false);
  }, 3000);

  return (
    <div className='App'>
      <Helmet>
        <title>Poke-React</title>
      </Helmet>
      <Cards pokemon={poke} id={pokeId}/>
      {/* {poke.map((img) => (
        <Cards key={img.id} pokemon={img} id={pokeId} />
      ))} */}
      {/* <button className="btn btn-primary">Ver más</button> */}
    </div>
  );
}

export default App;
