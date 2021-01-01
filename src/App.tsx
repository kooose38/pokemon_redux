import * as React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { GetPokemon } from "./actions/PokemonAction";
import { RootStore } from "./store";

const App = () => {
  const [pokemonName, setPokemonName] = useState("")
  const dispatch = useDispatch()
  const state = useSelector((state: RootStore) => state.pokemon)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(e.target.value);
  };

  return (
    <div className="App">
      <input type="text" onChange={handleChange} />
      <button onClick={async () => dispatch(await GetPokemon(pokemonName))}>検索</button>
      {
        state.pokemon && (
          <div>
            <img src={state.pokemon.sprites.front_default} alt="" />
            {
              state.pokemon.abilities.map(ability =>
                <p>{ability.ability.name}</p>
              )
            }
          </div>
        )
      }
    </div>
  );
}

export default App;
