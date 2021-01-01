import {
   PokemonDispatchTypes, POKEMON_FAIL, POKEMON_LOADING, POKEMON_SUCCESS
} from "../actions/PokemonActionType";
import { DefaultStateProps, defaultState } from "../initialState";

const pokemonReducer = (state: DefaultStateProps = defaultState, action: PokemonDispatchTypes): DefaultStateProps => {
   switch (action.type) {
      case POKEMON_FAIL:
         return {
            loading: false
         }
      case POKEMON_LOADING:
         return {
            loading: true
         }
      case POKEMON_SUCCESS:
         return {
            loading: false,
            pokemon: { ...action.payload }  //fetchしたdata
         }
      default:
         return state
   }
};

export default pokemonReducer;