import { combineReducers } from "redux";
import pokemonReducer from "./PokemonReducer";
//reducerの中心
const RootReducer = combineReducers({
   pokemon: pokemonReducer
});

export default RootReducer;