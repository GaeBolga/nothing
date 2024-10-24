import "./App.css";
import { useState } from "react";
import MyTitle from "./assets/components/MyTitle";
import PokemonCard from "./assets/components/PokemonCard";
import NavBar from "./components/NavBar";

function App() {

const pokemonList = [

  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
  
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
  
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
  
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
  
    {
      name: "mew",
      imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
    },
  ];



  const [count, setCount] = useState(0);
  const monpokemon = pokemonList[count];


  return (
    <section>
      <MyTitle />
      <div>
        <PokemonCard pokemon={monpokemon} />
        <p>{count}</p>
        <NavBar count={count} setCount={setCount} totalCount={pokemonList.length} />
      </div>
    </section>
  );
}

export default App;