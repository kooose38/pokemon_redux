import axios from "axios";
import { Dispatch } from "redux"
import { PokemonDispatchTypes, POKEMON_SUCCESS, POKEMON_LOADING, POKEMON_FAIL } from "./PokemonActionType";

export const GetPokemon = async (pokemon: string) => {
   return async (dispatch: Dispatch<PokemonDispatchTypes>) => {
      try {
         dispatch({
            type: POKEMON_LOADING
         })

         const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

         dispatch({
            type: POKEMON_SUCCESS,
            payload: {
               ...res.data
            }
         })

      } catch (e) {
         dispatch({
            type: POKEMON_FAIL
         })
      }
   }
};